var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { ModePaiement, RoleMission, StatutCredit, UserRole } from '../generated/prisma/browser.js';
let OperationsService = class OperationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    assertAccess(session, slug) {
        if (session.role === UserRole.ADMIN)
            return;
        if (session.role === UserRole.OPERATION &&
            session.operationSlug === slug) {
            return;
        }
        throw new ForbiddenException('Accès refusé à cette opération');
    }
    assertAdmin(session) {
        if (session.role !== UserRole.ADMIN) {
            throw new ForbiddenException('Action réservée à l’administrateur');
        }
    }
    mapStatutCreditToDb(val) {
        if (!val)
            return null;
        if (val === 'Oui')
            return StatutCredit.Oui;
        if (val === 'Non')
            return StatutCredit.Non;
        if (val === 'En cours' || val === 'En_cours')
            return StatutCredit.En_cours;
        return null;
    }
    formatOperationForFront(op) {
        return {
            ...op,
            ventes: (op.ventes ?? []).map((v) => ({
                ...v,
                creditAccepte: v.creditAccepte === StatutCredit.En_cours
                    ? 'En cours'
                    : (v.creditAccepte ?? ''),
            })),
        };
    }
    async findAll(session) {
        this.assertAdmin(session);
        const ops = await this.prisma.operation.findMany({
            include: {
                affectations: true,
                ventes: { orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] },
            },
            orderBy: { dateDebut: 'desc' },
        });
        return ops.map((op) => this.formatOperationForFront(op));
    }
    async findBySlug(session, slug) {
        this.assertAccess(session, slug);
        const op = await this.prisma.operation.findUnique({
            where: { slug },
            include: {
                affectations: true,
                ventes: { orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] },
            },
        });
        if (!op)
            throw new NotFoundException('Opération introuvable');
        return this.formatOperationForFront(op);
    }
    async create(session, body) {
        this.assertAdmin(session);
        const created = await this.prisma.operation.create({
            data: {
                slug: body.slug,
                nomOperation: body.nomOperation,
                magasin: body.magasin,
                ville: body.ville,
                loginId: body.loginId,
                loginPassword: body.loginPassword || 'admin123',
                dateDebut: body.dateDebut,
                dateFin: body.dateFin,
                coefOperation: Number(body.coefOperation) || 2.5,
                tva: Number(body.tva) || 1.2,
                vendeursEnPied: body.vendeursEnPied ?? [],
                affectations: {
                    create: (body.affectations ?? []).map((a) => ({
                        vendeurId: a.vendeurId,
                        role: a.role || RoleMission.Vendeur,
                        dateDebut: a.dateDebut,
                        dateFin: a.dateFin,
                        fraisJournalier: Number(a.fraisJournalier) || 0,
                        commission: Number(a.commission) || 0,
                    })),
                },
            },
            include: {
                affectations: true,
                ventes: true,
            },
        });
        return this.formatOperationForFront(created);
    }
    async update(session, slug, body) {
        this.assertAccess(session, slug);
        const existing = await this.prisma.operation.findUnique({
            where: { slug },
        });
        if (!existing)
            throw new NotFoundException('Opération introuvable');
        const isAdmin = session.role === UserRole.ADMIN;
        const updated = await this.prisma.$transaction(async (tx) => {
            if (isAdmin && Array.isArray(body.affectations)) {
                const incomingIds = body.affectations
                    .filter((a) => a.id)
                    .map((a) => a.id);
                await tx.affectationVendeur.deleteMany({
                    where: {
                        operationId: existing.id,
                        ...(incomingIds.length > 0 ? { id: { notIn: incomingIds } } : {}),
                    },
                });
                for (const a of body.affectations) {
                    if (a.id) {
                        await tx.affectationVendeur.upsert({
                            where: { id: a.id },
                            update: {
                                vendeurId: a.vendeurId,
                                role: a.role,
                                dateDebut: a.dateDebut,
                                dateFin: a.dateFin,
                                fraisJournalier: Number(a.fraisJournalier) || 0,
                                commission: Number(a.commission) || 0,
                            },
                            create: {
                                operationId: existing.id,
                                vendeurId: a.vendeurId,
                                role: a.role || RoleMission.Vendeur,
                                dateDebut: a.dateDebut,
                                dateFin: a.dateFin,
                                fraisJournalier: Number(a.fraisJournalier) || 0,
                                commission: Number(a.commission) || 0,
                            },
                        });
                    }
                    else {
                        await tx.affectationVendeur.create({
                            data: {
                                operationId: existing.id,
                                vendeurId: a.vendeurId,
                                role: a.role || RoleMission.Vendeur,
                                dateDebut: a.dateDebut,
                                dateFin: a.dateFin,
                                fraisJournalier: Number(a.fraisJournalier) || 0,
                                commission: Number(a.commission) || 0,
                            },
                        });
                    }
                }
            }
            return tx.operation.update({
                where: { id: existing.id },
                data: {
                    ...(body.vendeursEnPied !== undefined && {
                        vendeursEnPied: body.vendeursEnPied,
                    }),
                    ...(isAdmin &&
                        body.nomOperation !== undefined && {
                        nomOperation: body.nomOperation,
                    }),
                    ...(isAdmin &&
                        body.magasin !== undefined && { magasin: body.magasin }),
                    ...(isAdmin && body.ville !== undefined && { ville: body.ville }),
                    ...(isAdmin &&
                        body.loginId !== undefined && { loginId: body.loginId }),
                    ...(isAdmin &&
                        body.loginPassword !== undefined && {
                        loginPassword: body.loginPassword,
                    }),
                    ...(isAdmin &&
                        body.dateDebut !== undefined && { dateDebut: body.dateDebut }),
                    ...(isAdmin &&
                        body.dateFin !== undefined && { dateFin: body.dateFin }),
                    ...(isAdmin &&
                        body.coefOperation !== undefined && {
                        coefOperation: Number(body.coefOperation),
                    }),
                    ...(isAdmin && body.tva !== undefined && { tva: Number(body.tva) }),
                },
                include: {
                    affectations: true,
                    ventes: { orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] },
                },
            });
        });
        return this.formatOperationForFront(updated);
    }
    async remove(session, id) {
        this.assertAdmin(session);
        await this.prisma.operation.delete({ where: { id } });
        return { ok: true };
    }
    async addVente(session, slug, body) {
        this.assertAccess(session, slug);
        const op = await this.prisma.operation.findUnique({ where: { slug } });
        if (!op)
            throw new NotFoundException('Opération introuvable');
        const created = await this.prisma.vente.create({
            data: {
                operationId: op.id,
                date: body.date,
                numBL: body.numBL ?? '',
                client: (body.client ?? '').toUpperCase(),
                prixVenteTTC: Number(body.prixVenteTTC) || 0,
                acompte: Number(body.acompte) || 0,
                prixAchatHT: Number(body.prixAchatHT) || 0,
                modele: (body.modele ?? '').toUpperCase(),
                vendeurId: body.vendeurId ?? '',
                finisseurId: body.finisseurId ?? '',
                paiement: body.paiement || ModePaiement.COMPTANT,
                livraisonTTC: Number(body.livraisonTTC) || 0,
                creditAccepte: this.mapStatutCreditToDb(body.creditAccepte),
                observations: body.observations ?? 'Contremarque',
            },
        });
        return {
            ...created,
            creditAccepte: created.creditAccepte === StatutCredit.En_cours
                ? 'En cours'
                : (created.creditAccepte ?? ''),
        };
    }
    async updateVente(session, slug, venteId, body) {
        this.assertAccess(session, slug);
        const updated = await this.prisma.vente.update({
            where: { id: venteId },
            data: {
                ...(body.date !== undefined && { date: body.date }),
                ...(body.numBL !== undefined && { numBL: body.numBL }),
                ...(body.client !== undefined && { client: body.client.toUpperCase() }),
                ...(body.prixVenteTTC !== undefined && {
                    prixVenteTTC: Number(body.prixVenteTTC) || 0,
                }),
                ...(body.acompte !== undefined && {
                    acompte: Number(body.acompte) || 0,
                }),
                ...(body.prixAchatHT !== undefined && {
                    prixAchatHT: Number(body.prixAchatHT) || 0,
                }),
                ...(body.modele !== undefined && { modele: body.modele.toUpperCase() }),
                ...(body.vendeurId !== undefined && { vendeurId: body.vendeurId }),
                ...(body.finisseurId !== undefined && {
                    finisseurId: body.finisseurId,
                }),
                ...(body.paiement !== undefined && {
                    paiement: body.paiement,
                }),
                ...(body.livraisonTTC !== undefined && {
                    livraisonTTC: Number(body.livraisonTTC) || 0,
                }),
                ...(body.creditAccepte !== undefined && {
                    creditAccepte: this.mapStatutCreditToDb(body.creditAccepte),
                }),
                ...(body.observations !== undefined && {
                    observations: body.observations,
                }),
            },
        });
        return {
            ...updated,
            creditAccepte: updated.creditAccepte === StatutCredit.En_cours
                ? 'En cours'
                : (updated.creditAccepte ?? ''),
        };
    }
    async deleteVente(session, slug, venteId) {
        this.assertAccess(session, slug);
        await this.prisma.vente.delete({ where: { id: venteId } });
        return { ok: true };
    }
};
OperationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OperationsService);
export { OperationsService };
//# sourceMappingURL=operations.service.js.map
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { ModePaiement, RoleMission, StatutCredit, UserRole } from '../generated/prisma/browser.js';

export interface SessionContext {
  role: UserRole;
  operationSlug?: string | null;
}

@Injectable()
export class OperationsService {
  constructor(private readonly prisma: PrismaService) {}

  private assertAccess(session: SessionContext, slug: string) {
    if (session.role === UserRole.ADMIN) return;
    if (
      session.role === UserRole.OPERATION &&
      session.operationSlug === slug
    ) {
      return;
    }
    throw new ForbiddenException('Accès refusé à cette opération');
  }

  private assertAdmin(session: SessionContext) {
    if (session.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Action réservée à l’administrateur');
    }
  }

  private mapStatutCreditToDb(val?: string): StatutCredit | null {
    if (!val) return null;
    if (val === 'Oui') return StatutCredit.Oui;
    if (val === 'Non') return StatutCredit.Non;
    if (val === 'En cours' || val === 'En_cours') return StatutCredit.En_cours;
    return null;
  }

  private formatOperationForFront(op: any) {
    return {
      ...op,
      ventes: (op.ventes ?? []).map((v: any) => ({
        ...v,
        creditAccepte:
          v.creditAccepte === StatutCredit.En_cours
            ? 'En cours'
            : (v.creditAccepte ?? ''),
      })),
    };
  }

  async findAll(session: SessionContext) {
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

  async findBySlug(session: SessionContext, slug: string) {
    this.assertAccess(session, slug);
    const op = await this.prisma.operation.findUnique({
      where: { slug },
      include: {
        affectations: true,
        ventes: { orderBy: [{ date: 'asc' }, { createdAt: 'asc' }] },
      },
    });
    if (!op) throw new NotFoundException('Opération introuvable');
    return this.formatOperationForFront(op);
  }

  async create(session: SessionContext, body: any) {
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
          create: (body.affectations ?? []).map((a: any) => ({
            vendeurId: a.vendeurId,
            role: (a.role as RoleMission) || RoleMission.Vendeur,
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

  async update(session: SessionContext, slug: string, body: any) {
    this.assertAccess(session, slug);

    const existing = await this.prisma.operation.findUnique({
      where: { slug },
    });
    if (!existing) throw new NotFoundException('Opération introuvable');

    const isAdmin = session.role === UserRole.ADMIN;

    const updated = await this.prisma.$transaction(async (tx) => {
      // Si l'admin envoie le tableau affectations complet (depuis la modale d'édition), on synchronise
      if (isAdmin && Array.isArray(body.affectations)) {
        const incomingIds = body.affectations
          .filter((a: any) => a.id)
          .map((a: any) => a.id);

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
                role: a.role as RoleMission,
                dateDebut: a.dateDebut,
                dateFin: a.dateFin,
                fraisJournalier: Number(a.fraisJournalier) || 0,
                commission: Number(a.commission) || 0,
              },
              create: {
                operationId: existing.id,
                vendeurId: a.vendeurId,
                role: (a.role as RoleMission) || RoleMission.Vendeur,
                dateDebut: a.dateDebut,
                dateFin: a.dateFin,
                fraisJournalier: Number(a.fraisJournalier) || 0,
                commission: Number(a.commission) || 0,
              },
            });
          } else {
            await tx.affectationVendeur.create({
              data: {
                operationId: existing.id,
                vendeurId: a.vendeurId,
                role: (a.role as RoleMission) || RoleMission.Vendeur,
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
          // Magasin + Admin peuvent gérer vendeursEnPied
          ...(body.vendeursEnPied !== undefined && {
            vendeursEnPied: body.vendeursEnPied,
          }),
          // Champs réservés à l'Admin uniquement
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

  async remove(session: SessionContext, id: string) {
    this.assertAdmin(session);
    await this.prisma.operation.delete({ where: { id } });
    return { ok: true };
  }

  // ==========================================
  // VENTES (CRUD)
  // ==========================================

  async addVente(session: SessionContext, slug: string, body: any) {
    this.assertAccess(session, slug);
    const op = await this.prisma.operation.findUnique({ where: { slug } });
    if (!op) throw new NotFoundException('Opération introuvable');

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
        paiement: (body.paiement as ModePaiement) || ModePaiement.COMPTANT,
        livraisonTTC: Number(body.livraisonTTC) || 0,
        creditAccepte: this.mapStatutCreditToDb(body.creditAccepte),
        observations: body.observations ?? 'Contremarque',
      },
    });

    return {
      ...created,
      creditAccepte:
        created.creditAccepte === StatutCredit.En_cours
          ? 'En cours'
          : (created.creditAccepte ?? ''),
    };
  }

  async updateVente(
    session: SessionContext,
    slug: string,
    venteId: string,
    body: any,
  ) {
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
          paiement: body.paiement as ModePaiement,
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
      creditAccepte:
        updated.creditAccepte === StatutCredit.En_cours
          ? 'En cours'
          : (updated.creditAccepte ?? ''),
    };
  }

  async deleteVente(session: SessionContext, slug: string, venteId: string) {
    this.assertAccess(session, slug);
    await this.prisma.vente.delete({ where: { id: venteId } });
    return { ok: true };
  }
}

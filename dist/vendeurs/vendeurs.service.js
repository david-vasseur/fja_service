var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { CryptoService } from '../common/crypto.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
let VendeursService = class VendeursService {
    prisma;
    crypto;
    constructor(prisma, crypto) {
        this.prisma = prisma;
        this.crypto = crypto;
    }
    sanitizeVendeur(v) {
        const { nirEncrypted, ...rest } = v;
        return {
            ...rest,
            hasNir: Boolean(nirEncrypted),
            nirMasque: v.nirLast4 ? `••••••••••• ${v.nirLast4}` : null,
        };
    }
    async findAll() {
        const list = await this.prisma.vendeur.findMany({
            orderBy: [{ actif: 'desc' }, { nom: 'asc' }, { prenom: 'asc' }],
        });
        return list.map((v) => this.sanitizeVendeur(v));
    }
    async findOneForContract(id) {
        const v = await this.prisma.vendeur.findUnique({ where: { id } });
        if (!v)
            throw new NotFoundException('Vendeur introuvable');
        const { nirEncrypted, ...rest } = v;
        return {
            ...rest,
            nir: nirEncrypted ? this.crypto.decryptNir(nirEncrypted) : '',
        };
    }
    async create(dto) {
        if (!dto.prenom?.trim() || !dto.nom?.trim()) {
            throw new BadRequestException('Prénom et nom requis');
        }
        const nirData = dto.nir?.trim()
            ? this.crypto.encryptNir(dto.nir.trim())
            : { nirEncrypted: null, nirLast4: null };
        const created = await this.prisma.vendeur.create({
            data: {
                prenom: dto.prenom.trim(),
                nom: dto.nom.trim().toUpperCase(),
                email: dto.email?.trim() || null,
                telephone: dto.telephone?.trim() || null,
                adresse: dto.adresse?.trim() || null,
                codePostal: dto.codePostal?.trim() || null,
                ville: dto.ville?.trim() || null,
                dateNaissance: dto.dateNaissance || null,
                lieuNaissance: dto.lieuNaissance?.trim() || null,
                nationalite: dto.nationalite?.trim() || 'Française',
                nirEncrypted: nirData.nirEncrypted,
                nirLast4: nirData.nirLast4,
                tauxCommissionBase: dto.tauxCommissionBase ?? 5,
                fraisJournalierDef: dto.fraisJournalierDef ?? 80,
                actif: dto.actif ?? true,
            },
        });
        return this.sanitizeVendeur(created);
    }
    async update(id, dto) {
        const existing = await this.prisma.vendeur.findUnique({ where: { id } });
        if (!existing)
            throw new NotFoundException('Vendeur introuvable');
        let nirUpdate = {};
        if (dto.nir !== undefined) {
            nirUpdate = dto.nir.trim()
                ? this.crypto.encryptNir(dto.nir.trim())
                : { nirEncrypted: null, nirLast4: null };
        }
        const updated = await this.prisma.vendeur.update({
            where: { id },
            data: {
                ...(dto.prenom !== undefined && { prenom: dto.prenom.trim() }),
                ...(dto.nom !== undefined && { nom: dto.nom.trim().toUpperCase() }),
                ...(dto.email !== undefined && { email: dto.email.trim() || null }),
                ...(dto.telephone !== undefined && {
                    telephone: dto.telephone.trim() || null,
                }),
                ...(dto.adresse !== undefined && {
                    adresse: dto.adresse.trim() || null,
                }),
                ...(dto.codePostal !== undefined && {
                    codePostal: dto.codePostal.trim() || null,
                }),
                ...(dto.ville !== undefined && { ville: dto.ville.trim() || null }),
                ...(dto.dateNaissance !== undefined && {
                    dateNaissance: dto.dateNaissance || null,
                }),
                ...(dto.lieuNaissance !== undefined && {
                    lieuNaissance: dto.lieuNaissance.trim() || null,
                }),
                ...(dto.nationalite !== undefined && {
                    nationalite: dto.nationalite.trim() || 'Française',
                }),
                ...nirUpdate,
                ...(dto.tauxCommissionBase !== undefined && {
                    tauxCommissionBase: dto.tauxCommissionBase,
                }),
                ...(dto.fraisJournalierDef !== undefined && {
                    fraisJournalierDef: dto.fraisJournalierDef,
                }),
                ...(dto.actif !== undefined && { actif: dto.actif }),
            },
        });
        return this.sanitizeVendeur(updated);
    }
    async remove(id) {
        const countAff = await this.prisma.affectationVendeur.count({
            where: { vendeurId: id },
        });
        if (countAff > 0) {
            throw new BadRequestException('Ce vendeur est affecté à une ou plusieurs opérations. Désactivez-le plutôt que de le supprimer.');
        }
        await this.prisma.vendeur.delete({ where: { id } });
        return { ok: true };
    }
};
VendeursService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        CryptoService])
], VendeursService);
export { VendeursService };
//# sourceMappingURL=vendeurs.service.js.map
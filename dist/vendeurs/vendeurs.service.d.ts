import { CryptoService } from '../common/crypto.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
export interface UpsertVendeurDto {
    prenom: string;
    nom: string;
    email?: string;
    telephone?: string;
    adresse?: string;
    codePostal?: string;
    ville?: string;
    dateNaissance?: string;
    lieuNaissance?: string;
    nationalite?: string;
    nir?: string;
    tauxCommissionBase?: number;
    fraisJournalierDef?: number;
    actif?: boolean;
}
export declare class VendeursService {
    private readonly prisma;
    private readonly crypto;
    constructor(prisma: PrismaService, crypto: CryptoService);
    private sanitizeVendeur;
    findAll(): Promise<any[]>;
    findOneForContract(id: string): Promise<{
        nir: string;
        id: string;
        email: string | null;
        nom: string;
        telephone: string | null;
        createdAt: Date;
        updatedAt: Date;
        ville: string | null;
        prenom: string;
        adresse: string | null;
        codePostal: string | null;
        dateNaissance: string | null;
        lieuNaissance: string | null;
        nationalite: string | null;
        nirLast4: string | null;
        tauxCommissionBase: number;
        fraisJournalierDef: number;
        actif: boolean;
    }>;
    create(dto: UpsertVendeurDto): Promise<any>;
    update(id: string, dto: Partial<UpsertVendeurDto>): Promise<any>;
    remove(id: string): Promise<{
        ok: boolean;
    }>;
}

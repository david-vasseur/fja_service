import { PrismaService } from '../prisma/prisma.service.js';
import { ModePaiement, UserRole } from '../generated/prisma/browser.js';
export interface SessionContext {
    role: UserRole;
    operationSlug?: string | null;
}
export declare class OperationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private assertAccess;
    private assertAdmin;
    private mapStatutCreditToDb;
    private formatOperationForFront;
    findAll(session: SessionContext): Promise<any[]>;
    findBySlug(session: SessionContext, slug: string): Promise<any>;
    create(session: SessionContext, body: any): Promise<any>;
    update(session: SessionContext, slug: string, body: any): Promise<any>;
    remove(session: SessionContext, id: string): Promise<{
        ok: boolean;
    }>;
    addVente(session: SessionContext, slug: string, body: any): Promise<{
        creditAccepte: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        vendeurId: string;
        date: string;
        operationId: string;
        numBL: string;
        client: string;
        prixVenteTTC: number;
        acompte: number;
        prixAchatHT: number;
        modele: string;
        finisseurId: string;
        paiement: ModePaiement;
        livraisonTTC: number;
        observations: string;
    }>;
    updateVente(session: SessionContext, slug: string, venteId: string, body: any): Promise<{
        creditAccepte: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        vendeurId: string;
        date: string;
        operationId: string;
        numBL: string;
        client: string;
        prixVenteTTC: number;
        acompte: number;
        prixAchatHT: number;
        modele: string;
        finisseurId: string;
        paiement: ModePaiement;
        livraisonTTC: number;
        observations: string;
    }>;
    deleteVente(session: SessionContext, slug: string, venteId: string): Promise<{
        ok: boolean;
    }>;
}

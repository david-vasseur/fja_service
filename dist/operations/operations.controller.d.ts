import type { Request } from 'express';
import { OperationsService } from './operations.service.js';
export declare class OperationsController {
    private readonly operationsService;
    constructor(operationsService: OperationsService);
    private getSession;
    findAll(req: Request): Promise<any[]>;
    findBySlug(req: Request, slug: string): Promise<any>;
    create(req: Request, body: any): Promise<any>;
    update(req: Request, slug: string, body: any): Promise<any>;
    remove(req: Request, id: string): Promise<{
        ok: boolean;
    }>;
    addVente(req: Request, slug: string, body: any): Promise<{
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
        paiement: import("../generated/prisma/enums.js").ModePaiement;
        livraisonTTC: number;
        observations: string;
    }>;
    updateVente(req: Request, slug: string, venteId: string, body: any): Promise<{
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
        paiement: import("../generated/prisma/enums.js").ModePaiement;
        livraisonTTC: number;
        observations: string;
    }>;
    deleteVente(req: Request, slug: string, venteId: string): Promise<{
        ok: boolean;
    }>;
}

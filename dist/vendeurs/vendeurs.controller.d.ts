import * as vendeursService from './vendeurs.service.js';
export declare class VendeursController {
    private readonly vendeursService;
    constructor(vendeursService: vendeursService.VendeursService);
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
    create(body: vendeursService.UpsertVendeurDto): Promise<any>;
    update(id: string, body: Partial<vendeursService.UpsertVendeurDto>): Promise<any>;
    remove(id: string): Promise<{
        ok: boolean;
    }>;
}

export declare const RoleMission: {
    readonly Vendeur: "Vendeur";
    readonly Finisseur: "Finisseur";
};
export type RoleMission = (typeof RoleMission)[keyof typeof RoleMission];
export declare const ModePaiement: {
    readonly COMPTANT: "COMPTANT";
    readonly CREDIT: "CREDIT";
    readonly CB: "CB";
    readonly CHEQUE: "CHEQUE";
    readonly VIREMENT: "VIREMENT";
};
export type ModePaiement = (typeof ModePaiement)[keyof typeof ModePaiement];
export declare const StatutCredit: {
    readonly Oui: "Oui";
    readonly Non: "Non";
    readonly En_cours: "En_cours";
};
export type StatutCredit = (typeof StatutCredit)[keyof typeof StatutCredit];
export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly OPERATION: "OPERATION";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

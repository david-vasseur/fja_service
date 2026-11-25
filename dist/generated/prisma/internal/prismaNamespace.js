import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Admin: 'Admin',
    SessionFingerprint: 'SessionFingerprint',
    PushSubscription: 'PushSubscription',
    Vendeur: 'Vendeur',
    Operation: 'Operation',
    AffectationVendeur: 'AffectationVendeur',
    Vente: 'Vente'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AdminScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    nom: 'nom',
    telephone: 'telephone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionFingerprintScalarFieldEnum = {
    id: 'id',
    tokenHash: 'tokenHash',
    fingerprintHash: 'fingerprintHash',
    role: 'role',
    adminId: 'adminId',
    operationSlug: 'operationSlug',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    lastActivityAt: 'lastActivityAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
export const PushSubscriptionScalarFieldEnum = {
    id: 'id',
    endpoint: 'endpoint',
    p256dh: 'p256dh',
    auth: 'auth',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
export const VendeurScalarFieldEnum = {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    telephone: 'telephone',
    adresse: 'adresse',
    codePostal: 'codePostal',
    ville: 'ville',
    dateNaissance: 'dateNaissance',
    lieuNaissance: 'lieuNaissance',
    nationalite: 'nationalite',
    nirEncrypted: 'nirEncrypted',
    nirLast4: 'nirLast4',
    tauxCommissionBase: 'tauxCommissionBase',
    fraisJournalierDef: 'fraisJournalierDef',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OperationScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    nomOperation: 'nomOperation',
    magasin: 'magasin',
    ville: 'ville',
    loginId: 'loginId',
    loginPassword: 'loginPassword',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    coefOperation: 'coefOperation',
    tva: 'tva',
    vendeursEnPied: 'vendeursEnPied',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AffectationVendeurScalarFieldEnum = {
    id: 'id',
    operationId: 'operationId',
    vendeurId: 'vendeurId',
    role: 'role',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    fraisJournalier: 'fraisJournalier',
    commission: 'commission',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const VenteScalarFieldEnum = {
    id: 'id',
    operationId: 'operationId',
    date: 'date',
    numBL: 'numBL',
    client: 'client',
    prixVenteTTC: 'prixVenteTTC',
    acompte: 'acompte',
    prixAchatHT: 'prixAchatHT',
    modele: 'modele',
    vendeurId: 'vendeurId',
    finisseurId: 'finisseurId',
    paiement: 'paiement',
    livraisonTTC: 'livraisonTTC',
    creditAccepte: 'creditAccepte',
    observations: 'observations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
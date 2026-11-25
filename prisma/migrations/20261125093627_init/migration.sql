-- CreateEnum
CREATE TYPE "RoleMission" AS ENUM ('Vendeur', 'Finisseur');

-- CreateEnum
CREATE TYPE "ModePaiement" AS ENUM ('COMPTANT', 'CREDIT', 'CB', 'CHEQUE', 'VIREMENT');

-- CreateEnum
CREATE TYPE "StatutCredit" AS ENUM ('Oui', 'Non', 'En cours');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'OPERATION');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "nom" TEXT,
    "telephone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionFingerprint" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "fingerprintHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "adminId" TEXT,
    "operationSlug" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "lastActivityAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SessionFingerprint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PushSubscription" (
    "id" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PushSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendeur" (
    "id" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT,
    "adresse" TEXT,
    "codePostal" TEXT,
    "ville" TEXT,
    "dateNaissance" TEXT,
    "lieuNaissance" TEXT,
    "nationalite" TEXT DEFAULT 'Française',
    "nirEncrypted" TEXT,
    "nirLast4" TEXT,
    "tauxCommissionBase" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "fraisJournalierDef" DOUBLE PRECISION NOT NULL DEFAULT 80,
    "actif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nomOperation" TEXT NOT NULL,
    "magasin" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "loginId" TEXT NOT NULL,
    "loginPassword" TEXT NOT NULL,
    "dateDebut" TEXT NOT NULL,
    "dateFin" TEXT NOT NULL,
    "coefOperation" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
    "tva" DOUBLE PRECISION NOT NULL DEFAULT 1.2,
    "vendeursEnPied" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AffectationVendeur" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "vendeurId" TEXT NOT NULL,
    "role" "RoleMission" NOT NULL DEFAULT 'Vendeur',
    "dateDebut" TEXT NOT NULL,
    "dateFin" TEXT NOT NULL,
    "fraisJournalier" DOUBLE PRECISION NOT NULL DEFAULT 80,
    "commission" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AffectationVendeur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vente" (
    "id" TEXT NOT NULL,
    "operationId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "numBL" TEXT NOT NULL DEFAULT '',
    "client" TEXT NOT NULL,
    "prixVenteTTC" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "acompte" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "prixAchatHT" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "modele" TEXT NOT NULL DEFAULT '',
    "vendeurId" TEXT NOT NULL DEFAULT '',
    "finisseurId" TEXT NOT NULL DEFAULT '',
    "paiement" "ModePaiement" NOT NULL DEFAULT 'COMPTANT',
    "livraisonTTC" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "creditAccepte" "StatutCredit",
    "observations" TEXT NOT NULL DEFAULT 'Contremarque',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SessionFingerprint_tokenHash_key" ON "SessionFingerprint"("tokenHash");

-- CreateIndex
CREATE INDEX "SessionFingerprint_tokenHash_idx" ON "SessionFingerprint"("tokenHash");

-- CreateIndex
CREATE INDEX "SessionFingerprint_expiresAt_idx" ON "SessionFingerprint"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "PushSubscription_endpoint_key" ON "PushSubscription"("endpoint");

-- CreateIndex
CREATE INDEX "Vendeur_nom_prenom_idx" ON "Vendeur"("nom", "prenom");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_slug_key" ON "Operation"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_loginId_key" ON "Operation"("loginId");

-- CreateIndex
CREATE INDEX "Operation_slug_idx" ON "Operation"("slug");

-- CreateIndex
CREATE INDEX "AffectationVendeur_operationId_idx" ON "AffectationVendeur"("operationId");

-- CreateIndex
CREATE INDEX "AffectationVendeur_vendeurId_idx" ON "AffectationVendeur"("vendeurId");

-- CreateIndex
CREATE INDEX "Vente_operationId_idx" ON "Vente"("operationId");

-- CreateIndex
CREATE INDEX "Vente_date_idx" ON "Vente"("date");

-- AddForeignKey
ALTER TABLE "AffectationVendeur" ADD CONSTRAINT "AffectationVendeur_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "Operation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AffectationVendeur" ADD CONSTRAINT "AffectationVendeur_vendeurId_fkey" FOREIGN KEY ("vendeurId") REFERENCES "Vendeur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vente" ADD CONSTRAINT "Vente_operationId_fkey" FOREIGN KEY ("operationId") REFERENCES "Operation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

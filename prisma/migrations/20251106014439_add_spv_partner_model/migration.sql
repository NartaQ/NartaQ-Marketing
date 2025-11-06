-- CreateTable
CREATE TABLE "public"."spv_partner_applications" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "website" TEXT,
    "registrationNumber" TEXT,
    "jurisdiction" TEXT NOT NULL,
    "yearsInBusiness" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "linkedin" TEXT,
    "hasSPVExperience" BOOLEAN NOT NULL DEFAULT false,
    "numberOfSPVsManaged" TEXT NOT NULL,
    "typicalSPVSize" TEXT NOT NULL,
    "primarySectors" TEXT NOT NULL,
    "jurisdictionsServed" TEXT NOT NULL,
    "operationalCapabilities" TEXT NOT NULL,
    "whyPartner" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "spv_partner_applications_pkey" PRIMARY KEY ("id")
);

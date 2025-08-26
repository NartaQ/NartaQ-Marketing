-- CreateTable
CREATE TABLE "public"."founder_applications" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "workEmail" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "sector" TEXT[],
    "otherSector" TEXT,
    "fundingStage" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "shortPitch" TEXT NOT NULL,
    "pitchDeckUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "founder_applications_pkey" PRIMARY KEY ("id")
);

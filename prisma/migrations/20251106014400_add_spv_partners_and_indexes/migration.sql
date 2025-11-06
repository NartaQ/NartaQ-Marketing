-- AlterTable
ALTER TABLE "public"."founder_applications" ADD COLUMN     "companyLinkedIn" TEXT,
ADD COLUMN     "founderLinkedIn" TEXT;

-- AlterTable
ALTER TABLE "public"."investor_applications" ADD COLUMN     "companyLinkedIn" TEXT,
ADD COLUMN     "investorType" TEXT NOT NULL DEFAULT 'investor',
ADD COLUMN     "otherGeography" TEXT,
ADD COLUMN     "personalLinkedIn" TEXT,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."email_queue" (
    "id" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "htmlContent" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 3,
    "lastError" TEXT,
    "scheduledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_queue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "email_queue_status_scheduledAt_idx" ON "public"."email_queue"("status", "scheduledAt");

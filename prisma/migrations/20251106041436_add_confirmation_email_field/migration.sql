-- AlterTable
ALTER TABLE "public"."career_applications" ADD COLUMN     "emailConfirmationSent" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "public"."founder_applications" ADD COLUMN     "emailConfirmationSent" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "public"."investor_applications" ADD COLUMN     "emailConfirmationSent" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "public"."newsletter_subscribers" ADD COLUMN     "emailConfirmationSent" BOOLEAN DEFAULT false;

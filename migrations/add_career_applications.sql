-- Add career applications table
CREATE TABLE IF NOT EXISTS "career_applications" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "position" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "workType" TEXT NOT NULL,
    "skills" TEXT[] NOT NULL,
    "otherSkills" TEXT,
    "motivation" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "portfolioUrl" TEXT,
    "cvUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "career_applications_pkey" PRIMARY KEY ("id")
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS "career_applications_email_idx" ON "career_applications"("email");

-- Create index on position for filtering
CREATE INDEX IF NOT EXISTS "career_applications_position_idx" ON "career_applications"("position");

-- Create index on createdAt for sorting
CREATE INDEX IF NOT EXISTS "career_applications_createdAt_idx" ON "career_applications"("createdAt");
-- Migration: Add investor_applications table
-- This migration adds the InvestorApplication table to support investor application forms

CREATE TABLE "investor_applications" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "workEmail" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "investmentFocus" TEXT[],
    "otherFocus" TEXT,
    "ticketSize" TEXT NOT NULL,
    "targetGeography" TEXT[],
    "referralSource" TEXT NOT NULL,
    "otherSource" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investor_applications_pkey" PRIMARY KEY ("id")
);

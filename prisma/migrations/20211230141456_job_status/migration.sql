/*
  Warnings:

  - Added the required column `status` to the `job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('COMPLETED', 'SCHEDULED');

-- AlterTable
ALTER TABLE "job" ADD COLUMN     "status" "JobStatus" NOT NULL;

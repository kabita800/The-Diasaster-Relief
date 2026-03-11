-- CreateEnum
CREATE TYPE "Role" AS ENUM ('RESCUE_TEAM', 'DONOR', 'VICTIM');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VICTIM';

-- CreateEnum
CREATE TYPE "Flavors" AS ENUM ('Chocolate', 'Vennela', 'Butter');

-- CreateTable
CREATE TABLE "Cake" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "flavor" "Flavors" NOT NULL DEFAULT 'Chocolate',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cake_pkey" PRIMARY KEY ("id")
);

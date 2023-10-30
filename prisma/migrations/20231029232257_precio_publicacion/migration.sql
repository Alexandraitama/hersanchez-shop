/*
  Warnings:

  - Added the required column `precio` to the `Publicacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publicacion" ADD COLUMN     "precio" DECIMAL(65,30) NOT NULL;

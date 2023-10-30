-- DropForeignKey
ALTER TABLE "Publicacion" DROP CONSTRAINT "Publicacion_compradorId_fkey";

-- AlterTable
ALTER TABLE "Publicacion" ALTER COLUMN "compradorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Publicacion" ADD CONSTRAINT "Publicacion_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `Estado` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ruta]` on the table `Foto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Estado_nombre_key" ON "Estado"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Foto_ruta_key" ON "Foto"("ruta");

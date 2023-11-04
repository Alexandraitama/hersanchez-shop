// api/categorias.js

import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {

    const categoria = getRouterParam(event, 'categoria')

    const publicaciones = await prisma.publicacion.findMany({
      where: {categoriaId: Number(categoria)}
    })

    // console.log({
    //   categoria,
    //   publicaciones
    // })

    return {
      publicaciones
    };

  } catch (error) {
    console.error(error)
  }
});
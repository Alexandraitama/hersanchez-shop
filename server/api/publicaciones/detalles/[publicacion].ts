// api/categorias.js

import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {

    const publicacion = getRouterParam(event, 'publicacion')

    const detalles = await prisma.publicacion.findFirst({
      where: {id: Number(publicacion)}
    })

    // console.log({
    //   categoria,
    //   publicaciones
    // })

    return {
      detalles
    };

  } catch (error) {
    console.error(error)
  }
});
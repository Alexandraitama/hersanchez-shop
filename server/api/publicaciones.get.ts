import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const params = getQuery(event)

  if ("categoria" in params) {
    try {

      const publicaciones = await prisma.publicacion.findMany({
        where: { categoriaId: Number(params.categoria) }
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
  }
  else if ("id" in params) {
    try {

      // const publicacion = getRouterParam(event, 'publicacion')

      const detalles = await prisma.publicacion.findFirst({
        where: { id: Number(params.id) }
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
  }
  else {
    try {

      // const publicacion = getRouterParam(event, 'publicacion')

      const publicaciones = await prisma.publicacion.findMany()

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
  }

})

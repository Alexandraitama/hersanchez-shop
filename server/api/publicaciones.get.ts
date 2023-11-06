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

      const publicacion = await prisma.publicacion.findFirst({
        where: { id: Number(params.id) }
      })

      // console.log({
      //   categoria,
      //   publicaciones
      // })

      return {
        publicacion
      };

    } catch (error) {
      console.error(error)
    }
  } else if ("ids" in params) {
    try {

      // const publicacion = getRouterParam(event, 'publicacion')
      console.log({ids: params.ids})
      let ids = [];
      if(params.ids.length > 0){
        
         ids = params.ids.split(',').map(x => parseInt(x));
      }
      const publicaciones = await prisma.publicacion.findMany({
        where: { id: { in: ids } }
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

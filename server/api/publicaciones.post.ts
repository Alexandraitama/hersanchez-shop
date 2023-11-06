import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  await prisma.publicacion.updateMany({
    where: { id: { in: body.ids }},
      data: {
        estadoId: body.estadoId
      }
    ,
    // create: {
    //   // id: 1,
    //   // producto: 'apartamento en la quiracha',
    //   // descripcion: 'apartamento en la quiracha',
    //   // categoriaId: 3,
    //   // estadoId: 1,
    //   // precio: 12000,
    //   // vendedorId: 1
    // },
  })

  // return {
  //   'success'
  // } // 'Hello publicaciones.post'
})

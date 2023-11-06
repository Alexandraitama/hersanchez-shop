import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event);


  console.log({ body })

  await prisma.publicacion.create({
    // where: { id: { in: body.ids } },
    data: {
      producto: body.producto,
      descripcion: body.descripcion,
      precio: body.precio,
      estado: { connect: { id: body.estadoId } },
      categoria: { connect: { id: body.categoriaId } },
      vendedor: { connect: { id: body.vendedorId } },
    }
  })
})

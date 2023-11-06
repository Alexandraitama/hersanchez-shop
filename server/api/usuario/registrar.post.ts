import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log('body: ', body)
  const usuario = await prisma.cliente.create({
    data: {
      ...body
    }
    // where: { email: body.email, password: body.password},
      
    // create: {
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
  return {
    usuario
  }
})

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const usuario = await prisma.cliente.findFirst({
    where: { email: body.email, password: body.password},
  })
  return {
    usuario
  }
})

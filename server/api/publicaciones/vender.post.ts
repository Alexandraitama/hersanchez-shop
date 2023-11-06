import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  await prisma.publicacion.updateMany({
    where: { id: { in: body.ids } },
    data: {
      estadoId: body.estadoId
    }
  })
})

// import prisma from 'prisma'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const response = await Promise.all([
    prisma.usuario.upsert({
      where: { login: 'admin' },
      update: {},
      create: {
        id: 1,
        nombres: 'Maira',
        apellidos: 'Hernandez',
        login: 'admin',
        password: '123456'
        
      },
    }),
    prisma.usuario.upsert({
        where: { login: 'root' },
        update: {},
        create: {
          id: 2,
          nombres: 'Simon',
          apellidos: 'Sanchez',
          login: 'root',
          password: '123456'
          
        },
      }),
    prisma.cliente.upsert({
      where: { email: 'maira@vercel.com' },
      update: {},
      create: {
        id: 2,
        nombres: 'Maira',
        apellidos: 'Hernandez',
        email: 'maira@vercel.com',
        password: '123456'
        
      },
    }),
    await prisma.cliente.upsert({
      where: { email: 'simon@vercel.com' },
      update: {},
      create: {
        id: 1,
        nombres: 'Simon',
        apellidos: 'Garcia',
        email: 'simon@vercel.com',
        password: '123456'
        
      },
    }),
    await prisma.estado.upsert({
        where: { nombre: 'pendiente' },
        update: {},
        create: {
          id: 1,
          nombre: 'pendiente',
          descripcion: 'publicación pendiente por publicar'
        },
      }),
    await prisma.estado.upsert({
        where: { nombre: 'disponible' },
        update: {},
        create: {
          id: 2,
          nombre: 'disponible',
          descripcion: 'publicación activa'
        },
      }),
      await prisma.estado.upsert({
        where: { nombre: 'inactivo' },
        update: {},
        create: {
          id: 3,
          nombre: 'inactivo',
          descripcion: 'publicación inactiva'
        },
      }),
      await prisma.estado.upsert({
        where: { nombre: 'eliminado' },
        update: {},
        create: {
          id: 4,
          nombre: 'eliminado',
          descripcion: 'publicación eliminada'
        },
      }),
    await prisma.categoria.upsert({
        where: { nombre: 'carros' },
        update: {},
        create: {
          id: 1,
          nombre: 'carros'
        },
      }),
      await prisma.categoria.upsert({
        where: { nombre: 'casas' },
        update: {},
        create: {
          id: 2,
          nombre: 'casas'
        },
      }),
      await prisma.categoria.upsert({
        where: { nombre: 'apartamentos' },
        update: {},
        create: {
          id: 3,
          nombre: 'apartamentos'
        },
      }),
      await prisma.publicacion.upsert({
        where: { id: 1 },
        update: {},
        create: {
          id: 1,
          producto: 'apartamento en la quiracha',
          descripcion: 'apartamento en la quiracha',
          categoriaId: 3,
          estadoId: 1,
          precio: 12000,
          vendedorId: 1
        },
      }),
      // comentar estos dos registros durante el primer seed
      await prisma.publicacion.upsert({
        where: { id: 2 },
        update: {},
        create: {
          id: 2,
          producto: 'apartamento en los bloques',
          descripcion: 'apartamento en los bloques',
          categoriaId: 3,
          estadoId: 1,
          precio: 15000,
          vendedorId: 2
        },
      }),
      await prisma.publicacion.upsert({
        where: { id: 3 },
        update: {},
        create: {
          id: 3,
          producto: 'Renault clio',
          descripcion: 'Renault clio barato',
          categoriaId: 1,
          estadoId: 1,
          precio: 1500,
          vendedorId: 2
        },
      }),
      // comentar hasta aquí 
      await prisma.publicacion.upsert({
        where: { id: 4 },
        update: {},
        create: {
          id: 4,
          producto: 'Fiat Uno',
          descripcion: 'Fiat Uno',
          categoriaId: 1,
          estadoId: 1,
          precio: 1700,
          vendedorId: 1
        },
      }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
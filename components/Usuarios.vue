<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { PrismaClient } from '@prisma/client';
  
  const prisma = new PrismaClient();
  
  export default {
    name: 'Users',
    async fetch() {
      const users = await prisma.usuario.findMany();
  
      return { users };
    },
  };
  </script>
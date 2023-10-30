<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li>casa</li>
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nombres }}
        </li>
      </ul>
    </div>
  </template>
  
<script setup>
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const usuarios = await prisma.usuario.findMany();
</script>
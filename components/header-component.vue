<script setup>
// import { useUsuarioStore } from '~/stores/usuario.store';

const carritoStore = useCarritoStore();
const usuarioStore = useUsuarioStore();

</script>
<template>
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <nuxt-link to="/">
        <img src="/images/logo.svg" alt="Logo" class="w-32">
      </nuxt-link>

      <div class="w-full max-w-xl relative flex">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <font-awesome-icon icon="fas fa-magnifying-glass" />
        </span>
        <input type="text" name="search" id="search"
          class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
          placeholder="Buscar">
        <button
          class="bg-primary border border-primary text-white px-8 py-3 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Buscar</button>
      </div>

      <div class="flex items-center space-x-4">
        <nuxt-link to="/carrito" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <font-awesome-icon icon="fas fa-bag-shopping" />
          </div>
          <div class="text-xs leading-3">Carrito</div>
          <div v-if="carritoStore.cantidadProductos > 0"
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {{ carritoStore.cantidadProductos }}</div>
        </nuxt-link>
        <nuxt-link v-if="usuarioStore.estaAutenticado" to="/perfil" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <font-awesome-icon icon="fas fa-user" />
          </div>
          <div class="text-xs leading-3">Cuenta</div>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
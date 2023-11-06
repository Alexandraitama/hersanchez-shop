<script setup>
  const usuarioStore = useUsuarioStore();
</script>
<template>
  <nav class="bg-gray-800">
    <div class="container flex">
    

      <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
        <div class="flex items-center space-x-6 capitalize">
          <nuxt-link to="/" class="text-gray-200 hover:text-white transition">Inicio</nuxt-link>
          <nuxt-link to="/categorias" class="text-gray-200 hover:text-white transition">Comprar</nuxt-link>
          <nuxt-link v-if="usuarioStore.estaAutenticado" to="/publicar" class="text-gray-200 hover:text-white transition">Vender</nuxt-link>
          <nuxt-link to="/acerca" class="text-gray-200 hover:text-white transition">Acerca de</nuxt-link>
          <nuxt-link to="/contacto" class="text-gray-200 hover:text-white transition">Contacto</nuxt-link>
        </div>
        <button v-if="usuarioStore.estaAutenticado" @click="usuarioStore.logout" class="text-gray-200 hover:text-white transition">Logout</button>
        <nuxt-link v-else to="/login" class="text-gray-200 hover:text-white transition">Login</nuxt-link>
      </div>
    </div>
  </nav>
</template>
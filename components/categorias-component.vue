<script lang="ts" setup>

const { data, pending, error, refresh } = await useFetch(`/api/categorias`, {
  // pick: ['title']
})

</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Categorías</h2>
    <div class="grid grid-cols-3 gap-3">
      <div v-for="categoria in data?.categorias" class="relative rounded-sm overflow-hidden group"
        :key="categoria.nombre">
        <img :src="`/images/category/category-${categoria.id}.jpg`" alt="category 1" class="w-full">
        <nuxt-link :to="`/categorias/${categoria.id}`" 
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{{
            categoria.nombre }}</nuxt-link>
      </div>
      <!-- <div class="relative rounded-sm overflow-hidden group">
        <img src="/images/category/category-2.jpg" alt="category 1" class="w-full">
        <a href="#"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</a>
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>

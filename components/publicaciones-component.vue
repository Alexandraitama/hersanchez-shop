<script lang="ts" setup>

const props = defineProps({
  categoria: {
    type: Number,
    required: true,
  },
});
const { categoria } = props;

const { data, pending, error, refresh } = await useFetch(`/api/publicaciones?categoria=${categoria}`, {
  // pick: ['title']
})

</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Publicaciones</h2>
    <div v-if="!pending && data?.publicaciones?.length === 0">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">No hay elementos en esta categoría</h2>  
    </div>
    <div v-else class="grid grid-cols-3 gap-3">
      <div v-for="publicacion in data?.publicaciones" class="relative rounded-sm overflow-hidden group"
        :key="publicacion.producto">
        <img :src="`/images/category/category-${publicacion.id}.jpg`" alt="category 1" class="w-full">
        <nuxt-link :to="`/publicaciones/${publicacion.id}`"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">{{
            publicacion.producto }}</nuxt-link>
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

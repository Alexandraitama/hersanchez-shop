<script lang="ts" setup>
// const props = defineProps({
//   categoria: {
//     type: Number,
//     required: true,
//   },
// });
// const { categoria } = props;
const categoria = 1;

const { data, pending, error, refresh } = await useFetch(`/api/publicaciones/${categoria}`, {
  // pick: ['title']
})
</script>

<template>
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

    <!-- sidebar -->
    <div class="col-span-3">
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
        <font-awesome-icon icon="fas fa-user" size="xl"/>
        </div>
        <div class="flex-grow">
          <p class="text-gray-600">Hola,</p>
          <h4 class="text-gray-800 font-medium">Usuario!</h4>
        </div>
      </div>
    </div>
    <!-- ./sidebar -->

    <!-- wishlist -->
    <div class="col-span-9 space-y-4">
      <div v-for="publicacion in data?.publicaciones " class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div class="w-28">
          <img src="/images/products/product6.jpg" alt="product 6" class="w-full">
        </div>
        <div class="w-1/3">
          <h2 class="text-gray-800 text-xl font-medium uppercase">{{ publicacion.producto }}</h2>
          <p class="text-gray-500 text-sm">Disponibilidad: <span class="text-green-600">Disponible</span></p>
        </div>
        <div class="text-primary text-lg font-semibold">${{ publicacion.precio }}</div>
        <div class="px-6 py-2 text-center text-gray-700 hover:text-primary transition relative border border-secondary hover:border-primary rounded cursor-pointer">
          <font-awesome-icon icon="fas fa-trash" /> Quitar
        </div>
      </div>
    </div>
    <!-- ./wishlist -->

    </div>
</template>

<style scoped></style>

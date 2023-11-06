<script lang="ts" setup>
import {useRouter } from 'vue-router';

const carritoStore = useCarritoStore();
const usuarioStore = useUsuarioStore();
const router = useRouter();

const quitarProducto = (producto) => {
  carritoStore.removerProducto(producto);
}

const procesarCompra = async() => {
  if(!usuarioStore.estaAutenticado){
    router.push('/login');
  }
  const { data, pending, error, refresh } = await useFetch(`/api/publicaciones`, {
    method: 'post',
    body: {
      ids: carritoStore.carrito.map(x => x.id),
      estadoId: 1
    }
})
  carritoStore.vaciarCarrito();
  router.push('/');

}
</script>

<template>
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

    <!-- sidebar -->
    <div class="col-span-3">
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
        <font-awesome-icon icon="fas fa-user" size="xl" />
      </div>
        <div class="flex-grow">
          <p class="text-gray-600">Hola,</p>
          <h4 class="text-gray-800 font-medium">Usuario!</h4>
        </div>
      </div>
      <!-- <div class="px-4 py-3 shadow flex items-center gap-4">
          {{ carritoStore.carrito }}
        </div> -->
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <button
          @click="procesarCompra"
          class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <font-awesome-icon icon="fas fa-check" /> Procesar Compra
        </button>
      </div>
    </div>
    <!-- ./sidebar -->

    <!-- wishlist -->
    <div class="col-span-9 space-y-4">
      <div v-if="carritoStore.carrito.length < 1" class="border gap-6 py-4 border-gray-200 rounded">
        <h2 class="text-2xl font-medium text-gray-800 uppercase text-center">No hay artículos en el carrito</h2>
      </div>
      <div v-else v-for="publicacion in carritoStore.carrito"
        class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div class="w-28">
          <img src="/images/products/product6.jpg" alt="product 6" class="w-full">
        </div>
        <div class="w-1/3">
          <h2 class="text-gray-800 text-xl font-medium uppercase">{{ publicacion.producto }}</h2>
          <p class="text-gray-500 text-sm">Disponibilidad: <span class="text-green-600">{{ publicacion.estado.nombre }}</span></p>
        </div>
        <div class="text-primary text-lg font-semibold">${{ publicacion.precio }}</div>
        <div @click="quitarProducto(publicacion)"
          class="px-6 py-2 text-center text-gray-700 hover:text-primary transition relative border border-secondary hover:border-primary rounded cursor-pointer">
          <font-awesome-icon icon="fas fa-trash" /> Quitar
        </div>
      </div>
    </div>
    <!-- ./wishlist -->

  </div>
</template>

<style scoped></style>

import { defineStore } from 'pinia';

export const useCarritoStore = defineStore('carrito', () => {
  const carrito = ref([])
  const agregarProducto = (producto) => {
    if (!carrito.value.includes(producto))
      carrito.value.push(producto);
  }
  const removerProducto = (producto) => {
    carrito.value.splice(carrito.value.indexOf(producto), 1);
  }
  const vaciarCarrito = () => {
    carrito.value = [];
  }
  const cantidadProductos = computed(() => carrito.value.length);

  return { carrito, agregarProducto, removerProducto, cantidadProductos, vaciarCarrito }

});

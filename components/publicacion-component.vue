<script type="ts" setup>
const props = defineProps({
    publicacion: {
        type: Number,
        required: true,
    },
});
const { publicacion: id } = props;

const { data, pending, error, refresh } = await useFetch(`/api/publicaciones/detalles/${id}`, {
    // pick: ['title']
})

const carritoStore = useCarritoStore();

const agregarAlCarrito = (producto) => {
    carritoStore.agregarProducto(producto);
}


</script>
<template>
    <div class="container grid grid-cols-2 gap-6 py-8">
        <div>
            <img src="/images/products/product1.jpg" alt="product" class="w-full">
            <div class="grid grid-cols-5 gap-4 mt-4">
                <img src="/images/products/product2.jpg" alt="product2" class="w-full cursor-pointer border border-primary">
                <img src="/images/products/product3.jpg" alt="product2" class="w-full cursor-pointer border">
                <img src="/images/products/product4.jpg" alt="product2" class="w-full cursor-pointer border">
                <img src="/images/products/product5.jpg" alt="product2" class="w-full cursor-pointer border">
            <img src="/images/products/product6.jpg" alt="product2" class="w-full cursor-pointer border">
        </div>
    </div>

    <div>
        <h2 class="text-3xl font-medium uppercase mb-2">{{ data.detalles.producto }}</h2>
        <font-awesome-icon icon="fa-brands fa-twitter-square" />
        <div class="flex items-center mb-4">
            <div class="flex gap-1 text-sm text-yellow-400">
                <font-awesome-icon icon="fas fa-star" />
                <font-awesome-icon icon="fas fa-star" />
                    <font-awesome-icon icon="fas fa-star" />
                    <font-awesome-icon icon="fas fa-star" />
                    <font-awesome-icon icon="fas fa-star" />

                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Estado: </span>
                    <span class="text-green-600">{{ data.detalles.estadoId }}</span>
                </p>
                
        </div>
        <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p class="text-xl text-primary font-semibold">${{ data.detalles.precio }}</p>
            <!-- <p class="text-base text-gray-400 line-through">$55.00</p> -->
        </div>
        <div class="space-y-2 mt-4">
            <p class="text-gray-800 font-semibold">
                Descripcion:
            </p>
            <p class="text-gray-600">{{ data.detalles.descripcion }}.</p>
        </div>
        <div class="mt-4">
            <h3 class="text-sm text-gray-800 uppercase mb-1">Cantidad</h3>
            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div class="h-8 w-8 text-base flex items-center justify-center">1</div>
            </div>
        </div>

        <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <button @click="agregarAlCarrito(data.detalles.id)"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                    <font-awesome-icon icon="fas fa-bag-shopping" /> Agregar al carrito
                </button>
        </div>
    </div>
</div>
</template>
<style scoped></style>
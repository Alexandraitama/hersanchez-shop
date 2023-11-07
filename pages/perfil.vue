<script lang="ts" setup>
const usuarioStore = useUsuarioStore();
const router = useRouter();
if(!usuarioStore.estaAutenticado)
  router.replace('/');



</script>

<template>
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

    <!-- sidebar -->
    <div class="col-span-3">
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
          <img src="/images/avatar.png" alt="profile"
            class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
        </div>
        <div class="flex-grow">
          <p class="text-gray-600">Hola,</p>
          <h4 class="text-gray-800 font-medium">{{ usuarioStore.estado.usuario.nombres }} {{
            usuarioStore.estado.usuario.apellidos }}</h4>
        </div>
      </div>

      <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div class="space-y-1 pl-8">
          <a href="#" class="relative text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <font-awesome-icon icon="fas fa-address-card" />
            </span>
            información
          </a>
      </div>
        <div class="space-y-1 pl-8 pt-4">
          <button @click="usuarioStore.logout"  class="relative hover:text-primary block font-medium capitalize transition">
            <span class="absolute -left-8 top-0 text-base">
              <font-awesome-icon icon="fas fa-arrow-right-from-bracket" />
            </span>
            Logout
          </button>
        </div>

      </div>
    </div>
    <!-- ./sidebar -->

    <!-- info -->
    <div class="col-span-9 grid grid-cols-3 gap-4">

      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-800 text-lg capitalize">información personal</h3>
          <!-- <a href="#" class="text-primary">Edit</a> -->
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ usuarioStore.estado.usuario.nombres }} {{
            usuarioStore.estado.usuario.apellidos }}</h4>
          <p class="text-gray-800">{{ usuarioStore.estado.usuario.email }}</p>
          <p class="text-gray-800">0811 8877 988</p>
        </div>
      </div>

      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-800 text-lg capitalize">Dirección de envío</h3>
          <!-- <a href="#" class="text-primary">Edit</a> -->
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ usuarioStore.estado.usuario.nombres }} {{
            usuarioStore.estado.usuario.apellidos }}</h4>
          <p class="text-gray-800">Medan, North Sumatera</p>
          <p class="text-gray-800">20371</p>
          <p class="text-gray-800">0811 8877 988</p>
        </div>
      </div>

      <div class="shadow rounded bg-white px-4 pt-6 pb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-800 text-lg capitalize">dirección de cobro</h3>
          <!-- <a href="#" class="text-primary">Edit</a> -->
        </div>
        <div class="space-y-1">
          <h4 class="text-gray-700 font-medium">{{ usuarioStore.estado.usuario.nombres }} {{
            usuarioStore.estado.usuario.apellidos }}</h4>
          <p class="text-gray-800">Medan, North Sumatera</p>
          <p class="text-gray-800">20317</p>
          <p class="text-gray-800">0811 8877 988</p>
        </div>
      </div>

    </div>
    <!-- ./info -->

  </div>
</template>

<style scoped></style>

<script lang="ts" setup></script>

<template>
  <!-- header -->
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <a href="index.html">
        <img src="/images/logo.svg" alt="Logo" class="w-32">
      </a>

      <div class="w-full max-w-xl relative flex">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" name="search" id="search"
          class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
             placeholder="Buscar">
        <button
          class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Search</button>
      </div>

    <div class="flex items-center space-x-4">
      <!-- <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="text-xs leading-3">Wishlist</div>
                    <div
                        class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                  8</div>
                          </a> -->
        <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
          <div class="text-xs leading-3">Carrito</div>
          <div
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            2</div>
        </a>
        <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
          <div class="text-2xl">
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="text-xs leading-3">Cuenta</div>
        </a>
      </div>
    </div>
  </header>
  <!-- ./header -->

  <!-- navbar -->
  <nav class="bg-gray-800">
    <div class="container flex">
      <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
        <span class="text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white hidden">All Categories</span>

        <!-- dropdown -->
        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">Terarce</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">Bed</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/office.svg" alt="office" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">office</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
          </a>
          <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            <img src="/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain">
            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
          </a>
        </div>
      </div>

      <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
        <div class="flex items-center space-x-6 capitalize">
          <nuxt-link to="/" class="text-gray-200 hover:text-white transition">Inicio</nuxt-link>
          <nuxt-link to="/categorias" class="text-gray-200 hover:text-white transition">Comprar</nuxt-link>
          <nuxt-link to="/acerca" class="text-gray-200 hover:text-white transition">Acerca de</nuxt-link>
          <nuxt-link to="/contacto" class="text-gray-200 hover:text-white transition">Contacto</nuxt-link>
        </div>
        <a href="pages/login.html" class="text-gray-200 hover:text-white transition">Login</a>
      </div>
    </div>
  </nav>
  <!-- ./navbar -->

  <!-- banner -->

  <!-- ./banner -->

<!-- features -->
<!-- <div class="container py-16">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Order over $200</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
                    <p class="text-gray-500 text-sm">30 days money returs</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="assets/icons/service-hours.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                    <p class="text-gray-500 text-sm">Customer support</p>
                </div>
            </div>
                  </div>
              </div> -->
  <!-- ./features -->

  <!-- categories -->
  <!-- <categorias-component /> -->
  <!-- ./categories -->
  <div>
    <slot />
  </div>
  <!-- new arrival -->
  <!-- <novedades-component /> -->
  <!-- ./new arrival -->

  <!-- ads -->
  <!-- <anuncios-component /> -->
  <!-- ./ads -->

  <!-- product -->
  <!-- <productos-component /> -->
  <!-- ./product -->


  <footer-component />

  <!-- copyright -->
  <copyright-component />
</template>

<style scoped></style>

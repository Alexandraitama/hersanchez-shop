<template>
    <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
        <div class="container grid grid-cols-1 ">
                <div class="grid grid-cols-2 gap-4 md:gap-8">
                    <div class="space-y-2">
                        <img src="/images/logo.svg" alt="logo" class="w-30">
                        <div class="mr-2">
                            <p class="text-gray-500">
                                Tienda de...
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Enlaces</h3>
                        <div class="mt-4 space-y-4">
                            <nuxt-link to="/acerca" class="text-base text-gray-500 hover:text-gray-900 block">Acerca De</nuxt-link>
                            <!-- <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> -->
                            <nuxt-link to="/contacto" class="text-base text-gray-500 hover:text-gray-900 block">Contacto</nuxt-link>
                            <a href="/uploads/manual.pdf" class="text-base text-gray-500 hover:text-gray-900 block">Ayuda</a>
                        </div>
                    </div>
                </div>
 
        </div>
    </footer>
</template>
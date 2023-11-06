<script lang="ts" setup>
const usuarioStore = useUsuarioStore();
const nombres = ref('');
const apellidos = ref('');
const email = ref('');
const password = ref('');
const password2 = ref('');


const registrarCliente = async () => {
  await usuarioStore.registrar(email.value, password.value, nombres.value, apellidos.value);
}

</script>

<template>
   <div class="contain py-8">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Crear cuenta</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Registro de cliente
            </p>
            <form autocomplete="off" @submit.prevent="registrarCliente">
                <div class="space-y-2">
                    <div>
                        <label for="nombres" class="text-gray-600 mb-2 block">Nombres</label>
                        <input type="text" name="nombres" id="nombres" v-model="nombres"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana">
                    </div>
                    <div>
                        <label for="apellidos" class="text-gray-600 mb-2 block">Apellidos</label>
                        <input type="text" name="apellidos" id="apellidos" v-model="apellidos"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="detal">
                    </div>
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email</label>
                        <input type="email" name="email" id="email" v-model="email"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password" v-model="password"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                    <div>
                        <label for="confirm" class="text-gray-600 mb-2 block">Confirmar contraseña</label>
                        <input type="password" name="confirm" id="confirm" v-model="password2"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                        <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" class="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">crear
                        cuenta</button>
                </div>
            </form>

            <!-- login with -->
            <!-- <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div> -->
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Ya tiene una cuenta? <nuxt-link to="/login"
                    class="text-primary">Iniciar Sesión</nuxt-link></p>
        </div>
    </div>
</template>

<style scoped></style>

<script lang="ts" setup>
const usuarioStore = useUsuarioStore();
const router = useRouter();

const producto = ref('');
const descripcion = ref('');
const estado = 'disponible';
const estadoId = ref(2);
const categoriaId = ref(undefined);
const precio = ref(undefined);

const { data, pending, error, refresh } = await useFetch(`/api/categorias`, {
  // pick: ['title']
})



if (!usuarioStore.estaAutenticado) {
  router.replace('/login');
}

const crearPublicacion = async () => {

  debugger;
  const { data, pending, error, refresh } = await useFetch(`/api/publicaciones/crear`, {
    method: 'post',
    body: {
      producto: producto.value,
      descripcion: descripcion.value,
      precio: precio.value,
      estadoId: estadoId.value,
      categoriaId: categoriaId.value,
      vendedorId: usuarioStore.estado.usuario.id
    }
  })

  router.push('/categorias');  
}
</script>

<template>
  <div class="contain py-8">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">Crear publicación</h2>
      <p class="text-gray-600 mb-6 text-sm">
        Ofrecer un producto o servicio
      </p>
    <form autocomplete="off" @submit.prevent="crearPublicacion">
      <div class="space-y-2">
        <div>
          <label for="producto" class="text-gray-600 mb-2 block">Producto</label>
          <input type="text" name="producto" id="producto" v-model="producto"
            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="ford mustang">
          </div>
          <div>
            <label for="descripcion" class="text-gray-600 mb-2 block">Descripción</label>
            <input type="text" name="descripcion" id="descripcion" v-model="descripcion"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="características">
          </div>
          <div>
            <label for="estadoId" class="text-gray-600 mb-2 block">Estado</label>
          <input type="estadoId" name="estadoId" id="estadoId" v-model="estado" disabled
            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
            placeholder="youremail.@domain.com">
        </div>
        <div>
          <label for="categoria" class="text-gray-600 mb-2 block">Categoría</label>
          <select v-model="categoriaId"
            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400">
            <option value="">Seleccione</option>
            <option v-for="categoria in data?.categorias" :value="categoria.id">{{ categoria.nombre }}</option>
            </select>
            <!-- <input type="password" name="password" id="password" v-model="password"
                              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"> -->
          </div>
          <div>
            <label for="precio" class="text-gray-600 mb-2 block">Precio</label>
            <input type="text" name="precio" id="precio" v-model="precio"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="15">
          </div>
        </div>
        <!-- <div class="mt-6">
            <div class="flex items-center">
              <input type="checkbox" name="aggrement" id="aggrement"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer">
              <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a href="#"
                  class="text-primary">terms & conditions</a></label>
            </div>
          </div> -->
        <div class="mt-4">
          <button type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Crear
            Publicación</button>
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

      <!-- <p class="mt-4 text-center text-gray-600">Ya tiene una cuenta? <nuxt-link to="/login" class="text-primary">Iniciar
            Sesión</nuxt-link></p> -->
    </div>
  </div>
</template>

<style scoped></style>

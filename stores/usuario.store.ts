import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useUsuarioStore = defineStore('usuario', () => {
  const autenticado = ref(false);
  const datos = ref({});
  const router = useRouter();

  const login = async (login: String, password: String) => {
    // verificar base de datos
    const { data, pending, error, refresh } = await useFetch(`/api/usuario/autenticar`, {
      method: 'post',
      body: {
        email: login,
        password: password
      }
      // pick: ['title']
    })

    if (Object.keys(data).length !== 0) {
      console.log('usuario: ', data)
      datos.value = { ...data }
      autenticado.value = true;
      router.push('/')
    }

  }
  const registrar = async (login: String, password: String, nombres: String, apellidos: String) => {
    // verificar base de datos
    const { data, pending, error, refresh } = await useFetch(`/api/usuario/registrar`, {
      method: 'post',
      body: {
        email: login,
        nombres,
        apellidos,
        password
      }
      // pick: ['title']
    })

    if (Object.keys(data).length !== 0) {
      console.log('usuario: ', data)
      datos.value = { ...data }
      autenticado.value = true;
      router.push('/login')
    }

  }

  const logout = () => {
    autenticado.value = false;
    datos.value = {};
    router.replace('/');
  }
  const estaAutenticado = computed(() => autenticado.value);

  return { autenticado, login, logout, registrar, estaAutenticado }

});

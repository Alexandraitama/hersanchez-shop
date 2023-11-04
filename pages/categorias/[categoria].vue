<script lang="ts" setup>
const route = useRoute();
const categoria:number = Number(route.params.categoria);
</script>

<template>
  <publicaciones-component :categoria="categoria" />
  <!-- <div>Categoría: {{ $route.params }}</div> -->
</template>

<style scoped></style>

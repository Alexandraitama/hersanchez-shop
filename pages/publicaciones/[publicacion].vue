<script lang="ts" setup>
const route = useRoute();
const publicacion:number = Number(route.params.publicacion);
</script>
<template>
<publicacion-component :publicacion="publicacion"/>
</template>

<style scoped>
</style>
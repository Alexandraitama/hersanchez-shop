<script lang="ts" setup></script>

<template>
  <header>
    <h1 class="title">Bienvenid@s a Hersanchez shop!</h1>
    <h6 class="subtitle">La tienda que te entiende!</h6>
  </header>
  <div>
    Layout: default
    <slot />
  </div>
</template>

<style scoped>
.title {
  padding-bottom: -10rem;
  margin-bottom: -1rem;
  text-align: center;
}
.subtitle {
  color: gray;
  text-align: center;
}
</style>

<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>

<style lang="scss">
.main {
  flex-grow: 1;
  // height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

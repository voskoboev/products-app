<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="main">
    <div class="container-wide">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
}
</style>

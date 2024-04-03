<script lang="ts" setup>
import TheProducts from "@/components/products/TheProducts.vue";
</script>

<template>
  <section class="home">
    <div class="home__promo"></div>
    <div class="container">
      <TheProducts />
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/styles/mixins.scss";

.home__promo {
  height: 500px;
  background-image: url("@/assets/img/fanny-pack.jpg");
  background-size: cover;
  background-position: center center;

  @include mixins.mobile-screen {
    height: 300px;
  }
}
</style>

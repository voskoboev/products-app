<script lang="ts" setup>
import TheFavProducts from "@/components/favs/TheFavProducts.vue";
</script>

<template>
  <section class="fav-products">
    <div class="container fav-products__container">
      <AppBreadcrumbs second-page-title="Избранное" />
      <TheFavProducts />
    </div>
  </section>
</template>

<style lang="scss">
.fav-products {
  align-self: flex-start;
  width: 100%;
  height: 100%;
}

.fav-products__container {
  display: flex;
  flex-direction: column;
  padding-bottom: 112px;
}
</style>

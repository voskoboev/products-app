<script lang="ts" setup>
import AppPagination from "@/components/AppPagination.vue";
import TheFavProducts from "@/components/favs/TheFavProducts.vue";
</script>

<template>
  <section class="favs">
    <div class="container favs__container">
      <AppPagination secondPageTitle="Избранное" />
      <TheFavProducts />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.favs__container {
  padding-bottom: 112px;
}
</style>

<script lang="ts" setup>
import { useStore } from "@/utils/store";
import TheProductsListItem from "@/components/products/TheProductsListItem.vue";

const store = useStore();
</script>

<template>
  <ul class="products-list">
    <TheProductsListItem
      v-for="product in store.state.products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 40px;
  width: 100%;
}
</style>

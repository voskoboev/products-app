<script lang="ts" setup>
import { useStore } from "@/utils/store";
import TheFavProductsListItem from "@/components/favs/TheFavProductsListItem.vue";

const store = useStore();
</script>

<template>
  <ul class="favs-list">
    <TheFavProductsListItem
      v-for="favProduct in store.state.favProducts"
      :key="favProduct.id"
      :favProduct="favProduct"
    />
  </ul>
</template>

<style lang="scss">
.favs-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 40px;
  width: 100%;
}
</style>

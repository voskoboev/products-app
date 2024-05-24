<script lang="ts" setup>
import { defineProps } from "vue";
import { ADD_PRODUCT_TO_FAVS } from "@/constants/mutations";
import { useStore } from "@/hooks/useStore";
import IconHeadtEmpty from "@/components/icons/IconHeartEmpty.vue";
import { IProduct } from "@/types/IProduct";

defineProps<{
  product: IProduct;
}>();

const store = useStore();
</script>

<template>
  <AppCard class="products-item" :product="product">
    <button
      class="products-item__fav-button"
      aria-label="Кнопка добавления товара в избранное"
      @click="store.commit(ADD_PRODUCT_TO_FAVS, product.id)"
    >
      <IconHeadtEmpty class="products-item__fav-svg" />
    </button>
  </AppCard>
</template>

<style lang="scss">
@use "@/assets/styles/vars.scss";

.products-item__fav-button {
  width: 22px;
  height: 22px;

  @media (any-hover: hover) {
    &:hover .products-item__fav-svg {
      fill: vars.$color-primary;
    }
  }
}
</style>

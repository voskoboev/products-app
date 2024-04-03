<script lang="ts" setup>
import { defineProps } from "vue";
import { useStore } from "@/hooks/useStore";
import { IProduct } from "@/types/IProduct";
import { ADD_PRODUCT_TO_FAVS } from "@/constants/mutations";
import IconHeadtEmpty from "@/components/icons/IconHeartEmpty.vue";

defineProps<{
  product: IProduct;
}>();

const store = useStore();
</script>

<template>
  <AppCard class="products-item" :product="product">
    <button
      class="products-item__fav-button"
      @click="store.commit(ADD_PRODUCT_TO_FAVS, product.id)"
      aria-label="Кнопка добавления товара в избранное"
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
@/hooks/store
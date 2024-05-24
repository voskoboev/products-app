<script lang="ts" setup>
import { defineProps } from "vue";
import { REMOVE_PRODUCT_FROM_FAVS } from "@/constants/mutations";
import { useStore } from "@/hooks/useStore";
import IconClose from "@/components/icons/IconClose.vue";
import { IProduct } from "@/types/IProduct";

defineProps<{
  favProduct: IProduct;
}>();

const store = useStore();
</script>

<template>
  <li class="favs-item">
    <AppCard :product="favProduct">
      <button
        class="favs-item__close-button"
        aria-label="Кнопка удаления товара из избранного"
        @click="store.commit(REMOVE_PRODUCT_FROM_FAVS, favProduct.id)"
      >
        <IconClose />
      </button>
    </AppCard>
  </li>
</template>

<style lang="scss">
.favs-item__close-button {
  width: 20px;
  height: 20px;
}
</style>

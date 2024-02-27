<script lang="ts" setup>
import { useStore } from "@/utils/store";
import { defineProps } from "vue";
import { IProduct } from "@/types/IProduct";
import { REMOVE_PRODUCT_FROM_FAVS } from "@/constants/mutations";

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
        @click="store.commit(REMOVE_PRODUCT_FROM_FAVS, favProduct.id)"
        aria-label="Кнопка удаления товара из избранного"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.41406"
            width="24"
            height="2"
            rx="1"
            transform="rotate(45 1.41406 0)"
            fill="#0A1E32"
          />
          <rect
            x="18.7988"
            y="1.41431"
            width="24"
            height="2"
            rx="1"
            transform="rotate(135 18.7988 1.41431)"
            fill="#0A1E32"
          />
        </svg>
      </button>
    </AppCard>
  </li>
</template>

<style lang="scss" scoped>
.favs-item__close-button {
  width: 20px;
  height: 20px;
}
</style>

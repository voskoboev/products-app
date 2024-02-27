<script lang="ts" setup>
import { useStore } from "@/utils/store";
import TheProductsList from "@/components/products/TheProductsList.vue";

const store = useStore();
store.dispatch("getProducts");
</script>

<template>
  <div class="products">
    <div class="products__wrapper">
      <p class="products__placeholder" v-if="store.state.isProductsLoading">
        Загрузка товаров...
      </p>
      <p class="products__placeholder" v-else-if="store.state.isProductsError">
        Произошла ошибка, повторите попытку позднее
      </p>
      <TheProductsList v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss";
@use "@/assets/styles/mixins.scss";

.products {
  padding-top: 110px;
  padding-bottom: 110px;

  @include mixins.mobile-screen {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.products__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @include mixins.mobile-screen {
    min-height: 200px;
  }
}

.products__placeholder {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: vars.$color-secondary;
  text-align: center;
}
</style>

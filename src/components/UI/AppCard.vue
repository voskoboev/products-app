<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { IProduct } from "@/types/IProduct";

const props = defineProps<{
  product: IProduct;
}>();

const productPath = computed(() => {
  return {
    name: "product-details",
    params: {
      id: props.product.id,
      title: props.product.title,
      image: props.product.image,
      description: props.product.description,
      price: props.product.price,
    },
  };
});
</script>

<template>
  <article class="card">
    <div class="card__button-wrapper">
      <slot />
    </div>
    <RouterLink
      :to="productPath"
      class="card__link"
      aria-labelledby="productItemTitle"
    >
      <img class="card__img" :src="product.image" :alt="product.title" />
      <h3 id="productItemTitle" class="card__title">{{ product.title }}</h3>
      <p class="card__price">{{ product.price }} руб.</p>
    </RouterLink>
  </article>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss";
@use "@/assets/styles/mixins.scss";

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.3s box-shadow ease;

  @media (any-hover: hover) {
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      transition: 0.3s box-shadow ease;
    }
  }
}

.card__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: 100%;
  padding: 30px 20px 20px;

  @include mixins.mobile-screen {
    padding: 20px;
  }
}

.card__title {
  font-size: 12px;
  line-height: 18px;
  color: vars.$color-primary;
  text-align: center;
}

.card__price {
  font-weight: 700;
  line-height: 24px;
  color: vars.$color-secondary;
  text-align: center;
}

.card__img {
  width: 250px;
  height: 250px;
  object-fit: contain;

  @include mixins.mobile-screen {
    width: 180px;
    height: 180px;
  }
}

.card__button-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

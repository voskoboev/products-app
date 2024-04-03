<script lang="ts" setup>
import { useStore } from "@/hooks/useStore";
import { useRoute } from "@/hooks/useRoute"
import { ADD_PRODUCT_TO_FAVS } from "@/constants/mutations";

const store = useStore();
const route = useRoute();
</script>

<template>
  <section class="product-details">
    <div class="container">
      <div class="product-details__upper">
        <AppPagination :secondPageTitle="route.params.title" />
      </div>
      <div class="product-details__lower">
        <div class="product-details__left">
          <img
            class="product-details__img"
            :src="route.params.image"
            :alt="route.params.title"
          />
        </div>
        <div class="product-details__right">
          <h2 class="product-details__title">
            {{ route.params.title }}
          </h2>
          <p class="product-details__descr">
            {{ route.params.description }}
          </p>
          <p class="product-details__price">{{ route.params.price }} руб.</p>
          <AppButton
            @click="store.commit(ADD_PRODUCT_TO_FAVS, route.params.id)"
          >
            Избранное
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/styles/vars.scss";
@use "@/assets/styles/mixins.scss";

.product-details__lower {
  display: flex;
  padding-top: 16px;
  padding-bottom: 110px;

  @include mixins.desktop-md-screen {
    flex-direction: column;
  }

  @include mixins.mobile-screen {
    padding-bottom: 50px;
  }
}

.product-details__left,
.product-details__right {
  width: 50%;

  @include mixins.desktop-md-screen {
    width: 100%;
  }
}

.product-details__left {
  border: 1px solid vars.$color-tertiary;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @include mixins.desktop-md-screen {
    order: 2;
  }
}

.product-details__right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 0 40px 40px;

  @include mixins.desktop-md-screen {
    order: 1;
  }

  @include mixins.mobile-screen {
    gap: 16px;
  }
}

.product-details__img {
  object-fit: contain;
  width: 600px;
  aspect-ratio: 1 / 1.15;

  @include mixins.tablet-md-screen {
    width: 400px;
  }

  @include mixins.mobile-screen {
    width: 200px;
  }
}

.product-details__title {
  color: vars.$color-primary;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;

  @include mixins.mobile-screen {
    font-size: 30px;
    line-height: 38px;
  }
}

.product-details__descr {
  color: vars.$color-secondary;
  line-height: 24px;
}

.product-details__price {
  color: vars.$color-primary;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
</style>
@/hooks/store@/hooks/route
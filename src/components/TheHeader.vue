<script lang="ts" setup>
import { useStore } from "@/utils/store";
import { RouterLink } from "vue-router";
import IconHeartFilled from "@/components/icons/IconHeartFilled.vue";

const store = useStore();
</script>

<template>
  <header class="header">
    <h1 class="header__title">Магазин товаров</h1>
    <div class="container header__container">
      <RouterLink
        class="header__logo-link"
        to="/"
        aria-label="Ссылка на главную страницу"
      >
        <img
          class="header__logo-img"
          src="@/assets/img/logo.svg"
          alt="Лого магазина"
        />
      </RouterLink>
      <RouterLink
        class="header__favs-link"
        to="/favs"
        :data-favs-amount="store.getters.favsAmount"
        aria-label="Ссылка на страницу избранного"
      >
        <IconHeartFilled />
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss";

.header {
  border-bottom: 1px solid vars.$color-primary;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 24px;
}

.header__title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.header__favs-link {
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    right: -8px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    content: attr(data-favs-amount);
    border-radius: 50%;
    font-size: 8px;
    font-weight: 700;
    color: vars.$color-bright;
    background-color: #eb4c47;
    line-height: 10px;
  }
}
</style>

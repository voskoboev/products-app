<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="not-found">
    <div class="container not-found__container">
      <div class="not-found__inner">
        <h2 class="not-found__title">Страница не найдена</h2>
        <RouterLink class="not-found__link" to="/">
          Перейти на главную
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.not-found__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 200px;
  max-width: 350px;
}

.not-found__title {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: vars.$color-secondary;
  text-align: center;
}

.not-found__link {
  font-size: 18px;
  color: vars.$color-secondary;
  text-decoration: underline;
}
</style>

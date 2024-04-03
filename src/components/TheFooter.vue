<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <RouterLink
        class="footer__fav"
        to="/favs"
        aria-label="Ссылка на страницу избранного"
      >
        Избранное
      </RouterLink>
      <a
        class="footer__tel-link"
        href="tel:88008880088"
        aria-label="Телефонный номер магазина"
      >
        8 800 888 00 88
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
@use "@/assets/styles/vars.scss";

.footer {
  color: vars.$color-bright;
  background-color: vars.$color-primary;
}

.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
}

.footer__fav {
  font-size: 18px;
  font-weight: 500;
}

.footer__tel-link {
  font-size: 24px;
  font-weight: 500;
}
</style>

<script lang="ts" setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps<{
  secondPageTitle: string;
}>();
</script>

<template>
  <nav class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <li class="breadcrumbs__list-item">
        <RouterLink
          class="breadcrumbs__list-link breadcrumbs__list-link--home"
          to="/"
        >
          Главная
        </RouterLink>
      </li>
      <li class="breadcrumbs__list-item">
        {{ secondPageTitle }}
      </li>
    </ol>
  </nav>
</template>

<style lang="scss">
@use "@/assets/styles/vars.scss";

.breadcrumbs {
  padding-top: 32px;
  padding-bottom: 16px;
}

.breadcrumbs__list {
  display: flex;
  gap: 30px;
}

.breadcrumbs__list-item {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: vars.$color-secondary;
}

.breadcrumbs__list-link--home {
  position: relative;

  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  &::after {
    content: "\203A";
    position: absolute;
    right: -16px;
  }
}
</style>

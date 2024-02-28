<script lang="ts" setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps<{
  secondPageTitle: string;
}>();
</script>

<template>
  <nav class="pagination">
    <ol class="pagination__list">
      <li class="pagination__list-item">
        <RouterLink
          class="pagination__list-link pagination__list-link--home"
          to="/"
        >
          Главная
        </RouterLink>
      </li>
      <li class="pagination__list-item">
        {{ secondPageTitle }}
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss";

.pagination {
  padding-top: 32px;
  padding-bottom: 16px;
}

.pagination__list {
  display: flex;
  gap: 30px;
}

.pagination__list-item {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: vars.$color-secondary;
}

.pagination__list-link--home {
  position: relative;

  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }

  &::after {
    content: "›";
    position: absolute;
    right: -16px;
  }
}
</style>

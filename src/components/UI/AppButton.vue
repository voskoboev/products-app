<script lang="ts" setup>
import { defineEmits } from "vue";
import IconHeadtEmpty from "@/components/icons/IconHeartEmpty.vue";

const emit = defineEmits(["click"]);
</script>

<template>
  <button class="button" @click="emit('click')">
    <IconHeadtEmpty class="button__img" />
    <slot>Сохранить</slot>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss";

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 34px;
  border: 1px solid vars.$color-primary;
  border-radius: 4px;
  font-weight: 700;
  color: vars.$color-primary;
  text-transform: uppercase;

  @media (any-hover: hover) {
    &:hover .button__img {
      fill: vars.$color-primary;
    }
  }
}

.button__img {
  margin-right: 8px;
}
</style>

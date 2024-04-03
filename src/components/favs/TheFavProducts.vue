<script lang="ts" setup>
import { useStore } from "@/utils/store";
import TheFavProductsList from "@/components/favs/TheFavProductsList.vue";

const store = useStore();
</script>

<template>
  <div>
    <h2 class="favs__title">Избранное</h2>
    <div class="favs__wrapper">
      <p class="favs__placeholder" v-if="store.getters.isFavsEmpty">
        Список избранного пуст
      </p>
      <TheFavProductsList v-else />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/vars.scss";

.favs__title {
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  color: vars.$color-secondary;
}

.favs__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.favs__placeholder {
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: vars.$color-secondary;
  text-align: center;
}
</style>

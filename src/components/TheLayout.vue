<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="layout">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>

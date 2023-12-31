<template>
  <notifications class="notification" />
  <OverlaysFullLoading v-if="layoutStore.getStateLoading" />
  <NuxtPage />
</template>
<script setup lang="ts">
import { useLayoutStore } from "./store/layoutStore";
const layoutStore = useLayoutStore();
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

const route = useRoute();
const title = computed(() => {
  return (route.meta.title as string) ?? 'Page Not Found';
});

useHead({
  title
});
</script>

<template>
  <!-- layout: 404 -->
  <router-view />
</template>

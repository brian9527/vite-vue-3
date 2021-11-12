<route lang="yaml">
meta:
  layout: 404
</route>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const regex = /\/index\.(htm|html)$/i;

if (regex.test(route.path)) {
  router.replace(route.path.replace(regex, '/'));
}
</script>

<template>
  <div class="h-full bg-gray-900 p-4 dark:(bg-gray-50)">
    <h2 class="font-bold text-2xl">Page Not Found</h2>
    <code class="text-true-gray-600">path: {{ $route.fullPath }}</code>
    <div class="py-2">
      <a
        class="
          border
          rounded-md
          cursor-pointer
          border-green-900
          p-1
          px-2
          text-green-900
        "
        @click.prevent="router.back()"
        >back</a
      >
    </div>
  </div>
</template>

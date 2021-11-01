<script lang="ts" setup>
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);

const route = useRoute();
const title = computed(() => {
  return route.meta.title as string;
});

useHead({
  title
});
</script>

<template>
  <!-- layout: default -->
  <div
    class="base-layout"
  >
    <div
      class="bg-white flex border-b-1 border-green-700 border-opacity-20 h-10 px-3 top-0 leading-10 z-10 sticky dark:(bg-gray-900 text-white border-true-gray-800)"
    >
      <router-link
        class="router-link"
        to="/"
      >
        home
      </router-link>
      <router-link
        class="router-link"
        to="/demo/about"
      >
        about
      </router-link>

      <div class="navigator-options">
        <button
          class="icon-button"
          @click="toggleDark"
        >
          <iconify-ph-moon v-show="!isDark" />
          <iconify-ic-outline-wb-sunny v-show="isDark" />
        </button>
      </div>
    </div>
    <div class="flex-grow relative overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<style lang="postcss">
.base-layout {
  @apply flex flex-col h-full bg-white dark:(bg-gray-900 text-gray-300);
}

.router-link {
  @apply px-3 transition duration-100 dark:(text-warm-gray-500 hover:text-white) hover:text-green-800;

  &.router-link-exact-active {
    @apply text-green-800 font-bold dark:(text-white);
  }
}

.navigator-options {
  @apply m-auto mr-0 flex items-center;
}

.icon-button {
  @apply h-8 w-8 align-middle text-center transition duration-100 inline-block text-warm-gray-500 focus:(outline-none) hover:(text-warm-gray-500) dark:hover:(text-white);
}
</style>

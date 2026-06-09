<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
    <button
      @click="isOpen = !isOpen"
      class="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <span class="font-semibold text-gray-900 dark:text-white">{{ title }}</span>
      <svg
        class="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div v-show="isOpen" class="px-6 py-4 bg-white dark:bg-gray-800">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
})

const isOpen = ref(props.defaultOpen)
</script>

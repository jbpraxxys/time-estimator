<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
      <p class="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">Total Hours</p>
      <p class="mt-2 text-4xl font-bold text-primary-900 dark:text-primary-400">{{ result.finalHours }}</p>
      <p class="mt-1 text-sm text-primary-700 dark:text-primary-400">hrs</p>
    </div>
    
    <div class="card">
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">1 Developer</p>
      <p class="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{{ result.timeline1Dev }}</p>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">weeks</p>
    </div>
    
    <div class="card">
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">2 Developers</p>
      <p class="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{{ result.timeline2Devs }}</p>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">weeks</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CalculatorResult } from '@/types'

interface Props {
  result: CalculatorResult
}

defineProps<Props>()
</script>

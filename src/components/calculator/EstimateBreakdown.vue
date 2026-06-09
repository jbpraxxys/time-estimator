<template>
  <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-900">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Section</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Formula</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Hours</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="(item, index) in breakdown" :key="index" :class="{ 'bg-primary-50 dark:bg-primary-900/20 font-semibold': item.label.includes('Total') || item.label.includes('Final') }">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{{ item.label }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">{{ item.formula }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right">{{ item.hours }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { BreakdownItem } from '@/types'

interface Props {
  breakdown: BreakdownItem[]
}

defineProps<Props>()
</script>

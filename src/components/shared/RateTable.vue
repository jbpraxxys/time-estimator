<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-900">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Item</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rate</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="rate in rates" :key="rate.code">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{{ rate.code }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{{ rate.item }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white text-right font-mono">{{ rate.rate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const rates = [
  { code: 'Fixed', item: 'Sections A–E (Project Setup, Shared Components, QA, Deployment, Dynamic Pages)', rate: '24 hrs' },
  { code: 'P1', item: 'Content listing pair (list + detail + API)', rate: '×8 hrs' },
  { code: 'P2', item: 'Single-page module (list + API)', rate: '×4 hrs' },
  { code: 'P3a', item: 'Simple section component', rate: '×1 hr' },
  { code: 'P3b', item: 'Standard section component', rate: '×2 hrs' },
  { code: 'P3c', item: 'Complex section component', rate: '×4 hrs' },
  { code: 'P4a', item: 'Home page', rate: '×10 hrs' },
  { code: 'P4b', item: 'Utility page', rate: '×3 hrs' },
  { code: 'P5', item: 'Static CMS page', rate: '×1 hr' },
]
</script>

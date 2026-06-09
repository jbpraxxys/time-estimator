<template>
  <div class="space-y-4">
    <div>
      <div class="flex justify-between text-sm mb-1">
        <span class="font-medium text-gray-700 dark:text-gray-200">1 Developer</span>
        <span class="text-gray-500 dark:text-gray-400">{{ result.timeline1Dev }} weeks</span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
        <div
          class="bg-primary-600 dark:bg-primary-500 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${Math.min((result.timeline1Dev / maxWeeks) * 100, 100)}%` }"
        ></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between text-sm mb-1">
        <span class="font-medium text-gray-700 dark:text-gray-200">2 Developers</span>
        <span class="text-gray-500 dark:text-gray-400">{{ result.timeline2Devs }} weeks</span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
        <div
          class="bg-primary-400 dark:bg-primary-300 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${Math.min((result.timeline2Devs / maxWeeks) * 100, 100)}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CalculatorResult } from '@/types'

interface Props {
  result: CalculatorResult
}

const props = defineProps<Props>()

const maxWeeks = computed(() => Math.max(props.result.timeline1Dev, 8))
</script>

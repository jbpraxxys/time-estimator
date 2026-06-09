<template>
  <div class="space-y-3">
    <label
      v-for="feature in features"
      :key="feature.id"
      class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors"
      :class="isSelected(feature.id) ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'"
    >
      <input
        type="checkbox"
        :value="feature.id"
        :checked="isSelected(feature.id)"
        @change="toggle(feature.id)"
        class="mt-1 h-4 w-4 text-primary-600 dark:text-primary-400 focus:ring-primary-500 dark:focus:ring-primary-400 border-gray-300 dark:border-gray-600 rounded"
      />
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <span class="font-medium text-gray-900 dark:text-white">{{ feature.name }}</span>
          <span class="text-sm font-semibold text-primary-600 dark:text-primary-400">+{{ feature.hours }} hrs</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ feature.description }}</p>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { OptionalFeature } from '@/types'

interface Props {
  features: OptionalFeature[]
  modelValue: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

function isSelected(id: string): boolean {
  return props.modelValue.includes(id)
}

function toggle(id: string) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(id)
  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(id)
  }
  emit('update:modelValue', newValue)
}
</script>

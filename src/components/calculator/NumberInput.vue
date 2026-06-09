<template>
  <div class="flex items-center gap-3">
    <button
      @click="decrement"
      class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      :disabled="modelValue <= min"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>
    
    <input
      :value="modelValue"
      @input="handleInput"
      type="number"
      :min="min"
      :max="max"
      class="w-20 text-center text-2xl font-bold text-gray-900 dark:text-white border-0 bg-transparent focus:ring-0 p-0"
    />
    
    <button
      @click="increment"
      class="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      :disabled="modelValue >= max"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function increment() {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

function decrement() {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = parseInt(target.value) || 0
  emit('update:modelValue', Math.max(props.min, Math.min(props.max, value)))
}
</script>

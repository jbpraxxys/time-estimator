<template>
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
      <p class="mt-2 text-gray-600">{{ description }}</p>
    </div>
    
    <div class="flex justify-center py-8">
      <slot />
    </div>
    
    <div class="flex justify-between pt-6 border-t border-gray-200">
      <button
        v-if="showPrev"
        @click="$emit('prev')"
        class="btn-secondary"
      >
        Previous
      </button>
      <div v-else></div>
      
      <button
        v-if="showNext"
        @click="$emit('next')"
        class="btn-primary"
        :disabled="!canProceed"
      >
        Next
      </button>
      <button
        v-else
        @click="$emit('complete')"
        class="btn-primary"
      >
        Calculate Estimate
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  showPrev: boolean
  showNext: boolean
  canProceed: boolean
}

defineProps<Props>()

defineEmits<{
  prev: []
  next: []
  complete: []
}>()
</script>

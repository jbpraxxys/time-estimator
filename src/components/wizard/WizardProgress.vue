<template>
  <div class="mb-8">
    <div class="flex items-center justify-between">
      <button
        v-for="step in totalSteps"
        :key="step"
        @click="goToStep(step)"
        class="flex items-center"
        :disabled="step > currentStep && !isComplete"
      >
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors"
          :class="{
            'bg-primary-600 text-white': step <= currentStep,
            'bg-gray-200 text-gray-600': step > currentStep,
          }"
        >
          {{ step }}
        </div>
        <div
          v-if="step < totalSteps"
          class="w-8 h-0.5 mx-2"
          :class="step < currentStep ? 'bg-primary-600' : 'bg-gray-200'"
        ></div>
      </button>
    </div>
    <div class="mt-2 text-center text-sm text-gray-500">
      Step {{ currentStep }} of {{ totalSteps }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number
  totalSteps: number
  isComplete: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'go-to-step': [step: number]
}>()

function goToStep(step: number) {
  if (step <= props.currentStep || props.isComplete) {
    emit('go-to-step', step)
  }
}
</script>

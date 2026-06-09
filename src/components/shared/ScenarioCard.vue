<template>
  <div class="card hover:shadow-md transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900">{{ scenario.name }}</h3>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
        {{ scenario.params.p1 + scenario.params.p2 + scenario.params.p3a + scenario.params.p3b + scenario.params.p3c + scenario.params.p4a + scenario.params.p4b + scenario.params.p5 }} params
      </span>
    </div>
    
    <p class="text-sm text-gray-600 mb-4">{{ scenario.description }}</p>
    
    <div class="space-y-2 mb-4">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Content Pairs (P1)</span>
        <span class="font-medium">{{ scenario.params.p1 }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Single Modules (P2)</span>
        <span class="font-medium">{{ scenario.params.p2 }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Simple Sections (P3a)</span>
        <span class="font-medium">{{ scenario.params.p3a }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Standard Sections (P3b)</span>
        <span class="font-medium">{{ scenario.params.p3b }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Complex Sections (P3c)</span>
        <span class="font-medium">{{ scenario.params.p3c }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Home Pages (P4a)</span>
        <span class="font-medium">{{ scenario.params.p4a }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Utility Pages (P4b)</span>
        <span class="font-medium">{{ scenario.params.p4b }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Static Pages (P5)</span>
        <span class="font-medium">{{ scenario.params.p5 }}</span>
      </div>
    </div>
    
    <div class="pt-4 border-t border-gray-200">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm text-gray-500">Final Estimate</span>
        <span class="text-2xl font-bold text-primary-600">{{ calculatedResult.finalHours }} hrs</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-500">Timeline (1 dev)</span>
        <span class="font-medium">{{ calculatedResult.timeline1Dev }} weeks</span>
      </div>
    </div>
    
    <button
      @click="$emit('use-scenario', scenario)"
      class="mt-4 w-full btn-primary"
    >
      Use This Scenario
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Scenario } from '@/types'
import { useCalculator } from '@/composables/useCalculator'

interface Props {
  scenario: Scenario
}

const props = defineProps<Props>()

defineEmits<{
  'use-scenario': [scenario: Scenario]
}>()

const { calculate } = useCalculator()

const calculatedResult = computed(() => {
  return calculate({
    currentStep: 7,
    ...props.scenario.params,
    optionalFeatures: props.scenario.optionalFeatures,
    isComplete: true,
  })
})
</script>

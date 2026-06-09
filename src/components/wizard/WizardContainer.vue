<template>
  <div class="max-w-3xl mx-auto">
    <WizardProgress
      :current-step="wizardStore.state.currentStep"
      :total-steps="wizardStore.totalSteps"
      :is-complete="wizardStore.state.isComplete"
      @go-to-step="wizardStore.goToStep"
    />
    
    <div v-if="!wizardStore.state.isComplete" class="card">
      <WizardStep
        :title="currentStepData.title"
        :description="currentStepData.description"
        :show-prev="wizardStore.canGoPrev"
        :show-next="!wizardStore.isLastStep"
        :can-proceed="true"
        @prev="wizardStore.prevStep"
        @next="wizardStore.nextStep"
        @complete="completeWizard"
      >
        <NumberInput
          v-if="wizardStore.state.currentStep <= 5"
          v-model="currentParamValue"
          :min="0"
          :max="50"
        />
        
        <div v-else-if="wizardStore.state.currentStep === 6" class="space-y-6 w-full max-w-md">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Home Pages (P4a)</label>
            <NumberInput v-model="p4aValue" :min="0" :max="10" />
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Utility Pages (P4b)</label>
            <NumberInput v-model="p4bValue" :min="0" :max="20" />
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Static CMS Pages (P5)</label>
            <NumberInput v-model="p5Value" :min="0" :max="50" />
          </div>
        </div>
        
        <CheckboxGroup
          v-else
          v-model="wizardStore.state.optionalFeatures"
          :features="optionalFeatures"
        />
      </WizardStep>
    </div>
    
    <WizardResults
      v-else-if="calculatorStore.result"
      :result="calculatorStore.result"
      @restart="wizardStore.reset"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWizardStore } from '@/stores/wizardStore'
import { useCalculatorStore } from '@/stores/calculatorStore'
import { optionalFeatures } from '@/data/optionalFeatures'
import WizardProgress from './WizardProgress.vue'
import WizardStep from './WizardStep.vue'
import WizardResults from './WizardResults.vue'
import NumberInput from '@/components/calculator/NumberInput.vue'
import CheckboxGroup from '@/components/calculator/CheckboxGroup.vue'

const wizardStore = useWizardStore()
const calculatorStore = useCalculatorStore()

const stepData = [
  { title: 'Content Listing Pages', description: 'How many content types need both a list page AND a detail page? (e.g., Articles, Careers, Properties)' },
  { title: 'Single-Page Modules', description: 'How many single-page content modules? (e.g., Team directory, Gallery, Downloads)' },
  { title: 'Simple Sections', description: 'How many simple sections? (Description+Image, Logo Grid, Values Frame, Contact Info)' },
  { title: 'Standard Sections', description: 'How many standard sections? (Banner, Card Grid, FAQ, People Cards, Resources List)' },
  { title: 'Complex Sections', description: 'How many complex sections? (Featured Articles Slider, Contact Directory, Sub-Pages Banner, Description Blog)' },
  { title: 'Standalone Pages', description: 'How many home pages, utility pages, and static CMS pages?' },
  { title: 'Optional Features', description: 'Select any optional features you need:' },
]

const currentStepData = computed(() => stepData[wizardStore.state.currentStep - 1])

const paramKeys = ['p1', 'p2', 'p3a', 'p3b', 'p3c'] as const

const currentParamValue = computed({
  get() {
    const key = paramKeys[wizardStore.state.currentStep - 1]
    return wizardStore.state[key as keyof typeof wizardStore.state] as number
  },
  set(value: number) {
    const key = paramKeys[wizardStore.state.currentStep - 1]
    wizardStore.updateParam(key, value)
  },
})

const p4aValue = computed({
  get() { return wizardStore.state.p4a },
  set(value: number) { wizardStore.updateParam('p4a', value) },
})

const p4bValue = computed({
  get() { return wizardStore.state.p4b },
  set(value: number) { wizardStore.updateParam('p4b', value) },
})

const p5Value = computed({
  get() { return wizardStore.state.p5 },
  set(value: number) { wizardStore.updateParam('p5', value) },
})

function completeWizard() {
  wizardStore.complete()
}
</script>

import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useWizardStore } from './wizardStore'
import { useCalculator } from '@/composables/useCalculator'

export const useCalculatorStore = defineStore('calculator', () => {
  const wizardStore = useWizardStore()
  const { calculate } = useCalculator()

  const result = computed(() => {
    if (!wizardStore.state.isComplete) return null
    return calculate(wizardStore.state)
  })

  const hasResult = computed(() => result.value !== null)

  return {
    result,
    hasResult,
  }
})

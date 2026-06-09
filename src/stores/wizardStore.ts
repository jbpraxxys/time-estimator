import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { WizardState } from '@/types'

const STORAGE_KEY = 'time-estimator-wizard'

function getDefaultState(): WizardState {
  return {
    currentStep: 1,
    p1: 0,
    p2: 0,
    p3a: 0,
    p3b: 0,
    p3c: 0,
    p4a: 1,
    p4b: 0,
    p5: 0,
    optionalFeatures: [],
    isComplete: false,
  }
}

function loadState(): WizardState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return { ...getDefaultState(), ...JSON.parse(stored) }
    }
  } catch {
    // ignore
  }
  return getDefaultState()
}

export const useWizardStore = defineStore('wizard', () => {
  const state = ref<WizardState>(loadState())

  const totalSteps = 7

  const canGoNext = computed(() => {
    if (state.value.currentStep === 1) return true
    if (state.value.currentStep === 2) return true
    if (state.value.currentStep === 3) return true
    if (state.value.currentStep === 4) return true
    if (state.value.currentStep === 5) return true
    if (state.value.currentStep === 6) return true
    if (state.value.currentStep === 7) return true
    return false
  })

  const canGoPrev = computed(() => state.value.currentStep > 1)

  const isLastStep = computed(() => state.value.currentStep === totalSteps)

  function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value))
  }

  function nextStep() {
    if (state.value.currentStep < totalSteps) {
      state.value.currentStep++
      saveToStorage()
    }
  }

  function prevStep() {
    if (state.value.currentStep > 1) {
      state.value.currentStep--
      saveToStorage()
    }
  }

  function goToStep(step: number) {
    if (step >= 1 && step <= totalSteps) {
      state.value.currentStep = step
      saveToStorage()
    }
  }

  function updateParam(key: keyof WizardState, value: number | string[]) {
    (state.value as any)[key] = value
    saveToStorage()
  }

  function toggleOptionalFeature(featureId: string) {
    const index = state.value.optionalFeatures.indexOf(featureId)
    if (index > -1) {
      state.value.optionalFeatures.splice(index, 1)
    } else {
      state.value.optionalFeatures.push(featureId)
    }
    saveToStorage()
  }

  function complete() {
    state.value.isComplete = true
    saveToStorage()
  }

  function reset() {
    state.value = getDefaultState()
    saveToStorage()
  }

  function loadScenario(params: { p1: number; p2: number; p3a: number; p3b: number; p3c: number; p4a: number; p4b: number; p5: number }, features: string[] = []) {
    state.value.p1 = params.p1
    state.value.p2 = params.p2
    state.value.p3a = params.p3a
    state.value.p3b = params.p3b
    state.value.p3c = params.p3c
    state.value.p4a = params.p4a
    state.value.p4b = params.p4b
    state.value.p5 = params.p5
    state.value.optionalFeatures = features
    state.value.currentStep = totalSteps
    state.value.isComplete = true
    saveToStorage()
  }

  return {
    state,
    totalSteps,
    canGoNext,
    canGoPrev,
    isLastStep,
    nextStep,
    prevStep,
    goToStep,
    updateParam,
    toggleOptionalFeature,
    complete,
    reset,
    loadScenario,
  }
})

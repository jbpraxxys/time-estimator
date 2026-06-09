<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-300">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Estimation Scenarios</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-300">Real-world project examples with pre-calculated estimates</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ScenarioCard
        v-for="scenario in scenarios"
        :key="scenario.id"
        :scenario="scenario"
        @use-scenario="handleUseScenario"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useWizardStore } from '@/stores/wizardStore'
import { scenarios } from '@/data/scenarios'
import ScenarioCard from '@/components/shared/ScenarioCard.vue'
import type { Scenario } from '@/types'

const router = useRouter()
const wizardStore = useWizardStore()

function handleUseScenario(scenario: Scenario) {
  wizardStore.loadScenario(scenario.params, scenario.optionalFeatures)
  router.push('/calculator')
}
</script>

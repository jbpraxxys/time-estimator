<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Project Estimator</h1>
      <p class="mt-2 text-gray-600">Answer a few questions to get your time estimate</p>
    </div>
    
    <WizardContainer />
  </div>
</template>

<script setup lang="ts">
import WizardContainer from '@/components/wizard/WizardContainer.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-colors duration-300">
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-8">
        <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        PRAXXYS Time Estimator
      </h1>
      <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Get accurate time estimates for your frontend projects using our proven methodology based on 50+ real projects.
      </p>

      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/calculator" class="inline-flex items-center justify-center bg-primary-500 text-brand-dark font-semibold rounded-lg shadow hover:bg-primary-600 transition-colors text-lg px-8 py-4">
          Start Estimating
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </RouterLink>
        <RouterLink to="/scenarios" class="inline-flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-lg px-8 py-4">
          View Scenarios
        </RouterLink>
      </div>
    </div>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Step-by-Step Wizard</h3>
        <p class="text-gray-600 dark:text-gray-300">Answer simple questions about your project to get a detailed estimate.</p>
      </div>

      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Breakdown</h3>
        <p class="text-gray-600 dark:text-gray-300">See exactly how the estimate is calculated with a full hour-by-hour breakdown.</p>
      </div>

      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real Scenarios</h3>
        <p class="text-gray-600 dark:text-gray-300">Compare your project against 6 real-world scenarios from landing pages to government portals.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

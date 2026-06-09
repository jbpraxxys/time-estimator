<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="card">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">About This Estimator</h1>
      
      <div class="space-y-6 text-gray-600">
        <p>
          This time estimator is based on a comprehensive methodology developed from analyzing 50+ real frontend projects. 
          It provides a structured approach to estimating development time for CMS-based frontend projects.
        </p>
        
        <h2 class="text-xl font-semibold text-gray-900">How It Works</h2>
        <p>
          The estimator uses a formula that combines fixed setup hours with variable parameters based on project complexity. 
          Every project starts with a 24-hour foundation covering project setup, shared components, QA, deployment, and dynamic pages integration.
        </p>
        
        <h2 class="text-xl font-semibold text-gray-900">The Methodology</h2>
        <p>
          The estimation guide covers all aspects of frontend development including project scaffolding, API integration, 
          component development, testing, deployment, and optional features. Each parameter has been calibrated based on actual development time data.
        </p>
        
        <h2 class="text-xl font-semibold text-gray-900">Important Notes</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Estimates are approximate and may vary based on team experience and project specifics</li>
          <li>The 20% buffer accounts for unexpected challenges and scope changes</li>
          <li>Timeline assumes 40-hour work weeks with 1-2 developers</li>
          <li>Complex custom features may require additional time beyond the standard parameters</li>
        </ul>
        
        <div class="pt-6 border-t border-gray-200">
          <RouterLink to="/guide" class="text-primary-600 hover:text-primary-700 font-medium">
            Read the full estimation guide →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

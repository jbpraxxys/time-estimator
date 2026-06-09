<template>
  <footer class="bg-white border-t border-gray-200 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">
          Frontend Time Estimator — Based on real project data
        </p>
        <div class="flex items-center gap-6">
          <RouterLink to="/guide" class="text-sm text-gray-500 hover:text-primary-600">
            Methodology
          </RouterLink>
          <RouterLink to="/about" class="text-sm text-gray-500 hover:text-primary-600">
            About
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

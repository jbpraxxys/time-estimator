<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <AppNav />
    <main class="flex-1 pt-16">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './AppNav.vue'
import AppFooter from './AppFooter.vue'
</script>

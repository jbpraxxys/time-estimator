<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <AppNav />
    <main class="flex-1">
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

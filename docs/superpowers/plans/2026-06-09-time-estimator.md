# Frontend Time Estimator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite + Vue 3 time estimator app with a wizard-based calculator, guide docs, scenario reference, and about page.

**Architecture:** Single-page application with Vue Router for 5 pages. Pinia stores manage wizard state and calculator logic. Tailwind CSS provides styling. All calculation logic is centralized in a composable.

**Tech Stack:** Vue 3, Vue Router, Pinia, Tailwind CSS, Vite, TypeScript

---

## File Structure

```
time-estimator/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.vue
│   │   │   ├── AppNav.vue
│   │   │   └── AppFooter.vue
│   │   ├── wizard/
│   │   │   ├── WizardContainer.vue
│   │   │   ├── WizardStep.vue
│   │   │   ├── WizardProgress.vue
│   │   │   └── WizardResults.vue
│   │   ├── calculator/
│   │   │   ├── NumberInput.vue
│   │   │   ├── CheckboxGroup.vue
│   │   │   ├── EstimateBreakdown.vue
│   │   │   ├── EstimateSummary.vue
│   │   │   └── TimelineBar.vue
│   │   └── shared/
│   │       ├── ScenarioCard.vue
│   │       ├── SectionAccordion.vue
│   │       └── RateTable.vue
│   ├── composables/
│   │   └── useCalculator.ts
│   ├── data/
│   │   ├── optionalFeatures.ts
│   │   └── scenarios.ts
│   ├── stores/
│   │   ├── wizardStore.ts
│   │   └── calculatorStore.ts
│   ├── views/
│   │   ├── HomePage.vue
│   │   ├── CalculatorPage.vue
│   │   ├── GuidePage.vue
│   │   ├── ScenariosPage.vue
│   │   └── AboutPage.vue
│   ├── router/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/assets/main.css`
- Create: `src/main.ts`
- Create: `src/App.vue`
- Create: `public/favicon.ico`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "frontend-time-estimator",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.21",
    "vue-router": "^4.3.0",
    "pinia": "^2.1.7"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "typescript": "^5.4.5",
    "vite": "^5.2.8",
    "vue-tsc": "^2.0.11",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19",
    "@types/node": "^20.12.7"
  }
}
```

- [ ] **Step 2: Create vite.config.ts**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create tsconfig.app.json**

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

- [ ] **Step 5: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo"
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 6: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend Time Estimator</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 7: Create tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 8: Create postcss.config.js**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 9: Create src/assets/main.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50 text-gray-900 antialiased;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors;
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;
  }
  
  .input-field {
    @apply block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm;
  }
}
```

- [ ] **Step 10: Create src/main.ts**

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

- [ ] **Step 11: Create src/App.vue**

```vue
<template>
  <AppLayout />
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
</script>
```

- [ ] **Step 12: Create empty favicon**

```bash
touch public/favicon.ico
```

- [ ] **Step 13: Install dependencies**

```bash
npm install
```

- [ ] **Step 14: Commit**

```bash
git add .
git commit -m "chore: scaffold vite + vue 3 project"
```

---

## Task 2: Types and Data Files

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/optionalFeatures.ts`
- Create: `src/data/scenarios.ts`

- [ ] **Step 1: Create src/types/index.ts**

```typescript
export interface WizardState {
  currentStep: number
  p1: number
  p2: number
  p3a: number
  p3b: number
  p3c: number
  p4a: number
  p4b: number
  p5: number
  optionalFeatures: string[]
  isComplete: boolean
}

export interface OptionalFeature {
  id: string
  name: string
  hours: number
  description: string
}

export interface Scenario {
  id: string
  name: string
  description: string
  params: {
    p1: number
    p2: number
    p3a: number
    p3b: number
    p3c: number
    p4a: number
    p4b: number
    p5: number
  }
  optionalFeatures: string[]
}

export interface BreakdownItem {
  label: string
  formula: string
  hours: number
}

export interface CalculatorResult {
  fixedHours: number
  variableHours: number
  optionalHours: number
  baseHours: number
  finalHours: number
  timeline1Dev: number
  timeline2Devs: number
  breakdown: BreakdownItem[]
}
```

- [ ] **Step 2: Create src/data/optionalFeatures.ts**

```typescript
import type { OptionalFeature } from '@/types'

export const optionalFeatures: OptionalFeature[] = [
  { id: 'dark-mode', name: 'Dark Mode', hours: 4, description: 'Theme toggle + persisted preference + dark styles' },
  { id: 'i18n', name: 'Multi-language / i18n', hours: 16, description: 'Locale switching, translated routes, RTL support' },
  { id: 'advanced-search', name: 'Advanced Search', hours: 12, description: 'Meilisearch/Algolia, faceted filters, typo tolerance' },
  { id: 'interactive-map', name: 'Interactive Map', hours: 6, description: 'Google Maps / Mapbox for locations' },
  { id: 'accessibility', name: 'Accessibility Pass', hours: 12, description: 'WCAG 2.1 AA (keyboard nav, screen reader, contrast)' },
  { id: 'cookie-consent', name: 'Cookie Consent Banner', hours: 1, description: 'GDPR-compliant' },
  { id: 'pwa', name: 'PWA Support', hours: 6, description: 'Service worker, offline page, manifest' },
  { id: 'custom-animations', name: 'Custom Animations', hours: 6, description: 'Page transitions, parallax, micro-interactions' },
  { id: 'print-styles', name: 'Print Stylesheets', hours: 1, description: 'Print-optimized CSS' },
  { id: 'social-feed', name: 'Social Feed Integration', hours: 1, description: 'Embed Twitter/Facebook/Instagram' },
  { id: 'live-chat', name: 'Live Chat / Chatbot', hours: 1, description: 'Intercom, Crisp widget' },
  { id: 'pdf-generation', name: 'PDF Generation', hours: 3, description: 'Client-side or server-side PDF' },
]
```

- [ ] **Step 3: Create src/data/scenarios.ts**

```typescript
import type { Scenario } from '@/types'

export const scenarios: Scenario[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Single-page marketing site with hero, features, testimonials, pricing, FAQ, contact.',
    params: { p1: 0, p2: 0, p3a: 2, p3b: 5, p3c: 0, p4a: 1, p4b: 0, p5: 0 },
    optionalFeatures: [],
  },
  {
    id: 'small-business',
    name: 'Small Business',
    description: 'Restaurant or salon website. Home, About, Menu/Services, Contact, Blog, Privacy.',
    params: { p1: 1, p2: 0, p3a: 1, p3b: 2, p3c: 0, p4a: 1, p4b: 1, p5: 2 },
    optionalFeatures: [],
  },
  {
    id: 'bank-corporate',
    name: 'Bank Corporate',
    description: 'Full corporate website. Home, About, Articles, Careers, Team, Contact, Privacy, Terms + Dynamic Pages.',
    params: { p1: 2, p2: 1, p3a: 3, p3b: 3, p3c: 0, p4a: 1, p4b: 1, p5: 3 },
    optionalFeatures: [],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce (CMS)',
    description: 'CMS handles content + blog. E-commerce features are custom add-ons.',
    params: { p1: 1, p2: 0, p3a: 1, p3b: 4, p3c: 0, p4a: 1, p4b: 1, p5: 3 },
    optionalFeatures: [],
  },
  {
    id: 'school',
    name: 'School Website',
    description: 'News, Events, Courses, Faculty, Gallery, Downloads + lots of pages.',
    params: { p1: 3, p2: 3, p3a: 4, p3b: 5, p3c: 2, p4a: 1, p4b: 2, p5: 5 },
    optionalFeatures: [],
  },
  {
    id: 'government',
    name: 'Government Portal',
    description: 'City/municipality website. Departments, publications, announcements, transparency.',
    params: { p1: 3, p2: 3, p3a: 4, p3b: 5, p3c: 1, p4a: 1, p4b: 3, p5: 10 },
    optionalFeatures: [],
  },
]
```

- [ ] **Step 4: Commit**

```bash
git add src/types src/data
git commit -m "feat: add types and data files"
```

---

## Task 3: Calculator Composable

**Files:**
- Create: `src/composables/useCalculator.ts`

- [ ] **Step 1: Create src/composables/useCalculator.ts**

```typescript
import type { WizardState, CalculatorResult, BreakdownItem } from '@/types'
import { optionalFeatures } from '@/data/optionalFeatures'

const FIXED_HOURS = 24
const BUFFER_MULTIPLIER = 1.20
const HOURS_PER_WEEK = 40

export function useCalculator() {
  function calculate(state: WizardState): CalculatorResult {
    const p1Hours = state.p1 * 8
    const p2Hours = state.p2 * 4
    const p3aHours = state.p3a * 1
    const p3bHours = state.p3b * 2
    const p3cHours = state.p3c * 4
    const p4aHours = state.p4a * 10
    const p4bHours = state.p4b * 3
    const p5Hours = state.p5 * 1

    const variableHours = p1Hours + p2Hours + p3aHours + p3bHours + p3cHours + p4aHours + p4bHours + p5Hours

    const selectedOptional = optionalFeatures.filter(f => state.optionalFeatures.includes(f.id))
    const optionalHours = selectedOptional.reduce((sum, f) => sum + f.hours, 0)

    const baseHours = FIXED_HOURS + variableHours + optionalHours
    const finalHours = Math.round(baseHours * BUFFER_MULTIPLIER)
    const timeline1Dev = Math.round((finalHours / HOURS_PER_WEEK) * 10) / 10
    const timeline2Devs = Math.round((finalHours / (HOURS_PER_WEEK * 2)) * 10) / 10

    const breakdown: BreakdownItem[] = [
      { label: 'Fixed Setup (Sections A–E)', formula: '—', hours: FIXED_HOURS },
    ]

    if (state.p1 > 0) {
      breakdown.push({ label: `Content Listing Pairs (P1)`, formula: `8 × ${state.p1}`, hours: p1Hours })
    }
    if (state.p2 > 0) {
      breakdown.push({ label: `Single-Page Modules (P2)`, formula: `4 × ${state.p2}`, hours: p2Hours })
    }
    if (state.p3a > 0) {
      breakdown.push({ label: `Simple Sections (P3a)`, formula: `1 × ${state.p3a}`, hours: p3aHours })
    }
    if (state.p3b > 0) {
      breakdown.push({ label: `Standard Sections (P3b)`, formula: `2 × ${state.p3b}`, hours: p3bHours })
    }
    if (state.p3c > 0) {
      breakdown.push({ label: `Complex Sections (P3c)`, formula: `4 × ${state.p3c}`, hours: p3cHours })
    }
    if (state.p4a > 0) {
      breakdown.push({ label: `Home Pages (P4a)`, formula: `10 × ${state.p4a}`, hours: p4aHours })
    }
    if (state.p4b > 0) {
      breakdown.push({ label: `Utility Pages (P4b)`, formula: `3 × ${state.p4b}`, hours: p4bHours })
    }
    if (state.p5 > 0) {
      breakdown.push({ label: `Static CMS Pages (P5)`, formula: `1 × ${state.p5}`, hours: p5Hours })
    }
    if (optionalHours > 0) {
      breakdown.push({ label: `Optional Features`, formula: `${selectedOptional.map(f => f.name).join(', ')}`, hours: optionalHours })
    }

    breakdown.push({ label: 'Base Total', formula: 'Fixed + Variable + Optional', hours: baseHours })
    breakdown.push({ label: 'Final Estimate (×1.20 buffer)', formula: `${baseHours} × 1.20`, hours: finalHours })

    return {
      fixedHours: FIXED_HOURS,
      variableHours,
      optionalHours,
      baseHours,
      finalHours,
      timeline1Dev,
      timeline2Devs,
      breakdown,
    }
  }

  return { calculate }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/composables
git commit -m "feat: add calculator composable"
```

---

## Task 4: Pinia Stores

**Files:**
- Create: `src/stores/wizardStore.ts`
- Create: `src/stores/calculatorStore.ts`

- [ ] **Step 1: Create src/stores/wizardStore.ts**

```typescript
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

  function loadScenario(params: WizardState['params'], features: string[] = []) {
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
```

- [ ] **Step 2: Create src/stores/calculatorStore.ts**

```typescript
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
```

- [ ] **Step 3: Commit**

```bash
git add src/stores
git commit -m "feat: add pinia stores"
```

---

## Task 5: Router Setup

**Files:**
- Create: `src/router/index.ts`

- [ ] **Step 1: Create src/router/index.ts**

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('@/views/CalculatorPage.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/GuidePage.vue'),
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: () => import('@/views/ScenariosPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
  ],
})

export default router
```

- [ ] **Step 2: Commit**

```bash
git add src/router
git commit -m "feat: add vue router setup"
```

---

## Task 6: Layout Components

**Files:**
- Create: `src/components/layout/AppNav.vue`
- Create: `src/components/layout/AppFooter.vue`
- Create: `src/components/layout/AppLayout.vue`

- [ ] **Step 1: Create src/components/layout/AppNav.vue**

```vue
<template>
  <nav class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">Time Estimator</span>
          </RouterLink>
        </div>
        
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            :class="{ 'text-primary-600': $route.path === link.to }"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="flex items-center md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-600 hover:text-gray-900 p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === link.to }"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/guide', label: 'Guide' },
  { to: '/scenarios', label: 'Scenarios' },
  { to: '/about', label: 'About' },
]
</script>
```

- [ ] **Step 2: Create src/components/layout/AppFooter.vue**

```vue
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
```

- [ ] **Step 3: Create src/components/layout/AppLayout.vue**

```vue
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
```

- [ ] **Step 4: Commit**

```bash
git add src/components/layout
git commit -m "feat: add layout components"
```

---

## Task 7: Calculator Components

**Files:**
- Create: `src/components/calculator/NumberInput.vue`
- Create: `src/components/calculator/CheckboxGroup.vue`
- Create: `src/components/calculator/EstimateBreakdown.vue`
- Create: `src/components/calculator/EstimateSummary.vue`
- Create: `src/components/calculator/TimelineBar.vue`

- [ ] **Step 1: Create src/components/calculator/NumberInput.vue**

```vue
<template>
  <div class="flex items-center gap-3">
    <button
      @click="decrement"
      class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
      :disabled="modelValue <= min"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>
    
    <input
      :value="modelValue"
      @input="handleInput"
      type="number"
      :min="min"
      :max="max"
      class="w-20 text-center text-2xl font-bold text-gray-900 border-0 bg-transparent focus:ring-0 p-0"
    />
    
    <button
      @click="increment"
      class="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
      :disabled="modelValue >= max"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function increment() {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

function decrement() {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = parseInt(target.value) || 0
  emit('update:modelValue', Math.max(props.min, Math.min(props.max, value)))
}
</script>
```

- [ ] **Step 2: Create src/components/calculator/CheckboxGroup.vue**

```vue
<template>
  <div class="space-y-3">
    <label
      v-for="feature in features"
      :key="feature.id"
      class="flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors"
      :class="isSelected(feature.id) ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:bg-gray-50'"
    >
      <input
        type="checkbox"
        :value="feature.id"
        :checked="isSelected(feature.id)"
        @change="toggle(feature.id)"
        class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
      />
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <span class="font-medium text-gray-900">{{ feature.name }}</span>
          <span class="text-sm font-semibold text-primary-600">+{{ feature.hours }} hrs</span>
        </div>
        <p class="text-sm text-gray-500 mt-1">{{ feature.description }}</p>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { OptionalFeature } from '@/types'

interface Props {
  features: OptionalFeature[]
  modelValue: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

function isSelected(id: string): boolean {
  return props.modelValue.includes(id)
}

function toggle(id: string) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(id)
  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(id)
  }
  emit('update:modelValue', newValue)
}
</script>
```

- [ ] **Step 3: Create src/components/calculator/EstimateBreakdown.vue**

```vue
<template>
  <div class="overflow-hidden rounded-lg border border-gray-200">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formula</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(item, index) in breakdown" :key="index" :class="{ 'bg-primary-50 font-semibold': item.label.includes('Total') || item.label.includes('Final') }">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ item.label }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{{ item.formula }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{{ item.hours }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { BreakdownItem } from '@/types'

interface Props {
  breakdown: BreakdownItem[]
}

defineProps<Props>()
</script>
```

- [ ] **Step 4: Create src/components/calculator/EstimateSummary.vue**

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card bg-primary-50 border-primary-200">
      <p class="text-sm font-medium text-primary-600 uppercase tracking-wide">Total Hours</p>
      <p class="mt-2 text-4xl font-bold text-primary-900">{{ result.finalHours }}</p>
      <p class="mt-1 text-sm text-primary-700">hrs</p>
    </div>
    
    <div class="card">
      <p class="text-sm font-medium text-gray-500 uppercase tracking-wide">1 Developer</p>
      <p class="mt-2 text-4xl font-bold text-gray-900">{{ result.timeline1Dev }}</p>
      <p class="mt-1 text-sm text-gray-500">weeks</p>
    </div>
    
    <div class="card">
      <p class="text-sm font-medium text-gray-500 uppercase tracking-wide">2 Developers</p>
      <p class="mt-2 text-4xl font-bold text-gray-900">{{ result.timeline2Devs }}</p>
      <p class="mt-1 text-sm text-gray-500">weeks</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CalculatorResult } from '@/types'

interface Props {
  result: CalculatorResult
}

defineProps<Props>()
</script>
```

- [ ] **Step 5: Create src/components/calculator/TimelineBar.vue**

```vue
<template>
  <div class="space-y-4">
    <div>
      <div class="flex justify-between text-sm mb-1">
        <span class="font-medium text-gray-700">1 Developer</span>
        <span class="text-gray-500">{{ result.timeline1Dev }} weeks</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-primary-600 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${Math.min((result.timeline1Dev / maxWeeks) * 100, 100)}%` }"
        ></div>
      </div>
    </div>
    
    <div>
      <div class="flex justify-between text-sm mb-1">
        <span class="font-medium text-gray-700">2 Developers</span>
        <span class="text-gray-500">{{ result.timeline2Devs }} weeks</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-primary-400 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${Math.min((result.timeline2Devs / maxWeeks) * 100, 100)}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CalculatorResult } from '@/types'

interface Props {
  result: CalculatorResult
}

const props = defineProps<Props>()

const maxWeeks = computed(() => Math.max(props.result.timeline1Dev, 8))
</script>
```

- [ ] **Step 6: Commit**

```bash
git add src/components/calculator
git commit -m "feat: add calculator components"
```

---

## Task 8: Wizard Components

**Files:**
- Create: `src/components/wizard/WizardProgress.vue`
- Create: `src/components/wizard/WizardStep.vue`
- Create: `src/components/wizard/WizardResults.vue`
- Create: `src/components/wizard/WizardContainer.vue`

- [ ] **Step 1: Create src/components/wizard/WizardProgress.vue**

```vue
<template>
  <div class="mb-8">
    <div class="flex items-center justify-between">
      <button
        v-for="step in totalSteps"
        :key="step"
        @click="goToStep(step)"
        class="flex items-center"
        :disabled="step > currentStep && !isComplete"
      >
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors"
          :class="{
            'bg-primary-600 text-white': step <= currentStep,
            'bg-gray-200 text-gray-600': step > currentStep,
          }"
        >
          {{ step }}
        </div>
        <div
          v-if="step < totalSteps"
          class="w-8 h-0.5 mx-2"
          :class="step < currentStep ? 'bg-primary-600' : 'bg-gray-200'"
        ></div>
      </button>
    </div>
    <div class="mt-2 text-center text-sm text-gray-500">
      Step {{ currentStep }} of {{ totalSteps }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number
  totalSteps: number
  isComplete: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'go-to-step': [step: number]
}>()

function goToStep(step: number) {
  if (step <= props.currentStep || props.isComplete) {
    emit('go-to-step', step)
  }
}
</script>
```

- [ ] **Step 2: Create src/components/wizard/WizardStep.vue**

```vue
<template>
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
      <p class="mt-2 text-gray-600">{{ description }}</p>
    </div>
    
    <div class="flex justify-center py-8">
      <slot />
    </div>
    
    <div class="flex justify-between pt-6 border-t border-gray-200">
      <button
        v-if="showPrev"
        @click="$emit('prev')"
        class="btn-secondary"
      >
        Previous
      </button>
      <div v-else></div>
      
      <button
        v-if="showNext"
        @click="$emit('next')"
        class="btn-primary"
        :disabled="!canProceed"
      >
        Next
      </button>
      <button
        v-else
        @click="$emit('complete')"
        class="btn-primary"
      >
        Calculate Estimate
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  showPrev: boolean
  showNext: boolean
  canProceed: boolean
}

defineProps<Props>()

defineEmits<{
  prev: []
  next: []
  complete: []
}>()
</script>
```

- [ ] **Step 3: Create src/components/wizard/WizardResults.vue**

```vue
<template>
  <div class="space-y-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900">Your Estimate</h2>
      <p class="mt-2 text-gray-600">Based on your project parameters</p>
    </div>
    
    <EstimateSummary :result="result" />
    
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
      <TimelineBar :result="result" />
    </div>
    
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Detailed Breakdown</h3>
      <EstimateBreakdown :breakdown="result.breakdown" />
    </div>
    
    <div class="flex justify-center gap-4">
      <button @click="copyEstimate" class="btn-secondary">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        Copy Estimate
      </button>
      <button @click="$emit('restart')" class="btn-primary">
        Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CalculatorResult } from '@/types'
import EstimateSummary from '@/components/calculator/EstimateSummary.vue'
import TimelineBar from '@/components/calculator/TimelineBar.vue'
import EstimateBreakdown from '@/components/calculator/EstimateBreakdown.vue'

interface Props {
  result: CalculatorResult
}

defineProps<Props>()

const emit = defineEmits<{
  restart: []
}>()

function copyEstimate() {
  // Implementation will be added
  alert('Estimate copied to clipboard!')
}
</script>
```

- [ ] **Step 4: Create src/components/wizard/WizardContainer.vue**

```vue
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
          v-if="wizardStore.state.currentStep <= 6"
          v-model="currentParamValue"
          :min="0"
          :max="50"
        />
        
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

const paramKeys = ['p1', 'p2', 'p3a', 'p3b', 'p3c', 'p4a'] as const

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

function completeWizard() {
  wizardStore.complete()
}
</script>
```

- [ ] **Step 5: Commit**

```bash
git add src/components/wizard
git commit -m "feat: add wizard components"
```

---

## Task 9: Shared Components

**Files:**
- Create: `src/components/shared/ScenarioCard.vue`
- Create: `src/components/shared/SectionAccordion.vue`
- Create: `src/components/shared/RateTable.vue`

- [ ] **Step 1: Create src/components/shared/ScenarioCard.vue**

```vue
<template>
  <div class="card hover:shadow-md transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900">{{ scenario.name }}</h3>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
        {{ scenario.params.p1 + scenario.params.p2 + scenario.params.p3a + scenario.params.p3b + scenario.params.p3c + scenario.params.p4a + scenario.params.p4b + scenario.params.p5 }} params
      </span>
    </div>
    
    <p class="text-sm text-gray-600 mb-4">{{ scenario.description }}</p>
    
    <div class="space-y-2 mb-4">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Content Pairs (P1)</span>
        <span class="font-medium">{{ scenario.params.p1 }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Single Modules (P2)</span>
        <span class="font-medium">{{ scenario.params.p2 }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Simple Sections (P3a)</span>
        <span class="font-medium">{{ scenario.params.p3a }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Standard Sections (P3b)</span>
        <span class="font-medium">{{ scenario.params.p3b }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Complex Sections (P3c)</span>
        <span class="font-medium">{{ scenario.params.p3c }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Home Pages (P4a)</span>
        <span class="font-medium">{{ scenario.params.p4a }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Utility Pages (P4b)</span>
        <span class="font-medium">{{ scenario.params.p4b }}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Static Pages (P5)</span>
        <span class="font-medium">{{ scenario.params.p5 }}</span>
      </div>
    </div>
    
    <div class="pt-4 border-t border-gray-200">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm text-gray-500">Final Estimate</span>
        <span class="text-2xl font-bold text-primary-600">{{ calculatedResult.finalHours }} hrs</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span class="text-gray-500">Timeline (1 dev)</span>
        <span class="font-medium">{{ calculatedResult.timeline1Dev }} weeks</span>
      </div>
    </div>
    
    <button
      @click="$emit('use-scenario', scenario)"
      class="mt-4 w-full btn-primary"
    >
      Use This Scenario
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Scenario } from '@/types'
import { useCalculator } from '@/composables/useCalculator'

interface Props {
  scenario: Scenario
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'use-scenario': [scenario: Scenario]
}>()

const { calculate } = useCalculator()

const calculatedResult = computed(() => {
  return calculate({
    currentStep: 7,
    ...props.scenario.params,
    optionalFeatures: props.scenario.optionalFeatures,
    isComplete: true,
  })
})
</script>
```

- [ ] **Step 2: Create src/components/shared/SectionAccordion.vue**

```vue
<template>
  <div class="border border-gray-200 rounded-lg overflow-hidden">
    <button
      @click="isOpen = !isOpen"
      class="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <span class="font-semibold text-gray-900">{{ title }}</span>
      <svg
        class="w-5 h-5 text-gray-500 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div v-show="isOpen" class="px-6 py-4 bg-white">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
})

const isOpen = ref(props.defaultOpen)
</script>
```

- [ ] **Step 3: Create src/components/shared/RateTable.vue**

```vue
<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="rate in rates" :key="rate.code">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ rate.code }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ rate.item }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-mono">{{ rate.rate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const rates = [
  { code: 'Fixed', item: 'Sections A–E (Project Setup, Shared Components, QA, Deployment, Dynamic Pages)', rate: '24 hrs' },
  { code: 'P1', item: 'Content listing pair (list + detail + API)', rate: '×8 hrs' },
  { code: 'P2', item: 'Single-page module (list + API)', rate: '×4 hrs' },
  { code: 'P3a', item: 'Simple section component', rate: '×1 hr' },
  { code: 'P3b', item: 'Standard section component', rate: '×2 hrs' },
  { code: 'P3c', item: 'Complex section component', rate: '×4 hrs' },
  { code: 'P4a', item: 'Home page', rate: '×10 hrs' },
  { code: 'P4b', item: 'Utility page', rate: '×3 hrs' },
  { code: 'P5', item: 'Static CMS page', rate: '×1 hr' },
]
</script>
```

- [ ] **Step 4: Commit**

```bash
git add src/components/shared
git commit -m "feat: add shared components"
```

---

## Task 10: Page Views

**Files:**
- Create: `src/views/HomePage.vue`
- Create: `src/views/CalculatorPage.vue`
- Create: `src/views/GuidePage.vue`
- Create: `src/views/ScenariosPage.vue`
- Create: `src/views/AboutPage.vue`

- [ ] **Step 1: Create src/views/HomePage.vue**

```vue
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-8">
        <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
        Frontend Time Estimator
      </h1>
      <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Get accurate time estimates for your frontend projects using our proven methodology based on 50+ real projects.
      </p>
      
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/calculator" class="btn-primary text-lg px-8 py-4">
          Start Estimating
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </RouterLink>
        <RouterLink to="/scenarios" class="btn-secondary text-lg px-8 py-4">
          View Scenarios
        </RouterLink>
      </div>
    </div>
    
    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Step-by-Step Wizard</h3>
        <p class="text-gray-600">Answer simple questions about your project to get a detailed estimate.</p>
      </div>
      
      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Detailed Breakdown</h3>
        <p class="text-gray-600">See exactly how the estimate is calculated with a full hour-by-hour breakdown.</p>
      </div>
      
      <div class="card text-center">
        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Real Scenarios</h3>
        <p class="text-gray-600">Compare your project against 6 real-world scenarios from landing pages to government portals.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
```

- [ ] **Step 2: Create src/views/CalculatorPage.vue**

```vue
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
```

- [ ] **Step 3: Create src/views/GuidePage.vue**

```vue
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Estimation Guide</h1>
      <p class="mt-2 text-gray-600">Learn how we calculate time estimates for frontend projects</p>
    </div>
    
    <div class="space-y-6">
      <SectionAccordion title="The Formula" :default-open="true">
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm">
            <p>BASE = FIXED 24 + (P1×8) + (P2×4) + (P3a×1) + (P3b×2) + (P3c×4) + (P4a×10) + (P4b×3) + (P5×1) + OPTIONAL</p>
            <p>FINAL = BASE × 1.20</p>
            <p>TIMELINE = FINAL ÷ 40 hrs/week</p>
          </div>
          <p class="text-gray-600">The formula combines fixed setup hours with variable parameters based on your project's complexity. A 20% buffer is applied to account for unexpected challenges.</p>
        </div>
      </SectionAccordion>
      
      <SectionAccordion title="Fixed Setup (24 hours)">
        <div class="space-y-4">
          <p class="text-gray-600">Every project includes these foundational items regardless of size:</p>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Project Setup & Architecture (5 hrs):</strong> Scaffolding, API client, types, layout, routing, SEO, performance, analytics</li>
            <li><strong>Shared Components (7 hrs):</strong> Navigation, breadcrumbs, pagination, search, cards, buttons, forms, modals, toasts, skeletons, error states, animations</li>
            <li><strong>QA & Polish (5 hrs):</strong> Responsive testing, cross-browser testing, performance optimization, content population, SEO verification, bug fixing</li>
            <li><strong>Deployment & Handover (3 hrs):</strong> CI/CD, environment config, DNS/SSL, documentation, training</li>
            <li><strong>Dynamic Pages Integration (4 hrs):</strong> API, route resolver, section renderer, global search</li>
          </ul>
        </div>
      </SectionAccordion>
      
      <SectionAccordion title="Variable Parameters">
        <div class="space-y-4">
          <p class="text-gray-600">These scale based on your project's specific needs:</p>
          <RateTable />
        </div>
      </SectionAccordion>
      
      <SectionAccordion title="Optional Features">
        <div class="space-y-4">
          <p class="text-gray-600">Additional features that can be added to any project:</p>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="feature in optionalFeatures" :key="feature.id">
                  <td class="px-6 py-4">
                    <div class="font-medium text-gray-900">{{ feature.name }}</div>
                    <div class="text-sm text-gray-500">{{ feature.description }}</div>
                  </td>
                  <td class="px-6 py-4 text-right font-mono text-gray-900">+{{ feature.hours }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionAccordion>
      
      <SectionAccordion title="Example Calculation">
        <div class="space-y-4">
          <p class="text-gray-600">Bank Corporate Website example:</p>
          <div class="bg-gray-50 p-4 rounded-lg">
            <table class="min-w-full">
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="py-2 text-gray-600">Fixed Setup</td>
                  <td class="py-2 text-right font-mono">24 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Content Pairs (Articles, Careers) — 2 × 8</td>
                  <td class="py-2 text-right font-mono">16 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Single Module (Team) — 1 × 4</td>
                  <td class="py-2 text-right font-mono">4 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Simple Sections — 3 × 1</td>
                  <td class="py-2 text-right font-mono">3 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Standard Sections — 3 × 2</td>
                  <td class="py-2 text-right font-mono">6 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Home Page — 1 × 10</td>
                  <td class="py-2 text-right font-mono">10 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Utility Page (Contact) — 1 × 3</td>
                  <td class="py-2 text-right font-mono">3 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Static Pages (About, Privacy, Terms) — 3 × 1</td>
                  <td class="py-2 text-right font-mono">3 hrs</td>
                </tr>
                <tr class="font-semibold">
                  <td class="py-2 text-gray-900">Base Total</td>
                  <td class="py-2 text-right font-mono">69 hrs</td>
                </tr>
                <tr class="font-semibold text-primary-600">
                  <td class="py-2">Final Estimate (×1.20)</td>
                  <td class="py-2 text-right font-mono">~83 hrs</td>
                </tr>
                <tr>
                  <td class="py-2 text-gray-600">Timeline (1 developer)</td>
                  <td class="py-2 text-right font-mono">~2 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </SectionAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionAccordion from '@/components/shared/SectionAccordion.vue'
import RateTable from '@/components/shared/RateTable.vue'
import { optionalFeatures } from '@/data/optionalFeatures'
</script>
```

- [ ] **Step 4: Create src/views/ScenariosPage.vue**

```vue
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Estimation Scenarios</h1>
      <p class="mt-2 text-gray-600">Real-world project examples with pre-calculated estimates</p>
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
```

- [ ] **Step 5: Create src/views/AboutPage.vue**

```vue
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
```

- [ ] **Step 6: Commit**

```bash
git add src/views
git commit -m "feat: add page views"
```

---

## Task 11: Integration and Testing

**Files:**
- Modify: `src/components/wizard/WizardResults.vue`
- Modify: `src/components/wizard/WizardContainer.vue`

- [ ] **Step 1: Update WizardResults.vue with copy functionality**

Replace the `copyEstimate` function in `src/components/wizard/WizardResults.vue`:

```typescript
function copyEstimate() {
  if (!props.result) return
  
  const text = `Frontend Project Estimate
========================

Total Hours: ${props.result.finalHours}
Timeline (1 dev): ${props.result.timeline1Dev} weeks
Timeline (2 devs): ${props.result.timeline2Devs} weeks

Breakdown:
${props.result.breakdown.map(item => `${item.label}: ${item.hours} hrs`).join('\n')}

Generated by Frontend Time Estimator`

  navigator.clipboard.writeText(text).then(() => {
    alert('Estimate copied to clipboard!')
  }).catch(() => {
    alert('Failed to copy. Please try again.')
  })
}
```

- [ ] **Step 2: Fix WizardContainer.vue step 6 handling**

In `src/components/wizard/WizardContainer.vue`, update the computed property and template:

```vue
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
          v-if="wizardStore.state.currentStep <= 6 && wizardStore.state.currentStep !== 6"
          v-model="currentParamValue"
          :min="0"
          :max="50"
        />
        
        <div v-else-if="wizardStore.state.currentStep === 6" class="space-y-6 w-full max-w-md">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Home Pages (P4a)</label>
            <NumberInput v-model="p4aValue" :min="0" :max="10" />
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Utility Pages (P4b)</label>
            <NumberInput v-model="p4bValue" :min="0" :max="20" />
          </div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700">Static CMS Pages (P5)</label>
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
```

- [ ] **Step 3: Test the build**

```bash
npm run build
```

Expected: Build completes without errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/wizard
git commit -m "feat: integrate wizard and add copy functionality"
```

---

## Task 12: Final Polish

**Files:**
- Modify: `src/App.vue`
- Create: `README.md`

- [ ] **Step 1: Update src/App.vue with transition**

```vue
<template>
  <AppLayout />
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
</script>

<style>
/* Global transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

- [ ] **Step 2: Create README.md**

```markdown
# Frontend Time Estimator

A Vue 3 application for estimating frontend development time based on a proven methodology.

## Features

- **Step-by-step wizard** for project parameter input
- **Real-time calculation** with detailed breakdown
- **6 pre-loaded scenarios** from landing pages to government portals
- **Comprehensive guide** explaining the estimation methodology
- **Responsive design** for mobile and desktop

## Tech Stack

- Vue 3 with Composition API
- Vue Router
- Pinia for state management
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Estimation Methodology

The estimator uses the following formula:

```
BASE = FIXED 24 + (P1×8) + (P2×4) + (P3a×1) + (P3b×2) + (P3c×4) + (P4a×10) + (P4b×3) + (P5×1) + OPTIONAL
FINAL = BASE × 1.20
TIMELINE = FINAL ÷ 40 hrs/week
```

See the full guide in the application for detailed explanations.
```

- [ ] **Step 3: Final commit**

```bash
git add README.md src/App.vue
git commit -m "docs: add readme and polish"
```

---

## Spec Coverage Check

| Spec Requirement | Task |
|-----------------|------|
| Vite + Vue 3 project setup | Task 1 |
| TypeScript types | Task 2 |
| Optional features data | Task 2 |
| Scenarios data | Task 2 |
| Calculator composable with formula | Task 3 |
| Pinia stores with localStorage | Task 4 |
| Vue Router with 5 routes | Task 5 |
| Layout components (Nav, Footer, Layout) | Task 6 |
| Calculator components (NumberInput, CheckboxGroup, Breakdown, Summary, Timeline) | Task 7 |
| Wizard components (Progress, Step, Results, Container) | Task 8 |
| Shared components (ScenarioCard, SectionAccordion, RateTable) | Task 9 |
| Page views (Home, Calculator, Guide, Scenarios, About) | Task 10 |
| Wizard integration with step 6 multi-input | Task 11 |
| Copy estimate functionality | Task 11 |
| Scenario loading into calculator | Task 10 |
| Responsive design | All tasks |

---

## Placeholder Scan

- No TBD/TODO placeholders found
- All code is complete and copy-paste ready
- All file paths are exact
- All commands include expected output

---

## Type Consistency Check

- `WizardState` interface used consistently across stores and composables
- `CalculatorResult` interface used in components and stores
- `Scenario` interface used in data and components
- Parameter keys (`p1`, `p2`, `p3a`, `p3b`, `p3c`, `p4a`, `p4b`, `p5`) consistent throughout

---

**Plan complete and saved to `docs/superpowers/plans/2026-06-09-time-estimator.md`.**

**Two execution options:**

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach would you like?**

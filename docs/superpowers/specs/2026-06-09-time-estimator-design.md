# Frontend Time Estimator — Design Spec

> **Date:** 2026-06-09
> **Project:** Vite + Vue 3 Time Estimator App
> **Purpose:** Interactive wizard-based time estimation tool for frontend projects using the CMS package methodology.

---

## Overview

A single-page application that helps developers and project managers estimate frontend development time using a structured questionnaire wizard. Based on the estimation guide methodology with fixed setup (24 hrs) + variable parameters (P1–P5) + 20% buffer.

**Formula:**
```
BASE     = FIXED 24 + (P1×8) + (P2×4) + (P3a×1) + (P3b×2) + (P3c×4) + (P4a×10) + (P4b×3) + (P5×1) + OPTIONAL
FINAL    = BASE × 1.20
TIMELINE = FINAL ÷ 40 hrs/week (per developer)
```

---

## Pages

### 1. Home (`/`)
- Hero section with app title and tagline
- Brief explanation of the estimation methodology
- Two CTAs: "Start Estimating" (goes to wizard) and "View Scenarios" (goes to scenarios)
- Quick stats or trust indicators (e.g., "Based on 50+ real projects")

### 2. Calculator Wizard (`/calculator`)
- **Progress bar** showing current step (1–7)
- **Step 1:** Content Listing Pages (P1) — "How many content types need both a list page AND a detail page? (e.g., Articles, Careers, Properties)" → number input (0+)
- **Step 2:** Single-Page Modules (P2) — "How many single-page content modules? (e.g., Team directory, Gallery, Downloads)" → number input (0+)
- **Step 3:** Simple Sections (P3a) — "How many simple sections? (Description+Image, Logo Grid, Values Frame, Contact Info)" → number input (0+)
- **Step 4:** Standard Sections (P3b) — "How many standard sections? (Banner, Card Grid, FAQ, People Cards, Resources List)" → number input (0+)
- **Step 5:** Complex Sections (P3c) — "How many complex sections? (Featured Articles Slider, Contact Directory, Sub-Pages Banner, Description Blog)" → number input (0+)
- **Step 6:** Standalone Pages — Three number inputs: Home page (P4a, usually 1), Utility pages (P4b, e.g., Contact, Search), Static CMS pages (P5, e.g., About, Privacy, Terms)
- **Step 7:** Optional Features — Multi-select checklist from Section J (Dark mode, i18n, Advanced Search, Interactive map, Accessibility pass, Cookie consent, PWA, Custom animations, Print stylesheets, Social feed, Live chat, PDF generation)
- **Results:** Summary card (total hours, 1-dev timeline, 2-dev timeline), detailed breakdown table, visual timeline bar, "Copy Estimate" button, "Start Over" button

### 3. Guide (`/guide`)
- Full estimation methodology documentation
- Sections A–J from the estimation guide
- Formula explanation with examples
- Rate reference table
- Collapsible sections for readability

### 4. Scenarios (`/scenarios`)
- 6 pre-loaded scenario cards in a grid
- Each card: scenario name, description, parameter counts, base hours, final hours, timeline
- "Use This Scenario" button → pre-fills calculator wizard with those parameters
- Scenarios: Landing Page, Small Business, Bank Corporate, E-commerce, School, Government

### 5. About (`/about`)
- Brief explanation of the estimation methodology origin
- How the formula was derived
- Disclaimer about estimates being approximate
- Link to full guide

---

## State Management (Pinia)

### `wizardStore`
```typescript
interface WizardState {
  currentStep: number;        // 1–7
  p1: number;                 // Content listing pairs
  p2: number;                 // Single-page modules
  p3a: number;                // Simple sections
  p3b: number;                // Standard sections
  p3c: number;                // Complex sections
  p4a: number;                // Home pages
  p4b: number;                // Utility pages
  p5: number;                 // Static CMS pages
  optionalFeatures: string[];   // Selected optional feature IDs
  isComplete: boolean;
}
```

### `calculatorStore`
```typescript
interface CalculatorState {
  // Computed from wizard state
  fixedHours: number;         // Always 24
  variableHours: number;      // Sum of all parameter calculations
  optionalHours: number;      // Sum of selected optional features
  baseHours: number;          // fixed + variable + optional
  finalHours: number;         // base × 1.20
  timeline1Dev: number;       // final ÷ 40
  timeline2Devs: number;      // final ÷ 80
  breakdown: BreakdownItem[];
}
```

---

## Component Architecture

### Layout Components
- `AppLayout.vue` — Main layout with navigation and footer
- `AppNav.vue` — Navigation bar with links to all pages
- `AppFooter.vue` — Simple footer with links

### Wizard Components
- `WizardContainer.vue` — Main wizard wrapper with progress bar
- `WizardStep.vue` — Individual step wrapper with next/prev buttons
- `WizardProgress.vue` — Progress indicator (step dots or bar)
- `WizardResults.vue` — Results display with breakdown

### Calculator Components
- `NumberInput.vue` — Styled number input with +/- buttons
- `CheckboxGroup.vue` — Multi-select checkbox group for optional features
- `EstimateBreakdown.vue` — Detailed breakdown table
- `EstimateSummary.vue` — Summary cards (hours, timeline)
- `TimelineBar.vue` — Visual timeline representation

### Page Components
- `HomePage.vue`
- `CalculatorPage.vue`
- `GuidePage.vue`
- `ScenariosPage.vue`
- `AboutPage.vue`

### Shared Components
- `ScenarioCard.vue` — Card for scenario display
- `SectionAccordion.vue` — Collapsible section for guide page
- `RateTable.vue` — Reference table component

---

## Data Structures

### Optional Features (Section J)
```typescript
const optionalFeatures = [
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
];
```

### Scenarios
```typescript
const scenarios = [
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
];
```

---

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage.vue` | Landing page |
| `/calculator` | `CalculatorPage.vue` | Wizard + results |
| `/guide` | `GuidePage.vue` | Full methodology guide |
| `/scenarios` | `ScenariosPage.vue` | Pre-loaded scenarios |
| `/about` | `AboutPage.vue` | About the estimator |

---

## Styling

- **Framework:** Tailwind CSS 4
- **Color scheme:** Slate/gray neutrals with indigo/blue accent
- **Typography:** System font stack (Inter if available)
- **Spacing:** Consistent 4px grid system
- **Responsive:** Mobile-first, breakpoints at sm (640px), md (768px), lg (1024px)
- **Components:** Custom-styled, no external UI library dependency

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
├── tailwind.config.js
└── README.md
```

---

## Key Behaviors

### Wizard Navigation
- Next button disabled until current step has valid input
- Previous button always available (except step 1)
- Can jump to any completed step via progress bar
- Results shown after step 7

### Calculator Logic
- Real-time computation as user progresses
- Results page shows: Fixed (24) + Variable (calculated) + Optional (selected) = Base, then Base × 1.20 = Final
- Timeline calculated as Final ÷ 40 (1 dev) and Final ÷ 80 (2 devs)
- Rounded to nearest whole number for display

### Scenario Loading
- Clicking "Use This Scenario" on a scenario card:
  1. Sets all wizard store values to scenario parameters
  2. Sets optional features if any
  3. Marks wizard as complete
  4. Navigates to `/calculator` showing results

### State Persistence
- Wizard state persisted to localStorage
- On app load, check localStorage for incomplete wizard
- If found, offer to resume or start over

---

## Accessibility

- All inputs have associated labels
- Keyboard navigation for wizard (Tab, Enter, Arrow keys)
- Focus management between steps
- ARIA live regions for results announcement
- Sufficient color contrast (WCAG AA)

---

## Performance

- Lazy load guide and about pages
- Pinia stores for efficient state management
- Minimal external dependencies
- No heavy UI frameworks

---

## Dependencies

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.3.0",
    "pinia": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.4.0",
    "vite": "^5.2.0",
    "vue-tsc": "^2.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## Future Enhancements (Out of Scope)

- Export to PDF
- Save/load multiple estimates
- Team collaboration/sharing
- Custom hourly rate input
- More granular optional feature selection
- Integration with project management tools

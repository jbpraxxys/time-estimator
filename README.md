# PRAXXYS Frontend Time Estimator

A **Vue 3** single-page application for estimating frontend development time for CMS-based projects. Built on a proven methodology developed from analyzing 50+ real frontend projects.

**Live demo:** [time-estimator.praxxys.dev](https://time-estimator.praxxys.dev) (if deployed)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [The Formula](#the-formula)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Scenarios](#scenarios)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The Frontend Time Estimator is a white-label/internal tool by **PRAXXYS** that helps project managers, developers, and clients generate realistic frontend development estimates. It uses a parameterized model that breaks down a project into component types (P1–P5) and applies historical hourly rates.

The tool implements a **7-step wizard** where users specify the数量和 of each component type, select optional features, and instantly receive:

- Total estimated hours (with and without a 20% buffer)
- Timeline projections for 1 and 2 developers
- A detailed breakdown by category

---

## Features

### 7-Step Estimation Wizard

| Step         | Category                                            | Rate        |
| ------------ | --------------------------------------------------- | ----------- |
| **P1**       | Content Listing Pages (list + detail pairs)         | 8 hrs each  |
| **P2**       | Single-Page Modules (Team, Gallery, etc.)           | 4 hrs each  |
| **P3a**      | Simple Sections (Desc+Image, Logo Grid, etc.)       | 1 hr each   |
| **P3b**      | Standard Sections (Banner, Card Grid, FAQ, etc.)    | 2 hrs each  |
| **P3c**      | Complex Sections (Sliders, Contact Directory, etc.) | 4 hrs each  |
| **P4a**      | Standalone Home Pages                               | 10 hrs each |
| **P4b**      | Standalone Utility Pages (Contact, Legal, etc.)     | 3 hrs each  |
| **P5**       | Static CMS Pages                                    | 1 hr each   |
| **Optional** | Extra features (see below)                          | Variable    |

### 12 Optional Features

Dark Mode, i18n, Advanced Search, Interactive Map, Accessibility Pass, Cookie Consent, PWA, Custom Animations, Print Stylesheets, Social Feed, Live Chat, PDF Generation.

### Pre-Loaded Scenarios

Six ready-to-use project templates with pre-filled parameters:

| Scenario          | Est. Hours | Timeline (1 dev) |
| ----------------- | ---------- | ---------------- |
| Landing Page      | ~55 hrs    | ~1.4 weeks       |
| Small Business    | ~62 hrs    | ~1.5 weeks       |
| Bank Corporate    | ~83 hrs    | ~2 weeks         |
| E-commerce (CMS)  | ~68 hrs    | ~1.7 weeks       |
| School Website    | ~124 hrs   | ~3.1 weeks       |
| Government Portal | ~128 hrs   | ~3.2 weeks       |

### Additional Features

- **Real-time calculation** — estimates update instantly as you adjust parameters
- **Detailed breakdown** — see hours per category and the full formula
- **Timeline visualization** — progress bars for 1 and 2 developer timelines
- **Copy to clipboard** — one-click copy of the full estimate
- **Wizard state persistence** — your progress is saved to localStorage automatically
- **Dark mode** — with system preference detection and manual toggle
- **Responsive design** — works on mobile and desktop
- **Estimation methodology guide** — in-app documentation of the full formula
- **CMS feature tiers** — Starter, Business, and Enterprise package references

---

## The Formula

```
BASE     = FIXED 24 + (P1 × 8) + (P2 × 4) + (P3a × 1) + (P3b × 2) + (P3c × 4) + (P4a × 10) + (P4b × 3) + (P5 × 1) + OPTIONAL
FINAL    = BASE × 1.20
TIMELINE = FINAL ÷ 40 hrs/week (per developer)
```

- **FIXED 24** — Project setup overhead (project management, QA, deployment, etc.)
- **1.20 (20%)** — Buffer for revisions, edge cases, and unknowns
- **40 hrs/week** — Standard work week per developer

---

## Tech Stack

| Category             | Technology                                                                      |
| -------------------- | ------------------------------------------------------------------------------- |
| **Framework**        | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)                 |
| **Language**         | [TypeScript](https://www.typescriptlang.org/) (strict)                          |
| **Build Tool**       | [Vite 5](https://vitejs.dev/)                                                   |
| **Routing**          | [Vue Router 4](https://router.vuejs.org/)                                       |
| **State Management** | [Pinia 2](https://pinia.vuejs.org/)                                             |
| **Styling**          | [Tailwind CSS 3](https://tailwindcss.com/)                                      |
| **Type Checking**    | [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/vue-tsc) |

No external UI library — all components are custom-built.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (ships with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/praxxys/frontend-time-estimator.git
cd frontend-time-estimator

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the Vite dev server — typically at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Type-checks with `vue-tsc` and bundles with `vite`. Output lands in `dist/`.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` directory locally for verification.

---

## Project Structure

```
frontend-time-estimator/
├── index.html                        # SPA entry point
├── package.json
├── vite.config.ts                    # Vite configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.js                # Tailwind with custom primary palette
├── postcss.config.js                 # PostCSS configuration
│
├── public/
│   ├── favicon.ico
│   └── images/
│       └── praxxys-logo.webp
│
├── src/
│   ├── main.ts                       # App bootstrap (Vue + Pinia + Router)
│   ├── App.vue                       # Root component
│   │
│   ├── assets/
│   │   └── main.css                  # Tailwind directives + custom styles
│   │
│   ├── types/
│   │   └── index.ts                  # All TypeScript interfaces
│   │
│   ├── data/
│   │   ├── scenarios.ts              # 6 pre-loaded project scenarios
│   │   └── optionalFeatures.ts       # 12 optional feature definitions
│   │
│   ├── composables/
│   │   ├── useCalculator.ts          # Core calculation logic
│   │   └── useDarkMode.ts            # Dark mode with localStorage
│   │
│   ├── stores/
│   │   ├── wizardStore.ts            # Wizard state (Pinia + localStorage)
│   │   └── calculatorStore.ts        # Computed estimate results
│   │
│   ├── router/
│   │   └── index.ts                  # 6 lazy-loaded routes
│   │
│   ├── components/
│   │   ├── layout/                   # AppLayout, AppNav, AppFooter
│   │   ├── wizard/                   # WizardContainer, WizardProgress,
│   │   │                             # WizardStep, WizardResults
│   │   ├── calculator/               # NumberInput, CheckboxGroup,
│   │   │                             # EstimateSummary, EstimateBreakdown,
│   │   │                             # TimelineBar
│   │   └── shared/                   # ScenarioCard, SectionAccordion,
│   │                                 # RateTable
│   │
│   └── views/                        # 6 page components
│       ├── HomePage.vue
│       ├── CalculatorPage.vue
│       ├── GuidePage.vue
│       ├── ScenariosPage.vue
│       ├── FeatureTiersPage.vue
│       └── AboutPage.vue
│
└── docs/
    ├── frontend-estimation-guide.md  # Detailed line-item estimation guide
    ├── estimation-scenarios.md       # Scenario calibration documentation
    ├── feature-tiers.md              # CMS package tier documentation
    └── superpowers/                  # Implementation plans and specs
```

---

## Usage Guide

1. **Open the app** — Start at the home page for an overview.
2. **Start the wizard** — Navigate to **Calculator** or pick a pre-loaded **Scenario**.
3. **Enter parameters** — Walk through the 7 steps, specifying counts for each component type and selecting optional features.
4. **Review results** — See your estimate with detailed breakdown and timeline projections.
5. **Refine** — Adjust any parameter and the estimate updates in real time.
6. **Copy or share** — Use the clipboard button to copy the estimate summary.

### Pages

| Route         | Page          | Purpose                             |
| ------------- | ------------- | ----------------------------------- |
| `/`           | Home          | Landing page with features and CTAs |
| `/calculator` | Calculator    | The 7-step estimation wizard        |
| `/guide`      | Guide         | Full estimation methodology         |
| `/scenarios`  | Scenarios     | 6 pre-loaded project templates      |
| `/tiers`      | Feature Tiers | CMS package tier reference          |
| `/about`      | About         | About the tool                      |

---

## Scenarios

Six pre-calibrated scenarios provide instant starting points. Each scenario pre-fills the wizard and shows results immediately. Scenarios range from a simple Landing Page (~55 hours) to a complex Government Portal (~128 hours). Full scenario details and calculations are documented in [`docs/estimation-scenarios.md`](docs/estimation-scenarios.md).

---

## Configuration

### Environment Variables

None required. The app is fully self-contained with no backend or API dependencies.

### localStorage Keys

| Key                     | Purpose                               |
| ----------------------- | ------------------------------------- |
| `time-estimator-wizard` | Persists wizard state across sessions |
| `dark-mode`             | Remembers dark mode preference        |

### Tailwind Customization

The primary color palette (`#FFD200` gold/yellow) is configured in `tailwind.config.js`. Customize it there for white-labeling.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

### Development Notes

- The project uses **Vue 3 Composition API** with `<script setup>` throughout.
- All TypeScript types are in [`src/types/index.ts`](src/types/index.ts).
- State management lives in Pinia stores under [`src/stores/`](src/stores/).
- The core estimation logic is isolated in [`src/composables/useCalculator.ts`](src/composables/useCalculator.ts).
- There are currently **no tests** — contributions adding test coverage are especially welcome.

---

## License

Proprietary — PRAXXYS. All rights reserved.

---

<p align="center">Built by <a href="https://praxxys.dev">PRAXXYS</a></p>

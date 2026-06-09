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

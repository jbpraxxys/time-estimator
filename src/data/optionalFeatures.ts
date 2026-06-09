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

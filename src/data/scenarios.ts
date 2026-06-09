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

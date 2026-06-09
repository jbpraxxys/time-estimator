# Frontend Development Estimation Guide

> **Detailed line-item breakdown for estimating any frontend project using the CMS package.**
>
> **How it works:** Add up the **Fixed Setup** items (same for every project), then count your **project parameters** (P1–P5) and multiply by the per-unit rates. Apply the buffer for your final estimate.

---

## The Formula

```
BASE     = FIXED + (P1×8) + (P2×4) + (P3a×1) + (P3b×2) + (P3c×4) + (P4a×10) + (P4b×3) + (P5×1)
FINAL    = (BASE + OPTIONAL) × 1.20
TIMELINE = FINAL ÷ 40 hrs/week (1 developer)
```

---

## Section A — Project Setup & Architecture

_Always included, regardless of project size._

|  #  | Deliverable            | Description                                                                |   Hours   |
| :-: | ---------------------- | -------------------------------------------------------------------------- | :-------: |
| A1  | Project scaffolding    | Init framework (Nuxt/Next.js/Remix), build tooling, linting, env variables |    0.5    |
| A2  | API client setup       | Axios/fetch wrapper, base URL, error interceptors                          |    0.5    |
| A3  | API type definitions   | TypeScript interfaces for all CMS API responses                            |     1     |
| A4  | Layout shell           | Header (logo, nav, mobile menu), footer, page wrapper                      |     1     |
| A5  | Routing setup          | Dynamic slug routes, 404 catch-all                                         |    0.5    |
| A6  | SEO foundation         | Meta tags composable, OG tags, canonical URLs, sitemap, robots.txt         |    0.5    |
| A7  | Performance foundation | Image optimization, lazy loading, font strategy, bundle analysis           |    0.5    |
| A8  | Analytics integration  | Google Analytics / Plausible / custom snippet                              |    0.5    |
|     | **Subtotal**           |                                                                            | **5 hrs** |

---

## Section B — Shared / Global Components

_Reusable components used across all pages._

|  #  | Deliverable          | Description                                                       |   Hours   |
| :-: | -------------------- | ----------------------------------------------------------------- | :-------: |
| B1  | Navigation menu      | Desktop dropdown + mobile hamburger, active state                 |     1     |
| B2  | Breadcrumbs          | Dynamic breadcrumb driven by page hierarchy                       |    0.5    |
| B3  | Pagination           | Page numbers, prev/next, ellipsis                                 |    0.5    |
| B4  | Search bar           | Input with suggestions, search results page                       |     1     |
| B5  | Card component       | Reusable — renders title, description, image, link                |    0.5    |
| B6  | Button system        | Variants (primary, secondary, outline), sizes, loading state      |    0.5    |
| B7  | Form components      | Input, textarea, select, checkbox, file upload, validation states |     1     |
| B8  | Modal / dialog       | Confirmations, image lightbox, video embed                        |    0.5    |
| B9  | Toast notifications  | Success/error/warning/info system                                 |    0.5    |
| B10 | Skeleton loaders     | Loading states for cards and content                              |    0.5    |
| B11 | Error / empty states | 404, 500, empty state, error boundary                             |    0.5    |
| B12 | Animation utilities  | Scroll-triggered fade/slide (Intersection Observer)               |    0.5    |
|     | **Subtotal**         |                                                                   | **7 hrs** |

---

## Section C — QA & Polish

|  #  | Deliverable              | Description                                     |   Hours   |
| :-: | ------------------------ | ----------------------------------------------- | :-------: |
| C1  | Responsive testing       | Test at mobile, tablet, desktop breakpoints     |     1     |
| C2  | Cross-browser testing    | Chrome, Firefox, Safari, Edge                   |     1     |
| C3  | Performance optimization | Lighthouse, Core Web Vitals, bundle size        |    0.5    |
| C4  | Content population       | Add content via admin, verify all pages         |     1     |
| C5  | SEO verification         | Meta tags, structured data, sitemap, OG preview |    0.5    |
| C6  | Bug fixing round         | Address issues found during testing             |     1     |
|     | **Subtotal**             |                                                 | **5 hrs** |

---

## Section D — Deployment & Handover

|  #  | Deliverable         | Description                                |   Hours   |
| :-: | ------------------- | ------------------------------------------ | :-------: |
| D1  | CI/CD pipeline      | Build, test, deploy (Vercel, Netlify, AWS) |     1     |
| D2  | Environment config  | Staging + production, secrets              |    0.5    |
| D3  | DNS / SSL setup     | Domain, certificate, CDN                   |    0.5    |
| D4  | Documentation       | README, setup guide, architecture overview |    0.5    |
| D5  | Handover / training | Client walkthrough, knowledge transfer     |    0.5    |
|     | **Subtotal**        |                                            | **3 hrs** |

---

## Section E — Dynamic Pages Integration

_One-time integration for the section-based page builder._

|  #  | Deliverable            | Description                                                            |   Hours   |
| :-: | ---------------------- | ---------------------------------------------------------------------- | :-------: |
| E1  | Dynamic Pages API      | Fetch by slug (nested paths), children, site tree, search, breadcrumbs |     1     |
| E2  | Dynamic route resolver | Maps URL slugs to correct page                                         |     1     |
| E3  | Section renderer       | Iterates sections, maps type → component, renders in order             |     1     |
| E4  | Global search API      | Unified search across all content types                                |     1     |
|     | **Subtotal**           |                                                                        | **4 hrs** |

---

## Fixed Setup Total

| Section                   |   Hours    |
| :------------------------ | :--------: |
| A — Project Setup         |     5      |
| B — Shared Components     |     7      |
| C — QA & Polish           |     5      |
| D — Deployment & Handover |     3      |
| E — Dynamic Pages         |     4      |
| **Fixed Total**           | **24 hrs** |

---

## Section F — Content Listing Pages

_For each content type that needs both a **list page** and a **detail page** (e.g., Articles, Properties, Careers)._

**Rate: 8 hrs per pair (P1)**

| Deliverable                                                                                 |   Hours   |
| ------------------------------------------------------------------------------------------- | :-------: |
| List page — Grid/gallery, filters, pagination, loading/empty/error states, responsive       |     4     |
| Detail page — Full content view, rich text rendering, related items, share, SEO, responsive |     3     |
| API integration — Fetch list (paginated, filtered), fetch by slug, TypeScript types         |     1     |
| **Per content pair**                                                                        | **8 hrs** |

> **Total F = 8 × P1**

---

## Section G — Single-Page Content Modules

_For each content type that only needs a **single page** with no detail view (e.g., Team directory, Awards, Videos gallery)._

**Rate: 4 hrs per module (P2)**

| Deliverable                                                                                |   Hours   |
| ------------------------------------------------------------------------------------------ | :-------: |
| List/gallery page — Grid display, optional filters, loading/empty/error states, responsive |     3     |
| API integration — Fetch list, TypeScript types                                             |     1     |
| **Per single module**                                                                      | **4 hrs** |

> **Total G = 4 × P2**

---

## Section H — Dynamic Page Section Components

_For each unique section type used in the Dynamic Pages builder._

|        Type        | Examples                                                                                                                                               |   Rate    |
| :----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------: |
|  **Simple (P3a)**  | Description + Image, Logo Grid, Values Frame, Contact Info, Generic Frame                                                                              | **1 hr**  |
| **Standard (P3b)** | Full Banner, Card Grid, FAQ Accordion, People Cards, Resources List, Article List, Career List, Property List, Award List, Card Redirection, Card Logo | **2 hrs** |
| **Complex (P3c)**  | Featured Articles Slider, Redirection Slider, Contact Directory, Sub-Pages Banner, Description Blog                                                    | **4 hrs** |

> **Total H = (1 × P3a) + (2 × P3b) + (4 × P3c)**

---

## Section I — Standalone Pages

| Page                                                                              |    Rate    |
| --------------------------------------------------------------------------------- | :--------: |
| **P4a — Home page** (hero, featured sections, CTA, multiple content blocks)       | **10 hrs** |
| **P4b — Utility page** (contact form, search results, sitemap)                    | **3 hrs**  |
| **P5 — Static CMS page** (about, privacy, terms — fetch from API, render content) |  **1 hr**  |

> **Total I = (10 × P4a) + (3 × P4b) + (1 × P5)**

---

## Section J — Optional Features

|  #  | Feature                 | Hours | Notes                                                |
| :-: | ----------------------- | :---: | ---------------------------------------------------- |
| J1  | Dark mode               |   4   | Theme toggle + persisted preference + dark styles    |
| J2  | Multi-language / i18n   |  16   | Locale switching, translated routes, RTL support     |
| J3  | Advanced Search         |  12   | Meilisearch/Algolia, faceted filters, typo tolerance |
| J4  | Interactive map         |   6   | Google Maps / Mapbox for locations                   |
| J5  | Accessibility pass      |  12   | WCAG 2.1 AA (keyboard nav, screen reader, contrast)  |
| J6  | Cookie consent banner   |   1   | GDPR-compliant                                       |
| J7  | PWA support             |   6   | Service worker, offline page, manifest               |
| J8  | Custom animations       |   6   | Page transitions, parallax, micro-interactions       |
| J9  | Print stylesheets       |   1   | Print-optimized CSS                                  |
| J10 | Social feed integration |   1   | Embed Twitter/Facebook/Instagram                     |
| J11 | Live chat / chatbot     |   1   | Intercom, Crisp widget                               |
| J12 | PDF generation          |   3   | Client-side or server-side PDF                       |

---

## Quick Reference — All Rates

|   Code    | Item                                       |    Rate    |
| :-------: | ------------------------------------------ | :--------: |
| **Fixed** | Sections A–E                               | **24 hrs** |
|    P1     | Content listing pair (list + detail + API) |   ×8 hrs   |
|    P2     | Single-page module (list + API)            |   ×4 hrs   |
|    P3a    | Simple section component                   |   ×1 hr    |
|    P3b    | Standard section component                 |   ×2 hrs   |
|    P3c    | Complex section component                  |   ×4 hrs   |
|    P4a    | Home page                                  |  ×10 hrs   |
|    P4b    | Utility page                               |   ×3 hrs   |
|    P5     | Static CMS page                            |   ×1 hr    |

---

## Example — Bank Corporate Website

### Parameters

| Param | What                                            | Count |
| :---- | ----------------------------------------------- | :---: |
| P1    | Content pairs (Articles, Careers)               |   2   |
| P2    | Single modules (Team)                           |   1   |
| P3a   | Simple sections (Desc+Image, Logo Grid, Values) |   3   |
| P3b   | Standard sections (Banner, Card Grid, FAQ)      |   3   |
| P3c   | Complex sections                                |   0   |
| P4a   | Home page                                       |   1   |
| P4b   | Utility pages (Contact)                         |   1   |
| P5    | Static CMS pages (About, Privacy, Terms)        |   3   |

### Calculation

| Section            |      Formula       |    Hours     |
| :----------------- | :----------------: | :----------: |
| A–E                |       Fixed        |      24      |
| F — Content pairs  |       8 × 2        |      16      |
| G — Single modules |       4 × 1        |      4       |
| H — Sections       | (1×3)+(2×3)+(4×0)  |      9       |
| I — Pages          | (10×1)+(3×1)+(1×3) |      16      |
| **Base Total**     |                    |    **69**    |
| ×1.20 buffer       |                    |      83      |
| **Final Estimate** |                    | **~83 hrs**  |
| **1 developer**    |      83 ÷ 40       | **~2 weeks** |
| **2 developers**   |      83 ÷ 80       | **~1 week**  |

---

## Scenario Reference

| Project Type          | P1  | P2  | P3a | P3b | P3c | P4a | P4b | P5  | Base |    Final    | Timeline |
| :-------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: | :---------: | :------: |
| Landing Page          |  0  |  0  |  2  |  5  |  0  |  1  |  0  |  0  |  46  | **55 hrs**  |  1.4 wk  |
| Small Business        |  1  |  0  |  1  |  2  |  0  |  1  |  1  |  2  |  52  | **62 hrs**  |  1.5 wk  |
| Bank Corporate        |  2  |  1  |  3  |  3  |  0  |  1  |  1  |  3  |  69  | **83 hrs**  |   2 wk   |
| E-commerce (CMS only) |  1  |  0  |  1  |  4  |  0  |  1  |  1  |  3  |  57  | **68 hrs**  |  1.7 wk  |
| School Website        |  3  |  3  |  4  |  5  |  2  |  1  |  2  |  5  | 103  | **124 hrs** |  3.1 wk  |
| Government Portal     |  3  |  3  |  4  |  5  |  1  |  1  |  3  | 10  | 107  | **128 hrs** |  3.2 wk  |

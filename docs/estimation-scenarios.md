# Estimation Scenarios — Calibration Check

> **Formula:** `FINAL = (FIXED 24 + VARIABLE) × 1.20`
>
> **Rates:** P1=8, P2=4, P3a=1, P3b=2, P3c=4, P4a=10, P4b=3, P5=1

---

## Scenario 1 — Small Business Website

**A restaurant or salon.** Home, About, Menu/Services, Contact, Blog, Privacy.

| Param | What                             | Count |
| :---- | -------------------------------- | :---: |
| P1    | Content listing pairs (Articles) |   1   |
| P2    | Single-page modules              |   0   |
| P3a   | Simple (Desc+Image)              |   1   |
| P3b   | Standard (Banner, Card Grid)     |   2   |
| P3c   | Complex                          |   0   |
| P4a   | Home                             |   1   |
| P4b   | Utility (Contact)                |   1   |
| P5    | Static (About, Privacy)          |   2   |

| Section            |      Formula       |     Hours      |
| :----------------- | :----------------: | :------------: |
| Fixed              |         —          |       24       |
| B1 — Content pairs |       8 × 1        |       8        |
| C — Sections       | (1×1)+(2×2)+(4×0)  |       5        |
| D — Pages          | (10×1)+(3×1)+(1×2) |       15       |
| **Base**           |                    |     **52**     |
| **Final (×1.20)**  |                    |  **~62 hrs**   |
| **1 dev**          |                    | **~1.5 weeks** |

---

## Scenario 2 — Startup Landing Page

**Single-page marketing site.** Hero, Features, Testimonials, Pricing, FAQ, Contact.

| Param | What                                                  | Count |
| :---- | ----------------------------------------------------- | :---: |
| P1    | Content pairs                                         |   0   |
| P2    | Single modules                                        |   0   |
| P3a   | Simple (Features, Pricing Cards)                      |   2   |
| P3b   | Standard (Banner, Testimonials, FAQ, Contact, Footer) |   5   |
| P3c   | Complex                                               |   0   |
| P4a   | Home (the whole site)                                 |   1   |
| P4b   | Utility                                               |   0   |
| P5    | Static                                                |   0   |

| Section           |      Formula      |     Hours      |
| :---------------- | :---------------: | :------------: |
| Fixed             |         —         |       24       |
| C — Sections      | (1×2)+(2×5)+(4×0) |       12       |
| D — Pages         |      (10×1)       |       10       |
| **Base**          |                   |     **46**     |
| **Final (×1.20)** |                   |  **~55 hrs**   |
| **1 dev**         |                   | **~1.4 weeks** |

---

## Scenario 3 — Bank Corporate Website

**The sample.** Home, About, Articles, Careers, Team, Contact, Privacy, Terms + Dynamic Pages.

| Param | What                                   | Count |
| :---- | -------------------------------------- | :---: |
| P1    | Content pairs (Articles, Careers)      |   2   |
| P2    | Single modules (Team)                  |   1   |
| P3a   | Simple (Desc+Image, Logo Grid, Values) |   3   |
| P3b   | Standard (Banner, Card Grid, FAQ)      |   3   |
| P3c   | Complex                                |   0   |
| P4a   | Home                                   |   1   |
| P4b   | Utility (Contact)                      |   1   |
| P5    | Static (About, Privacy, Terms)         |   3   |

| Section             |      Formula       |    Hours     |
| :------------------ | :----------------: | :----------: |
| Fixed               |         —          |      24      |
| B1 — Content pairs  |       8 × 2        |      16      |
| B2 — Single modules |       4 × 1        |      4       |
| C — Sections        | (1×3)+(2×3)+(4×0)  |      9       |
| D — Pages           | (10×1)+(3×1)+(1×3) |      16      |
| **Base**            |                    |    **69**    |
| **Final (×1.20)**   |                    | **~83 hrs**  |
| **1 dev**           |                    | **~2 weeks** |

---

## Scenario 4 — E-commerce Website

**CMS handles content + blog. E-commerce features are custom add-ons.**

| Param | What                                        | Count |
| :---- | ------------------------------------------- | :---: |
| P1    | Content pairs (Articles)                    |   1   |
| P2    | Single modules                              |   0   |
| P3a   | Simple                                      |   1   |
| P3b   | Standard (Banner, Cards, FAQ, Testimonials) |   4   |
| P3c   | Complex                                     |   0   |
| P4a   | Home                                        |   1   |
| P4b   | Utility (Contact)                           |   1   |
| P5    | Static (About, Privacy, Terms)              |   3   |

| Section            |      Formula       |    Hours    |
| :----------------- | :----------------: | :---------: |
| Fixed              |         —          |     24      |
| B1 — Content pairs |       8 × 1        |      8      |
| C — Sections       | (1×1)+(2×4)+(4×0)  |      9      |
| D — Pages          | (10×1)+(3×1)+(1×3) |     16      |
| **CMS Base**       |                    |   **57**    |
| **CMS Final**      |                    | **~68 hrs** |

### Custom E-commerce Features (Add-on)

| Feature                                             | Hours  |
| --------------------------------------------------- | :----: |
| Product catalog (list, detail, categories, filters) |   16   |
| Shopping cart (add/remove, quantities, persist)     |   12   |
| Checkout (address, shipping, payment gateway)       |   24   |
| User accounts (register, login, order history)      |   16   |
| Order management (admin view, status updates)       |   12   |
| **Subtotal**                                        | **80** |

|                   |     Hours      |
| :---------------- | :------------: |
| CMS portion       |       68       |
| E-commerce add-on |       80       |
| **Total**         |  **148 hrs**   |
| **1 dev**         | **~3.7 weeks** |
| **2 devs**        | **~1.9 weeks** |

---

## Scenario 5 — School / University Website

**News, Events, Courses, Faculty, Gallery, Downloads + lots of pages.**

| Param | What                                                        | Count |
| :---- | ----------------------------------------------------------- | :---: |
| P1    | Content pairs (News, Events, Courses)                       |   3   |
| P2    | Single modules (Faculty, Gallery, Downloads)                |   3   |
| P3a   | Simple (Desc+Image, Logo Grid, Values, Contact Info)        |   4   |
| P3b   | Standard (Banner, Card Grid, FAQ, People Cards, Footer)     |   5   |
| P3c   | Complex (News Slider, Event Calendar)                       |   2   |
| P4a   | Home                                                        |   1   |
| P4b   | Utility (Contact, Search)                                   |   2   |
| P5    | Static (About, Admissions, Academics, Departments, Privacy) |   5   |

| Section             |      Formula       |     Hours      |
| :------------------ | :----------------: | :------------: |
| Fixed               |         —          |       24       |
| B1 — Content pairs  |       8 × 3        |       24       |
| B2 — Single modules |       4 × 3        |       12       |
| C — Sections        | (1×4)+(2×5)+(4×2)  |       22       |
| D — Pages           | (10×1)+(3×2)+(1×5) |       21       |
| **Base**            |                    |    **103**     |
| **Final (×1.20)**   |                    |  **~124 hrs**  |
| **1 dev**           |                    | **~3.1 weeks** |
| **2 devs**          |                    | **~1.6 weeks** |

---

## Scenario 6 — Government Portal

**City/municipality website. Departments, publications, announcements, transparency.**

| Param | What                                                                         | Count |
| :---- | ---------------------------------------------------------------------------- | :---: |
| P1    | Content pairs (News, Publications, Announcements)                            |   3   |
| P2    | Single modules (Departments, Downloads, Gallery)                             |   3   |
| P3a   | Simple (Desc+Image, Logo Grid, Values, Resources)                            |   4   |
| P3b   | Standard (Banner, Card Grid, FAQ, Contact Directory, Footer)                 |   5   |
| P3c   | Complex (News Slider)                                                        |   1   |
| P4a   | Home                                                                         |   1   |
| P4b   | Utility (Contact, Search, Sitemap)                                           |   3   |
| P5    | Static (About, Mayor's Office, ×5 Departments, Transparency, Privacy, Terms) |  10   |

| Section             |       Formula       |     Hours      |
| :------------------ | :-----------------: | :------------: |
| Fixed               |          —          |       24       |
| B1 — Content pairs  |        8 × 3        |       24       |
| B2 — Single modules |        4 × 3        |       12       |
| C — Sections        |  (1×4)+(2×5)+(4×1)  |       18       |
| D — Pages           | (10×1)+(3×3)+(1×10) |       29       |
| **Base**            |                     |    **107**     |
| **Final (×1.20)**   |                     |  **~128 hrs**  |
| **1 dev**           |                     | **~3.2 weeks** |
| **2 devs**          |                     | **~1.6 weeks** |

---

## Summary

| Scenario               | Base |    Final    | 1 Dev  | 2 Devs |
| ---------------------- | :--: | :---------: | :----: | :----: |
| 🟢 Landing Page        |  46  | **55 hrs**  | 1.4 wk | 0.7 wk |
| 🟢 Small Business      |  52  | **62 hrs**  | 1.5 wk | 0.8 wk |
| 🔵 Bank Corporate      |  69  | **83 hrs**  |  2 wk  |  1 wk  |
| 🔵 E-commerce (CMS)    |  57  | **68 hrs**  | 1.7 wk | 0.9 wk |
| 🔵 + E-commerce custom | +80  | **148 hrs** | 3.7 wk | 1.9 wk |
| ⚫ School Website      | 103  | **124 hrs** | 3.1 wk | 1.6 wk |
| ⚫ Government Portal   | 107  | **128 hrs** | 3.2 wk | 1.6 wk |

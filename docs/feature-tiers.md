# Feature Tier Documentation — CMS Package

> **Purpose:** This document defines the three-tier feature structure for the white-label CMS backend package. It serves as the pricing and packaging reference for selling this backend as a reusable white-label CMS solution.
>
> **Last Updated:** 2026-06-09
> **Status:** Based on codebase analysis v1.0

---

## Tier Overview

| Tier       | Name           | Target Market                                                  | Positioning                                               |
| ---------- | -------------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| **Tier 1** | **Starter**    | Small businesses, startups, personal websites                  | "Get online fast with essential content management"       |
| **Tier 2** | **Business**   | Growing organizations, mid-market companies                    | "Scale your content operations with team collaboration"   |
| **Tier 3** | **Enterprise** | Large enterprises, government agencies, financial institutions | "Enterprise-grade security, compliance, and full control" |

---

## Feature Matrix

### 1. AUTHENTICATION & SECURITY

| Feature                                                               | Starter | Business | Enterprise |
| --------------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Admin Login** (email + password)                                    |   ✅    |    ✅    |     ✅     |
| **Password Reset** (forgot/reset flow)                                |   ✅    |    ✅    |     ✅     |
| **Session Management** (view/force logout sessions)                   |    —    |    ✅    |     ✅     |
| **Login Rate Limiting** (1-hour lockout after failed attempts)        |   ✅    |    ✅    |     ✅     |
| **reCAPTCHA v3** (login + public forms)                               |   ✅    |    ✅    |     ✅     |
| **Two-Factor Authentication** (TOTP via Google Authenticator)         |    —    |    ✅    |     ✅     |
| **Email OTP 2FA** (6-digit code via email)                            |    —    |    ✅    |     ✅     |
| **Security Headers** (CSP, HSTS, Referrer-Policy, Permissions-Policy) |    —    |    —     |     ✅     |
| **Password Expiry Policy** (90-day forced rotation)                   |    —    |    —     |     ✅     |
| **Admin Password Expiration Command** (daily cron check)              |    —    |    —     |     ✅     |
| **IP-based Access Restrictions**                                      |    —    |    —     |     ✅     |
| **SSO / SAML Integration**                                            |    —    |    —     |     ⏳     |

### 2. ADMIN ACCOUNT MANAGEMENT

| Feature                                                   | Starter | Business | Enterprise |
| --------------------------------------------------------- | :-----: | :------: | :--------: |
| **Admin CRUD** (create, edit, list, soft-delete, restore) |   ✅    |    ✅    |     ✅     |
| **Admin Profile Management** (name, email, photo, mobile) |   ✅    |    ✅    |     ✅     |
| **Admin Password Change** (from profile)                  |   ✅    |    ✅    |     ✅     |
| **Admin Photo Upload** (profile picture)                  |   ✅    |    ✅    |     ✅     |
| **Admin Export/Import** (Excel)                           |    —    |    ✅    |     ✅     |
| **Send Reset Password Link** (admin-initiated)            |    —    |    ✅    |     ✅     |
| **Role-Based Access Control (RBAC)**                      |    —    |    ✅    |     ✅     |
| — Role CRUD (list, show)                                  |    —    |    ✅    |     ✅     |
| — Role-to-Permission Assignment                           |    —    |    ✅    |     ✅     |
| — Predefined Roles (Super Admin, Editor, Approver)        |    —    |    ✅    |     ✅     |
| **Granular Permissions System** (200+ permissions)        |    —    |    —     |     ✅     |
| — Per-module permission toggles                           |    —    |    —     |     ✅     |
| — Per-admin additional permissions                        |    —    |    —     |     ✅     |
| — Permission revocation (model-level)                     |    —    |    —     |     ✅     |
| — Permission caching                                      |    —    |    —     |     ✅     |
| **Admin Groups** (content scoping groups)                 |    —    |    ✅    |     ✅     |
| — Admin Group CRUD                                        |    —    |    ✅    |     ✅     |
| — Content scoped by admin group membership                |    —    |    ✅    |     ✅     |
| **Activity Logging** (Spatie Activity Log)                |    —    |    ✅    |     ✅     |
| — Configurable retention (365 days)                       |    —    |    ✅    |     ✅     |
| — Activity Log viewer in admin UI                         |    —    |    ✅    |     ✅     |
| — Per-model activity display names                        |    —    |    —     |     ✅     |

### 3. CONTENT MANAGEMENT — CORE

| Feature                                                        | Starter | Business | Enterprise |
| -------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Content Types Included**                                     |         |          |            |
| — Articles / News                                              |   ✅    |    ✅    |     ✅     |
| — Static CMS Pages (Home, About, Privacy, Terms, Contact)      |   ✅    |    ✅    |     ✅     |
| — Properties / Listings                                        |    —    |    ✅    |     ✅     |
| — Careers / Job Listings                                       |    —    |    ✅    |     ✅     |
| — Awards / Recognitions                                        |    —    |    ✅    |     ✅     |
| — Organizations / Team Directory                               |    —    |    ✅    |     ✅     |
| — Videos / Media Gallery                                       |    —    |    ✅    |     ✅     |
| — Ratings / Scores                                             |    —    |    ✅    |     ✅     |
| — Financial Statements                                         |    —    |    ✅    |     ✅     |
| — Sustainability Documents                                     |    —    |    ✅    |     ✅     |
| — Annual Reports                                               |    —    |    ✅    |     ✅     |
| **Content CRUD** (create, edit, list, soft-delete, restore)    |   ✅    |    ✅    |     ✅     |
| **Content Status Workflow**                                    |         |          |            |
| — Draft → Published (simple 2-state)                           |   ✅    |    ✅    |     ✅     |
| — Draft → Pending → Published/Rejected (3-state approval)      |    —    |    ✅    |     ✅     |
| — Scheduled Publishing (future date/time)                      |    —    |    ✅    |     ✅     |
| — Archived state                                               |    —    |    ✅    |     ✅     |
| **Rich Text Editing** (CKEditor 5)                             |   ✅    |    ✅    |     ✅     |
| **SEO Metadata** (meta title, description, keywords, OG image) |   ✅    |    ✅    |     ✅     |
| **Content Categories / Taxonomies**                            |         |          |            |
| — Article Categories                                           |   ✅    |    ✅    |     ✅     |
| — Video Categories                                             |    —    |    ✅    |     ✅     |
| — Organization Types                                           |    —    |    ✅    |     ✅     |
| — Sectors, Bond Types, Document Types                          |    —    |    ✅    |     ✅     |
| — Operation Countries, Issuance Countries                      |    —    |    ✅    |     ✅     |
| **Content Author Tracking**                                    |    —    |    ✅    |     ✅     |
| **Content Approver Assignment**                                |    —    |    ✅    |     ✅     |
| **Content Scheduling** (queue-based future publishing)         |    —    |    ✅    |     ✅     |
| **Deployment Tracking** (deployed_at, reason fields)           |    —    |    —     |     ✅     |
| **Content Rejection Reason** (with notes)                      |    —    |    ✅    |     ✅     |

### 4. DYNAMIC PAGES SYSTEM

| Feature                                                          | Starter | Business | Enterprise |
| ---------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Hierarchical Pages** (parent-child, up to 5 levels)            |    —    |    ✅    |     ✅     |
| **Full Slug Path** (e.g., `/parent/child/grandchild`)            |    —    |    ✅    |     ✅     |
| **Section-Based Page Builder** (20+ section types)               |    —    |    ✅    |     ✅     |
| — Banner sections (full-banner, sub-pages-banner)                |    —    |    ✅    |     ✅     |
| — Slider sections (featured-articles, redirection)               |    —    |    ✅    |     ✅     |
| — Description sections (image, text, alternate, contact, blog)   |    —    |    ✅    |     ✅     |
| — Card sections (redirection, people, resources, logo)           |    —    |    ✅    |     ✅     |
| — List sections (FAQs)                                           |    —    |    ✅    |     ✅     |
| — Unique/custom sections                                         |    —    |    ✅    |     ✅     |
| — Global sections (header, footer)                               |    —    |    ✅    |     ✅     |
| **Drag-and-Drop Section Reordering**                             |    —    |    ✅    |     ✅     |
| **Section Templates** (reusable content patterns)                |    —    |    ✅    |     ✅     |
| **Duplicate Page**                                               |    —    |    ✅    |     ✅     |
| **Duplicate Section**                                            |    —    |    ✅    |     ✅     |
| **Section Toggle** (active/inactive per section)                 |    —    |    ✅    |     ✅     |
| **Archived Sections Management** (restore soft-deleted sections) |    —    |    —     |     ✅     |
| **Section Lock** (Super Admin only)                              |    —    |    —     |     ✅     |
| **Dynamic Page Caching** (configurable TTL)                      |    —    |    —     |     ✅     |
| **Dynamic Page API** (public endpoints)                          |    —    |    ✅    |     ✅     |
| — List pages by status                                           |    —    |    ✅    |     ✅     |
| — Show page by slug (nested path support)                        |    —    |    ✅    |     ✅     |
| — Breadcrumbs by slug                                            |    —    |    ✅    |     ✅     |
| — Page children                                                  |    —    |    ✅    |     ✅     |
| — Hierarchy tree                                                 |    —    |    ✅    |     ✅     |
| — Site tree (navigation)                                         |    —    |    ✅    |     ✅     |
| — Search across pages                                            |    —    |    ✅    |     ✅     |
| — Download endpoint                                              |    —    |    ✅    |     ✅     |

### 5. MEDIA LIBRARY

| Feature                                                         | Starter | Business | Enterprise |
| --------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Asset Library** (upload, list, edit, delete, restore)         |   ✅    |    ✅    |     ✅     |
| **File Type Support** (images, videos, documents)               |   ✅    |    ✅    |     ✅     |
| **Asset Picker Modal** (select assets in content forms)         |   ✅    |    ✅    |     ✅     |
| **Image Editor** (crop, rotate, flip, resize via vue-cropperjs) |    —    |    ✅    |     ✅     |
| **Image Proxy Endpoint** (CORS-free serving)                    |    —    |    ✅    |     ��     |
| **Chunked File Upload** (large file support)                    |    —    |    —     |     ✅     |
| **Admin Group Assignment** on assets                            |    —    |    —     |     ✅     |
| **Force Delete** (permanent deletion with permission)           |    —    |    —     |     ✅     |
| **Bulk Asset Operations**                                       |    —    |    —     |     ✅     |

### 6. REVISION & APPROVAL WORKFLOW

| Feature                                                                 | Starter | Business | Enterprise |
| ----------------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Revision Tracking** (track changes to published content)              |    —    |    ✅    |     ✅     |
| **Revision Status Workflow** (Draft → For Approval → Approved/Rejected) |    —    |    ✅    |     ✅     |
| **Approve/Reject Revisions**                                            |    —    |    ✅    |     ✅     |
| **Rejection Reason** (with notes)                                       |    —    |    ✅    |     ✅     |
| **Revert Revision to Draft**                                            |    —    |    ✅    |     ✅     |
| **Inline Diff Viewer** (word-level old vs. new comparison)              |    —    |    ✅    |     ✅     |
| **Editable Revisions** (edit draft/rejected revisions inline)           |    —    |    —     |     ✅     |
| **Revision Confirmation Modal** (redirect to existing pending revision) |    —    |    —     |     ✅     |
| **Approval Process Feature Flag** (enable/disable globally)             |    —    |    ✅    |     ✅     |
| **Revision List** (filterable by status, date, module)                  |    —    |    ✅    |     ✅     |
| **Revision Detail View** (side-by-side field comparison)                |    —    |    ✅    |     ✅     |

### 7. NOTIFICATION SYSTEM

| Feature                                                | Starter | Business | Enterprise |
| ------------------------------------------------------ | :-----: | :------: | :--------: |
| **In-App Database Notifications**                      |    —    |    ✅    |     ✅     |
| — Notification inbox (list, read all, view individual) |    —    |    ✅    |     ✅     |
| — Per-module notification events                       |    —    |    ✅    |     ✅     |
| **Email Notifications**                                |    —    |    —     |     ✅     |
| — Configurable email templates (stub files)            |    —    |    —     |     ✅     |
| — Smart tags for dynamic content                       |    —    |    —     |     ✅     |
| — Notification template management UI                  |    —    |    —     |     ✅     |
| **Notification Events** (per content module)           |         |          |            |
| — Submitted for Approval → approvers                   |    —    |    —     |     ✅     |
| — Approved → authors                                   |    —    |    —     |     ✅     |
| — Rejected → authors (with reason)                     |    —    |    —     |     ✅     |
| — Revision Submitted → approvers                       |    —    |    —     |     ✅     |
| — Revision Approved → authors                          |    —    |    —     |     ✅     |
| — Revision Rejected → authors                          |    —    |    —     |     ✅     |
| — Published → authors                                  |    —    |    —     |     ✅     |
| — Article Published → subscribers (email)              |    —    |    —     |     ✅     |
| — Password Updated → admin                             |    —    |    —     |     ✅     |
| — Password Reset Request → admin                       |    —    |    —     |     ✅     |
| **Notification Channels** (Mail, Database)             |    —    |    —     |     ✅     |
| **Slack Integration** (via Laravel notifications)      |    —    |    —     |     ✅     |

### 8. PUBLIC API

| Feature                                                            | Starter | Business | Enterprise |
| ------------------------------------------------------------------ | :-----: | :------: | :--------: |
| **Content Listing APIs** (all content types)                       |   ✅    |    ✅    |     ✅     |
| — Paginated list with filters                                      |   ✅    |    ✅    |     ✅     |
| — Show by slug                                                     |   ✅    |    ✅    |     ✅     |
| **Dynamic Pages API**                                              |    —    |    ✅    |     ✅     |
| **CMS Pages API**                                                  |   ✅    |    ✅    |     ✅     |
| **Global Search API** (across all content types)                   |    —    |    ✅    |     ✅     |
| **Content Preview API** (preview draft revisions)                  |    —    |    ✅    |     ✅     |
| **Dropdown Data APIs** (public)                                    |   ✅    |    ✅    |     ✅     |
| **Contact Form Submission API** (public POST)                      |   ✅    |    ✅    |     ✅     |
| **Newsletter Subscription API** (public subscribe/unsubscribe)     |   ✅    |    ✅    |     ✅     |
| **API Response Format** (consistent `{success, data, pagination}`) |   ✅    |    ✅    |     ✅     |
| **API Rate Limiting**                                              |    —    |    —     |     ✅     |
| **API Versioning** (v1 namespace)                                  |    —    |    ✅    |     ✅     |
| **Hashid Obfuscation** (public IDs)                                |    —    |    ✅    |     ✅     |

### 9. CONTACT & SUBSCRIPTION MANAGEMENT

| Feature                                                          | Starter | Business | Enterprise |
| ---------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Public Contact Form** (name, email, message, subject, country) |   ✅    |    ✅    |     ✅     |
| **Contact Submissions Admin** (list, show, export)               |   ✅    |    ✅    |     ✅     |
| — Status management (New, Read, Replied, Spam)                   |   ✅    |    ✅    |     ✅     |
| — Admin notes on submissions                                     |    —    |    ✅    |     ✅     |
| — Weekly contact submissions report (email)                      |    —    |    —     |     ✅     |
| **Newsletter Subscriptions** (public subscribe/unsubscribe)      |   ✅    |    ✅    |     ✅     |
| — Subscription confirmation flow                                 |   ✅    |    ✅    |     ✅     |
| — Subscription admin management                                  |   ✅    |    ✅    |     ✅     |
| — Notify subscribers on article publish                          |    —    |    —     |     ✅     |

### 10. SETTINGS & TAXONOMIES

| Feature                                             | Starter | Business | Enterprise |
| --------------------------------------------------- | :-----: | :------: | :--------: |
| **Settings Dashboard** (categorized grid)           |   ✅    |    ✅    |     ✅     |
| **Taxonomy CRUD** (per taxonomy type)               |         |          |            |
| — Article Categories                                |   ✅    |    ✅    |     ✅     |
| — Video Categories                                  |    —    |    ✅    |     ✅     |
| — Organization Types                                |    —    |    ✅    |     ✅     |
| — Sectors                                           |    —    |    ✅    |     ✅     |
| — Bond Types                                        |    —    |    ✅    |     ✅     |
| — Document Types                                    |    —    |    ✅    |     ✅     |
| — Operation Countries                               |    —    |    ✅    |     ✅     |
| — Issuance Countries                                |    —    |    ✅    |     ✅     |
| — Admin Groups                                      |    —    |    ✅    |     ✅     |
| **Maintenance Mode** (enable/disable with schedule) |    —    |    ✅    |     ✅     |
| — Scheduled maintenance window                      |    —    |    ✅    |     ✅     |
| — Secret key bypass                                 |    —    |    ✅    |     ✅     |
| — Allowed IPs bypass                                |    —    |    ✅    |     ✅     |
| **Notification Template Management**                |    —    |    —     |     ✅     |
| — Edit email templates (subject, body, smart tags)  |    —    |    —     |     ✅     |
| — Edit database notification templates              |    —    |    —     |     ✅     |
| — Per-channel template configuration                |    —    |    —     |     ✅     |

### 11. SYSTEMS & ADMINISTRATION

| Feature                                                     | Starter | Business | Enterprise |
| ----------------------------------------------------------- | :-----: | :------: | :--------: |
| **Database Backups**                                        |         |          |            |
| — Manual backup creation                                    |    —    |    ✅    |     ✅     |
| — Automatic scheduled backups (hourly/daily/weekly/monthly) |    —    |    —     |     ✅     |
| — Backup download                                           |    —    |    ✅    |     ✅     |
| — Backup restore                                            |    —    |    —     |     ✅     |
| — Backup retention policy                                   |    —    |    —     |     ✅     |
| — Backup status tracking (completed/failed/in-progress)     |    —    |    ✅    |     ✅     |
| **Publish Logs** (deployment history)                       |    —    |    ✅    |     ✅     |
| — Publish log list with status filter                       |    —    |    ✅    |     ✅     |
| — Publish log detail view                                   |    —    |    ✅    |     ✅     |
| **Deployment Management**                                   |         |          |            |
| — Publish content to frontend (build script execution)      |    —    |    —     |     ✅     |
| — Configurable build script path and timeout                |    —    |    —     |     ✅     |
| — Deployment cooldown timer                                 |    —    |    —     |     ✅     |
| — Permission: `can-publish-website`                         |    —    |    —     |     ✅     |
| **CKEditor Upload Endpoint**                                |   ✅    |    ✅    |     ✅     |
| **Chunked Upload Support**                                  |    —    |    —     |     ✅     |
| **Admin Dropdown Data API** (populate admin UI selects)     |   ✅    |    ✅    |     ✅     |

### 12. SEARCH

| Feature                                              | Starter | Business | Enterprise |
| ---------------------------------------------------- | :-----: | :------: | :--------: |
| **Database-level Search** (basic LIKE queries)       |   ✅    |    ✅    |     ✅     |
| **Laravel Scout Integration**                        |    —    |    —     |     ✅     |
| — Meilisearch driver                                 |    —    |    —     |     ✅     |
| — Algolia driver                                     |    —    |    —     |     ✅     |
| — Custom index settings per model                    |    —    |    —     |     ✅     |
| — Searchable attributes configuration                |    —    |    —     |     ✅     |
| — Filterable/sortable attributes                     |    —    |    —     |     ✅     |
| — Typo tolerance                                     |    —    |    —     |     ✅     |
| **Global Search API** (unified across content types) |    —    |    ✅    |     ✅     |

### 13. QUEUED JOBS & SCHEDULING

| Feature                                                   | Starter | Business | Enterprise |
| --------------------------------------------------------- | :-----: | :------: | :--------: |
| **Scheduled Content Publishing** (per content type)       |    —    |    ✅    |     ✅     |
| — 10 individual scheduled publish jobs                    |    —    |    ✅    |     ✅     |
| **Video Thumbnail Generation** (queued after upload)      |    —    |    ✅    |     ✅     |
| **Notify Subscribers Job** (on article publish)           |    —    |    —     |     ✅     |
| **Publish Website Job** (frontend deployment)             |    —    |    —     |     ✅     |
| **Weekly Contact Submissions Report** (scheduled command) |    —    |    —     |     ✅     |
| **Daily Password Expiry Check** (scheduled command)       |    —    |    —     |     ✅     |
| **Automated Database Backups** (scheduled command)        |    —    |    —     |     ✅     |

### 14. FRONTEND (Vue.js Admin Panel)

| Feature                                                           | Starter | Business | Enterprise |
| ----------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Responsive Admin UI** (Tailwind CSS 4)                          |   ✅    |    ✅    |     ✅     |
| **Collapsible Sidebar Navigation** (permission-based visibility)  |   ✅    |    ✅    |     ✅     |
| **Data Tables** (sorting, filtering, pagination, tabs)            |   ✅    |    ✅    |     ✅     |
| **Form Components** (inputs, selects, date pickers, file uploads) |   ✅    |    ✅    |     ✅     |
| **Rich Text Editor** (CKEditor 5 with media library integration)  |   ✅    |    ✅    |     ✅     |
| **Toast Notifications** (success/error/warning/info)              |   ✅    |    ✅    |     ✅     |
| **Modal System** (global modal manager)                           |   ✅    |    ✅    |     ✅     |
| **Dark Mode Toggle**                                              |    —    |    ✅    |     ✅     |
| **Error Pages** (401, 403, 404, 500, 503)                         |   ✅    |    ✅    |     ✅     |
| **Inline Diff Viewer** (revision changes)                         |    —    |    ✅    |     ✅     |
| **Image Editor Modal** (crop, rotate, resize)                     |    —    |    ✅    |     ✅     |
| **Section Builder UI** (drag-and-drop page sections)              |    —    |    ✅    |     ✅     |
| **Page Hierarchy Tree** (expand/collapse, drag reorder)           |    —    |    ✅    |     ✅     |
| **Template Selector** (gallery grid)                              |    —    |    ✅    |     ✅     |
| **Recursive Checkbox Tree** (hierarchical selections)             |    —    |    ✅    |     ✅     |
| **Asset Picker Modal** (searchable media grid)                    |   ✅    |    ✅    |     ✅     |

### 15. DEVELOPER EXPERIENCE & EXTENSIBILITY

| Feature                                                                     | Starter | Business | Enterprise |
| --------------------------------------------------------------------------- | :-----: | :------: | :--------: |
| **Standardized Module Scaffold** (22-step template)                         |    —    |    ✅    |     ✅     |
| **Consistent CRUD Pattern** (Controller → Service → Request → Resource)     |   ✅    |    ✅    |     ✅     |
| **Reusable Traits** (HasRevisable, FiltersByAdminGroup, LogsActivity, etc.) |    —    |    ✅    |     ✅     |
| **Feature Flags** (env-based enable/disable)                                |    —    |    ✅    |     ✅     |
| — Approval Process flag                                                     |    —    |    ✅    |     ✅     |
| — Page Creation flag                                                        |    —    |    ✅    |     ✅     |
| — Email OTP flag                                                            |    —    |    ✅    |     ✅     |
| — reCAPTCHA flag                                                            |    —    |    ✅    |     ✅     |
| — CSP flag                                                                  |    —    |    ✅    |     ✅     |
| — Activity Logging flag                                                     |    —    |    ✅    |     ✅     |
| **Custom Vendor Package** (praxxys/backend)                                 |   ✅    |    ✅    |     ✅     |
| **TypeScript Support** (full type definitions)                              |   ✅    |    ✅    |     ✅     |
| **PHP Enum Support** (status enums with metadata)                           |   ✅    |    ✅    |     ✅     |
| **Comprehensive Test Scripts** (admin + API)                                |    —    |    —     |     ✅     |
| **API Documentation** (auto-generated or manual)                            |    —    |    —     |     ✅     |

---

## Tier Summary

### 🟢 Starter — "Get Online Fast"

**Best for:** Small businesses, startups, personal websites, or simple brochure sites.

**What's included:**

- Admin authentication with reCAPTCHA protection
- Admin account management
- **2 content types**: Articles + Static CMS Pages
- Basic content publishing (draft → published)
- Media Library (asset upload and management)
- Rich text editing (CKEditor 5)
- SEO metadata fields
- Public API for articles and pages
- Contact form + newsletter subscriptions
- Basic settings (article categories)
- Responsive admin UI with data tables and forms

**What's NOT included:**

- No approval workflow
- No revision tracking
- No content scheduling
- No RBAC (single admin role)
- No admin groups
- No dynamic pages
- No additional content types (properties, careers, etc.)
- No activity logging
- No database backups
- No deployment management
- No advanced search (database-level only)
- No email notifications
- No 2FA

---

### 🔵 Business — "Scale Your Content Operations"

**Best for:** Growing organizations, mid-market companies, marketing teams, content-heavy websites.

**Everything in Starter, plus:**

**Content & Publishing:**

- **10 content types** (Articles, Properties, Careers, Awards, Organizations, Videos, Ratings, Financial Statements, Sustainability Documents, Annual Reports)
- **Dynamic Pages System** — hierarchical pages with 20+ section types, drag-and-drop builder
- **Content scheduling** — queue-based future publishing
- **3-state approval workflow** (Draft → Pending → Published/Rejected)
- **Revision tracking** with inline diff viewer
- **Content categories and taxonomies** (9 taxonomy types)

**Team Collaboration:**

- **Role-Based Access Control** (Super Admin, Editor, Approver roles)
- **Admin Groups** — scope content access by team
- **Content author and approver tracking**
- **Activity logging** with admin UI viewer

**Security:**

- **Two-Factor Authentication** (TOTP + Email OTP)
- **Session management** (view/force logout sessions)

**Media & Content Tools:**

- **Image editor** (crop, rotate, resize)
- **Image proxy endpoint**
- **Content preview API**

**Systems:**

- **Database backups** (manual creation, download, status tracking)
- **Publish logs** (deployment history)
- **Maintenance mode** (scheduled, with bypass options)
- **Admin export/import** (Excel)

**What's NOT included:**

- No granular permissions (200+ individual permissions)
- No email notification system (in-app only)
- No deployment management (publish to frontend)
- No advanced search (Meilisearch/Algolia)
- No security headers (CSP)
- No password expiry policy
- No chunked upload
- No section locking
- No editable revisions
- No comprehensive test scripts

---

### ⚫ Enterprise — "Full Enterprise-Grade Solution"

**Best for:** Large enterprises, government agencies, financial institutions, organizations with strict compliance requirements.

**Everything in Business, plus:**

**Advanced Security & Compliance:**

- **Security Headers** (CSP, HSTS, Referrer-Policy, Permissions-Policy)
- **Password expiry policy** (90-day forced rotation with daily cron)
- **Granular permissions** (200+ individual permissions with per-admin overrides)
- **Permission revocation** (model-level)
- **IP-based access restrictions**
- **SSO/SAML integration** (planned)

**Enterprise Content Management:**

- **Full notification system** (email + in-app, 7 events × 10 modules)
- **Configurable email templates** with smart tags
- **Notification template management UI**
- **Slack integration**
- **Editable revisions** (edit draft/rejected revisions inline)
- **Section locking** (Super Admin only)
- **Archived sections management** (restore soft-deleted sections)
- **Dynamic page caching** (configurable TTL)
- **Deployment tracking** (deployed_at, reason fields)

**Enterprise Systems:**

- **Automated database backups** (hourly/daily/weekly/monthly with retention)
- **Backup restore** capability
- **Deployment management** (build script execution, cooldown timer)
- **Chunked file upload** (large file support)
- **Bulk asset operations**

**Advanced Search:**

- **Laravel Scout** with Meilisearch or Algolia
- **Custom index settings** per model
- **Typo tolerance**, ranking rules, filterable/sortable attributes

**Developer & Operations:**

- **Comprehensive test scripts** (admin + API)
- **API rate limiting**
- **API documentation**
- **Weekly contact submissions report**
- **Daily password expiry check**
- **All feature flags** available for customization

---

## Feature Flag Configuration Reference

The following environment variables control feature availability across tiers:

| Variable                        | Starter | Business |  Enterprise   | Default |
| ------------------------------- | :-----: | :------: | :-----------: | :-----: |
| `ENABLE_APPROVAL_PROCESS`       | `false` |  `true`  |    `true`     | `false` |
| `ENABLE_PAGE_CREATION`          | `false` |  `true`  |    `true`     | `false` |
| `EMAIL_OTP_ENABLED`             | `false` |  `true`  |    `true`     | `true`  |
| `RECAPTCHA_ENABLED`             | `true`  |  `true`  |    `true`     | `true`  |
| `CSP_ENABLED`                   | `false` | `false`  |    `true`     | `false` |
| `ACTIVITY_LOGGER_ENABLED`       | `false` |  `true`  |    `true`     | `true`  |
| `BACKUP_FREQUENCY`              | `none`  | `manual` |    `daily`    | `daily` |
| `BACKUP_RETENTION_DAYS`         |   `0`   |   `30`   |     `90`      |  `90`   |
| `PASSWORD_EXPIRY_DAYS`          |   `0`   |   `0`    |     `90`      |  `90`   |
| `SCOUT_DRIVER`                  | `null`  |  `null`  | `meilisearch` | `null`  |
| `PRX_BACKEND_LOGIN_LOGS_ALERTS` | `false` | `false`  |    `true`     | `false` |

---

## Implementation Notes

### How to Configure a Tier

1. **Set environment variables** in `.env` according to the Feature Flag table above
2. **Enable/disable routes** — route groups are already permission-gated; unused features simply won't appear in the UI
3. **Permission-based sidebar** — navigation items auto-hide based on the current admin's permissions
4. **Feature flag gating** — the `enable_approval_process` prop is shared globally via Inertia; frontend components conditionally render based on it

### Adding a New Content Module

Use the standardized scaffold template at `docs/feature-scaffold-prompt-template.md` which covers all 22 steps:

1. Migration → 2. Status Enum → 3. Model → 4. Admin Request → 5. Reject Request → 6. Admin Service → 7. Admin Controller → 8. Admin IndexResource → 9. Admin EditResource → 10. Routes → 11. RevisionService → 12. Scheduled Publishing Job → 13. DropdownController → 14-16. Public API → 17. Public API DropdownController → 18. API Routes → 19-20. Test Scripts → 21. Vue Pages → 22. Frontend Enum

### Tier Upgrade Path

- **Starter → Business:** Enable additional content types, turn on approval workflow, add RBAC, enable activity logging, configure admin groups
- **Business → Enterprise:** Enable CSP, configure Scout search driver, set up automated backups, deploy notification system, enable granular permissions, configure deployment management

---

## Appendix: Content Module Comparison

| Module               | Model | Revisable | Schedulable | Notifiable | Admin Groups | SEO | Categories |
| -------------------- | :---: | :-------: | :---------: | :--------: | :----------: | :-: | :--------: |
| Articles             |  ✅   |    ✅     |     ✅      |     ✅     |      ⏳      | ✅  |     ✅     |
| Properties           |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      | ✅  |     —      |
| Careers              |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     —      |
| Awards               |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     —      |
| Organizations        |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     ✅     |
| Videos               |  ✅   |    ✅     |     ✅      |     ✅     |      ⏳      |  —  |     ✅     |
| Ratings              |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     —      |
| Financial Statements |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     ✅     |
| Sustainability Docs  |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     —      |
| Annual Reports       |  ✅   |    ✅     |     ✅      |     ✅     |      ✅      |  —  |     —      |
| Dynamic Pages        |  ✅   |    ✅     |      —      |     ✅     |      ✅      | ✅  |     —      |
| CMS Pages            |  ✅   |     —     |      —      |     —      |      —       | ✅  |     —      |

> ✅ = Implemented | ⏳ = Planned/Partial | — = Not applicable

---

## Appendix: Planned Features (Roadmap)

These features are designed but not yet implemented. They would slot into the Enterprise tier:

| Feature                                                                      | Target Tier |              Status              |
| ---------------------------------------------------------------------------- | :---------: | :------------------------------: |
| Full Notification System (112 stubs, 8 modules, 7 events)                    | Enterprise  | Stubs exist, integration pending |
| Dynamic Pages Refactoring v2 (enum status, admin groups, authors, Revisable) |  Business+  |             Planned              |
| Article + Video admin group pivot tables                                     |  Business   |             Pending              |
| Frontend Approval completion (6 remaining forms)                             |  Business   |             Pending              |
| Activity Log completion (14 remaining models)                                |  Business   |             Pending              |
| `is_published` subscriber notifications                                      | Enterprise  |        Analysis complete         |
| SSO / SAML Integration                                                       | Enterprise  |             Planned              |
| Multi-language / i18n Support                                                | Enterprise  |             Planned              |
| Webhook System (content events → external services)                          | Enterprise  |             Planned              |
| Audit Trail Export (compliance-ready CSV/PDF)                                | Enterprise  |             Planned              |
| Content Version Comparison (side-by-side full-page diff)                     | Enterprise  |             Planned              |
| Advanced Analytics Dashboard (content performance)                           | Enterprise  |             Planned              |

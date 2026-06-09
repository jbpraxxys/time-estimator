<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-300">
    <!-- Hero -->
    <div class="mb-12 text-center">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        CMS Feature Tiers
      </h1>
      <p class="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Three-tier feature structure for the white-label CMS backend package.
        Choose the right level for your organization's needs.
      </p>
    </div>

    <!-- Premium Tier Cards -->
    <div class="grid md:grid-cols-3 gap-6 mb-12">
      <div
        v-for="tier in tiers"
        :key="tier.name"
        class="relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
        :class="tier.cardClass"
      >
        <!-- Badges -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
          <span
            v-if="tier.popular"
            class="inline-flex items-center gap-1 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Most Popular
          </span>
          <span
            v-if="tier.recommended"
            class="inline-flex items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm"
          >
            Recommended
          </span>
        </div>

        <!-- Tier icon -->
        <div class="mb-4">
          <div
            class="inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold"
            :class="tier.iconClass"
          >
            {{ tier.iconText }}
          </div>
        </div>

        <!-- Tier name -->
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {{ tier.name }}
        </h2>

        <!-- Tagline -->
        <p class="text-sm mb-4 leading-relaxed" :class="tier.textClass">
          {{ tier.tagline }}
        </p>

        <!-- Divider -->
        <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>

        <!-- Target audience -->
        <div class="text-sm">
          <p class="font-semibold text-gray-900 dark:text-white mb-1 text-xs uppercase tracking-wider">
            Best for
          </p>
          <p :class="tier.textClass">{{ tier.target }}</p>
        </div>
      </div>
    </div>

    <!-- Feature Comparison -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Feature Comparison
      </h2>
    </div>

    <div class="space-y-4">
      <SectionAccordion
        v-for="section in featureSections"
        :key="section.title"
        :title="section.title"
        :default-open="section.defaultOpen"
      >
        <div class="overflow-x-auto -mx-6 px-6">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-600">
                <th
                  class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white w-1/2"
                >
                  Feature
                </th>
                <th
                  v-for="tier in ['Starter', 'Business', 'Enterprise']"
                  :key="tier"
                  class="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white w-1/6"
                >
                  {{ tier }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
              <template v-for="group in section.groups" :key="group.name">
                <!-- Group header -->
                <tr
                  v-if="group.name"
                  class="bg-gray-50/50 dark:bg-gray-900/50"
                >
                  <td
                    colspan="4"
                    class="py-2 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    {{ group.name }}
                  </td>
                </tr>
                <!-- Features -->
                <tr
                  v-for="feature in group.features"
                  :key="feature.name"
                  class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td class="py-2.5 px-4 text-gray-700 dark:text-gray-300">
                    {{ feature.name }}
                  </td>
                  <td
                    v-for="tier in ['starter', 'business', 'enterprise']"
                    :key="tier"
                    class="text-center py-2.5 px-4"
                  >
                    <span
                      v-if="feature.values[tier] === true"
                      class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold"
                    >
                      ✓
                    </span>
                    <span
                      v-else-if="feature.values[tier] === 'planned'"
                      class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-bold"
                      title="Planned"
                    >
                      ⏳
                    </span>
                    <span
                      v-else
                      class="text-gray-300 dark:text-gray-600 text-lg"
                    >
                      —
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </SectionAccordion>
    </div>

    <!-- Tier Summaries -->
    <div class="mt-12 space-y-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Tier Summaries
      </h2>

      <!-- Starter -->
      <div
        class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-bold">
            S
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Starter
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              "Get Online Fast"
            </p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          Small businesses, startups, personal websites, or simple brochure sites.
        </p>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              What's included:
            </p>
            <ul
              class="space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside"
            >
              <li>Admin authentication with reCAPTCHA</li>
              <li>Admin account management</li>
              <li>2 content types: Articles + Static CMS Pages</li>
              <li>Basic content publishing (draft → published)</li>
              <li>Media Library (upload and management)</li>
              <li>Rich text editing (CKEditor 5)</li>
              <li>SEO metadata fields</li>
              <li>Public API for articles and pages</li>
              <li>Contact form + newsletter subscriptions</li>
              <li>Responsive admin UI with data tables</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              What's NOT included:
            </p>
            <ul
              class="space-y-1 text-gray-500 dark:text-gray-400 list-disc list-inside"
            >
              <li>No approval workflow</li>
              <li>No revision tracking</li>
              <li>No content scheduling</li>
              <li>No RBAC (single admin role)</li>
              <li>No admin groups</li>
              <li>No dynamic pages</li>
              <li>No additional content types</li>
              <li>No activity logging</li>
              <li>No database backups</li>
              <li>No 2FA</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Business -->
      <div
        class="rounded-xl border-2 border-primary-500/30 dark:border-primary-500/20 bg-white dark:bg-gray-800 shadow-md p-6 relative"
      >
        <div class="absolute -top-3 right-6">
          <span class="inline-flex items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-gray-900">
            Recommended
          </span>
        </div>
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-bold">
            B
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Business
            </h3>
            <p class="text-sm text-primary-600 dark:text-primary-400">
              "Scale Your Content Operations"
            </p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          Growing organizations, mid-market companies, marketing teams, content-heavy websites.
        </p>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              Everything in Starter, plus:
            </p>
            <ul
              class="space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside"
            >
              <li>10 content types (Articles, Properties, Careers, etc.)</li>
              <li>Dynamic Pages System with 20+ section types</li>
              <li>Content scheduling (queue-based future publishing)</li>
              <li>3-state approval workflow</li>
              <li>Revision tracking with inline diff viewer</li>
              <li>Content categories and taxonomies (9 types)</li>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Admin Groups for content scoping</li>
              <li>Two-Factor Authentication (TOTP + Email OTP)</li>
              <li>Session management</li>
              <li>Image editor (crop, rotate, resize)</li>
              <li>Database backups (manual)</li>
              <li>Maintenance mode</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              What's NOT included:
            </p>
            <ul
              class="space-y-1 text-gray-500 dark:text-gray-400 list-disc list-inside"
            >
              <li>No granular permissions (200+ individual)</li>
              <li>No email notification system</li>
              <li>No deployment management</li>
              <li>No advanced search (Meilisearch/Algolia)</li>
              <li>No security headers (CSP)</li>
              <li>No password expiry policy</li>
              <li>No chunked upload</li>
              <li>No section locking</li>
              <li>No editable revisions</li>
              <li>No comprehensive test scripts</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Enterprise -->
      <div
        class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-gray-600 text-white text-sm font-bold">
            E
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Enterprise
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              "Full Enterprise-Grade Solution"
            </p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          Large enterprises, government agencies, financial institutions, organizations with strict compliance requirements.
        </p>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              Everything in Business, plus:
            </p>
            <ul
              class="space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside"
            >
              <li>Security Headers (CSP, HSTS, etc.)</li>
              <li>Password expiry policy (90-day rotation)</li>
              <li>Granular permissions (200+ with overrides)</li>
              <li>IP-based access restrictions</li>
              <li>SSO/SAML integration (planned)</li>
              <li>Full notification system (email + in-app)</li>
              <li>Configurable email templates with smart tags</li>
              <li>Slack integration</li>
              <li>Editable revisions inline</li>
              <li>Section locking (Super Admin only)</li>
              <li>Archived sections management</li>
              <li>Dynamic page caching (configurable TTL)</li>
              <li>Automated database backups with retention</li>
              <li>Deployment management (build script execution)</li>
              <li>Chunked file upload</li>
              <li>Laravel Scout (Meilisearch or Algolia)</li>
              <li>API rate limiting & documentation</li>
            </ul>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white mb-2">
              Enterprise Systems:
            </p>
            <ul
              class="space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside"
            >
              <li>Weekly contact submissions report</li>
              <li>Daily password expiry check</li>
              <li>Bulk asset operations</li>
              <li>Backup restore capability</li>
              <li>Deployment cooldown timer</li>
              <li>Comprehensive test scripts</li>
              <li>All feature flags available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Flag Configuration -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Feature Flag Configuration
      </h2>
      <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table class="min-w-full text-sm">
          <thead class="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th
                class="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white"
              >
                Variable
              </th>
              <th
                class="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white"
              >
                Starter
              </th>
              <th
                class="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white"
              >
                Business
              </th>
              <th
                class="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white"
              >
                Enterprise
              </th>
              <th
                class="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white"
              >
                Default
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
            <tr
              v-for="flag in featureFlags"
              :key="flag.variable"
              class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <td class="py-2.5 px-4 font-mono text-xs text-gray-700 dark:text-gray-300">
                {{ flag.variable }}
              </td>
              <td
                v-for="col in ['starter', 'business', 'enterprise', 'default']"
                :key="col"
                class="text-center py-2.5 px-4 text-gray-600 dark:text-gray-400 font-mono text-xs"
              >
                {{ flag[col] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Implementation Notes -->
    <div class="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Implementation Notes
      </h2>
      <div class="space-y-4 text-sm text-gray-600 dark:text-gray-300">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            How to Configure a Tier
          </h3>
          <ol class="list-decimal list-inside space-y-1">
            <li>
              Set environment variables in <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">.env</code> according to the Feature Flag table
            </li>
            <li>
              Enable/disable routes — route groups are permission-gated; unused features won't appear in the UI
            </li>
            <li>
              Permission-based sidebar — navigation items auto-hide based on the current admin's permissions
            </li>
            <li>
              Feature flag gating — the <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">enable_approval_process</code> prop is shared globally via Inertia
            </li>
          </ol>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            Tier Upgrade Path
          </h3>
          <ul class="list-disc list-inside space-y-1">
            <li>
              <strong>Starter → Business:</strong> Enable additional content types, turn on approval workflow, add RBAC, enable activity logging, configure admin groups
            </li>
            <li>
              <strong>Business → Enterprise:</strong> Enable CSP, configure Scout search driver, set up automated backups, deploy notification system, enable granular permissions, configure deployment management
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionAccordion from '@/components/shared/SectionAccordion.vue'

const tiers = [
  {
    name: 'Starter',
    iconText: 'S',
    tagline: 'Get online fast with essential content management',
    target: 'Small businesses, startups, personal websites',
    popular: false,
    recommended: true,
    cardClass: 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:border-gray-300 dark:hover:border-gray-600',
    iconClass: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
    textClass: 'text-gray-600 dark:text-gray-400',
  },
  {
    name: 'Business',
    iconText: 'B',
    tagline: 'Scale your content operations with team collaboration',
    target: 'Growing organizations, mid-market companies',
    popular: true,
    cardClass: 'border-primary-500/30 dark:border-primary-500/20 bg-white dark:bg-gray-800 shadow-md hover:border-primary-500/50 dark:hover:border-primary-500/40',
    iconClass: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400',
    textClass: 'text-gray-600 dark:text-gray-400',
  },
  {
    name: 'Enterprise',
    iconText: 'E',
    tagline: 'Enterprise-grade security, compliance, and full control',
    target: 'Large enterprises, government agencies, financial institutions',
    popular: false,
    recommended: true,
    cardClass: 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:border-gray-300 dark:hover:border-gray-600',
    iconClass: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
    textClass: 'text-gray-600 dark:text-gray-400',
  },
]

interface Feature {
  name: string
  values: Record<string, boolean | string>
}

interface FeatureGroup {
  name?: string
  features: Feature[]
}

interface FeatureSection {
  title: string
  defaultOpen?: boolean
  groups: FeatureGroup[]
}

const featureSections: FeatureSection[] = [
  {
    title: '1. Authentication & Security',
    groups: [
      {
        features: [
          { name: 'Admin Login (email + password)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Password Reset (forgot/reset flow)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Session Management (view/force logout)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Login Rate Limiting (1-hour lockout)', values: { starter: true, business: true, enterprise: true } },
          { name: 'reCAPTCHA v3 (login + public forms)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Two-Factor Authentication (TOTP)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Email OTP 2FA (6-digit code)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Security Headers (CSP, HSTS, etc.)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Password Expiry Policy (90-day rotation)', values: { starter: false, business: false, enterprise: true } },
          { name: 'IP-based Access Restrictions', values: { starter: false, business: false, enterprise: true } },
          { name: 'SSO / SAML Integration', values: { starter: false, business: false, enterprise: 'planned' } },
        ],
      },
    ],
  },
  {
    title: '2. Admin Account Management',
    groups: [
      {
        features: [
          { name: 'Admin CRUD (create, edit, list, soft-delete, restore)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Admin Profile Management (name, email, photo, mobile)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Admin Password Change (from profile)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Admin Photo Upload (profile picture)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Admin Export/Import (Excel)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Send Reset Password Link (admin-initiated)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Role-Based Access Control (RBAC)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Granular Permissions System (200+ permissions)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Admin Groups (content scoping groups)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Activity Logging (Spatie Activity Log)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '3. Content Management — Core',
    groups: [
      {
        name: 'Content Types Included',
        features: [
          { name: 'Articles / News', values: { starter: true, business: true, enterprise: true } },
          { name: 'Static CMS Pages (Home, About, Privacy, etc.)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Properties / Listings', values: { starter: false, business: true, enterprise: true } },
          { name: 'Careers / Job Listings', values: { starter: false, business: true, enterprise: true } },
          { name: 'Awards / Recognitions', values: { starter: false, business: true, enterprise: true } },
          { name: 'Organizations / Team Directory', values: { starter: false, business: true, enterprise: true } },
          { name: 'Videos / Media Gallery', values: { starter: false, business: true, enterprise: true } },
          { name: 'Ratings / Scores', values: { starter: false, business: true, enterprise: true } },
          { name: 'Financial Statements', values: { starter: false, business: true, enterprise: true } },
          { name: 'Sustainability Documents', values: { starter: false, business: true, enterprise: true } },
          { name: 'Annual Reports', values: { starter: false, business: true, enterprise: true } },
        ],
      },
      {
        features: [
          { name: 'Content CRUD (create, edit, list, soft-delete, restore)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Content Status Workflow (Draft → Published)', values: { starter: true, business: true, enterprise: true } },
          { name: '3-State Approval Workflow (Draft → Pending → Published/Rejected)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Scheduled Publishing (future date/time)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Rich Text Editing (CKEditor 5)', values: { starter: true, business: true, enterprise: true } },
          { name: 'SEO Metadata (title, description, keywords, OG image)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Content Categories / Taxonomies', values: { starter: true, business: true, enterprise: true } },
          { name: 'Content Author Tracking', values: { starter: false, business: true, enterprise: true } },
          { name: 'Content Approver Assignment', values: { starter: false, business: true, enterprise: true } },
          { name: 'Content Scheduling (queue-based)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Deployment Tracking (deployed_at, reason)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Content Rejection Reason (with notes)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '4. Dynamic Pages System',
    groups: [
      {
        features: [
          { name: 'Hierarchical Pages (parent-child, up to 5 levels)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Full Slug Path (/parent/child/grandchild)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Section-Based Page Builder (20+ section types)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Drag-and-Drop Section Reordering', values: { starter: false, business: true, enterprise: true } },
          { name: 'Section Templates (reusable content patterns)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Duplicate Page / Section', values: { starter: false, business: true, enterprise: true } },
          { name: 'Section Toggle (active/inactive per section)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Archived Sections Management', values: { starter: false, business: false, enterprise: true } },
          { name: 'Section Lock (Super Admin only)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Dynamic Page Caching (configurable TTL)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Dynamic Page API (public endpoints)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '5. Media Library',
    groups: [
      {
        features: [
          { name: 'Asset Library (upload, list, edit, delete, restore)', values: { starter: true, business: true, enterprise: true } },
          { name: 'File Type Support (images, videos, documents)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Asset Picker Modal (select in content forms)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Image Editor (crop, rotate, flip, resize)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Image Proxy Endpoint (CORS-free serving)', values: { starter: false, business: true, enterprise: 'planned' } },
          { name: 'Chunked File Upload (large file support)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Admin Group Assignment on assets', values: { starter: false, business: false, enterprise: true } },
          { name: 'Force Delete (permanent deletion)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Bulk Asset Operations', values: { starter: false, business: false, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '6. Revision & Approval Workflow',
    groups: [
      {
        features: [
          { name: 'Revision Tracking (track changes to published)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Revision Status Workflow (Draft → For Approval → Approved/Rejected)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Approve/Reject Revisions', values: { starter: false, business: true, enterprise: true } },
          { name: 'Rejection Reason (with notes)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Revert Revision to Draft', values: { starter: false, business: true, enterprise: true } },
          { name: 'Inline Diff Viewer (word-level comparison)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Editable Revisions (edit draft/rejected inline)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Revision Confirmation Modal', values: { starter: false, business: false, enterprise: true } },
          { name: 'Approval Process Feature Flag', values: { starter: false, business: true, enterprise: true } },
          { name: 'Revision List (filterable by status, date, module)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Revision Detail View (side-by-side comparison)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '7. Notification System',
    groups: [
      {
        features: [
          { name: 'In-App Database Notifications', values: { starter: false, business: true, enterprise: true } },
          { name: 'Per-module notification events', values: { starter: false, business: true, enterprise: true } },
          { name: 'Email Notifications', values: { starter: false, business: false, enterprise: true } },
          { name: 'Configurable email templates (stub files)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Smart tags for dynamic content', values: { starter: false, business: false, enterprise: true } },
          { name: 'Notification template management UI', values: { starter: false, business: false, enterprise: true } },
          { name: 'Notification Events (7 events × 10 modules)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Notification Channels (Mail, Database)', values: { starter: false, business: false, enterprise: true } },
          { name: 'Slack Integration (via Laravel notifications)', values: { starter: false, business: false, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '8. Public API',
    groups: [
      {
        features: [
          { name: 'Content Listing APIs (all content types)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Paginated list with filters', values: { starter: true, business: true, enterprise: true } },
          { name: 'Show by slug', values: { starter: true, business: true, enterprise: true } },
          { name: 'Dynamic Pages API', values: { starter: false, business: true, enterprise: true } },
          { name: 'CMS Pages API', values: { starter: true, business: true, enterprise: true } },
          { name: 'Global Search API (across all content)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Content Preview API (preview drafts)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Dropdown Data APIs (public)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Contact Form Submission API', values: { starter: true, business: true, enterprise: true } },
          { name: 'Newsletter Subscription API', values: { starter: true, business: true, enterprise: true } },
          { name: 'API Rate Limiting', values: { starter: false, business: false, enterprise: true } },
          { name: 'API Versioning (v1 namespace)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Hashid Obfuscation (public IDs)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '9. Search',
    groups: [
      {
        features: [
          { name: 'Database-level Search (basic LIKE queries)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Laravel Scout Integration', values: { starter: false, business: false, enterprise: true } },
          { name: 'Meilisearch driver', values: { starter: false, business: false, enterprise: true } },
          { name: 'Algolia driver', values: { starter: false, business: false, enterprise: true } },
          { name: 'Custom index settings per model', values: { starter: false, business: false, enterprise: true } },
          { name: 'Searchable attributes configuration', values: { starter: false, business: false, enterprise: true } },
          { name: 'Filterable/sortable attributes', values: { starter: false, business: false, enterprise: true } },
          { name: 'Typo tolerance', values: { starter: false, business: false, enterprise: true } },
          { name: 'Global Search API (unified across types)', values: { starter: false, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '10. Systems & Administration',
    groups: [
      {
        features: [
          { name: 'Database Backups — Manual creation', values: { starter: false, business: true, enterprise: true } },
          { name: 'Database Backups — Automatic scheduled', values: { starter: false, business: false, enterprise: true } },
          { name: 'Database Backups — Download', values: { starter: false, business: true, enterprise: true } },
          { name: 'Database Backups — Restore', values: { starter: false, business: false, enterprise: true } },
          { name: 'Database Backups — Retention policy', values: { starter: false, business: false, enterprise: true } },
          { name: 'Publish Logs (deployment history)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Deployment Management (build script)', values: { starter: false, business: false, enterprise: true } },
          { name: 'CKEditor Upload Endpoint', values: { starter: true, business: true, enterprise: true } },
          { name: 'Chunked Upload Support', values: { starter: false, business: false, enterprise: true } },
          { name: 'Admin Dropdown Data API', values: { starter: true, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '11. Frontend (Vue.js Admin Panel)',
    groups: [
      {
        features: [
          { name: 'Responsive Admin UI (Tailwind CSS 4)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Collapsible Sidebar Navigation', values: { starter: true, business: true, enterprise: true } },
          { name: 'Data Tables (sorting, filtering, pagination)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Form Components (inputs, selects, date pickers)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Rich Text Editor (CKEditor 5)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Toast Notifications', values: { starter: true, business: true, enterprise: true } },
          { name: 'Modal System (global modal manager)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Dark Mode Toggle', values: { starter: false, business: true, enterprise: true } },
          { name: 'Error Pages (401, 403, 404, 500, 503)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Inline Diff Viewer (revision changes)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Image Editor Modal (crop, rotate, resize)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Section Builder UI (drag-and-drop)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Page Hierarchy Tree (drag reorder)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Asset Picker Modal (searchable grid)', values: { starter: true, business: true, enterprise: true } },
        ],
      },
    ],
  },
  {
    title: '12. Developer Experience',
    groups: [
      {
        features: [
          { name: 'Standardized Module Scaffold (22-step template)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Consistent CRUD Pattern', values: { starter: true, business: true, enterprise: true } },
          { name: 'Reusable Traits (HasRevisable, LogsActivity, etc.)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Feature Flags (env-based enable/disable)', values: { starter: false, business: true, enterprise: true } },
          { name: 'Custom Vendor Package (praxxys/backend)', values: { starter: true, business: true, enterprise: true } },
          { name: 'TypeScript Support (full type definitions)', values: { starter: true, business: true, enterprise: true } },
          { name: 'PHP Enum Support (status enums with metadata)', values: { starter: true, business: true, enterprise: true } },
          { name: 'Comprehensive Test Scripts (admin + API)', values: { starter: false, business: false, enterprise: true } },
          { name: 'API Documentation (auto-generated or manual)', values: { starter: false, business: false, enterprise: true } },
        ],
      },
    ],
  },
]

interface FeatureFlag {
  variable: string
  starter: string
  business: string
  enterprise: string
  default: string
  [key: string]: string
}

const featureFlags: FeatureFlag[] = [
  { variable: 'ENABLE_APPROVAL_PROCESS', starter: 'false', business: 'true', enterprise: 'true', default: 'false' },
  { variable: 'ENABLE_PAGE_CREATION', starter: 'false', business: 'true', enterprise: 'true', default: 'false' },
  { variable: 'EMAIL_OTP_ENABLED', starter: 'false', business: 'true', enterprise: 'true', default: 'true' },
  { variable: 'RECAPTCHA_ENABLED', starter: 'true', business: 'true', enterprise: 'true', default: 'true' },
  { variable: 'CSP_ENABLED', starter: 'false', business: 'false', enterprise: 'true', default: 'false' },
  { variable: 'ACTIVITY_LOGGER_ENABLED', starter: 'false', business: 'true', enterprise: 'true', default: 'true' },
  { variable: 'BACKUP_FREQUENCY', starter: 'none', business: 'manual', enterprise: 'daily', default: 'daily' },
  { variable: 'BACKUP_RETENTION_DAYS', starter: '0', business: '30', enterprise: '90', default: '90' },
  { variable: 'PASSWORD_EXPIRY_DAYS', starter: '0', business: '0', enterprise: '90', default: '90' },
  { variable: 'SCOUT_DRIVER', starter: 'null', business: 'null', enterprise: 'meilisearch', default: 'null' },
  { variable: 'PRX_BACKEND_LOGIN_LOGS_ALERTS', starter: 'false', business: 'false', enterprise: 'true', default: 'false' },
]
</script>
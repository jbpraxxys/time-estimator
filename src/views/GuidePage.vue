<template>
    <div
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-300"
    >
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
                Estimation Guide
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
                Learn how we calculate time estimates for frontend projects
            </p>
        </div>

        <div class="space-y-6">
            <SectionAccordion title="The Formula" :default-open="true">
                <div class="space-y-4">
                    <div
                        class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100"
                    >
                        <p>
                            BASE = FIXED 24 + (P1×8) + (P2×4) + (P3a×1) +
                            (P3b×2) + (P3c×4) + (P4a×10) + (P4b×3) + (P5×1) +
                            OPTIONAL
                        </p>
                        <p>FINAL = BASE × 1.20</p>
                        <p>TIMELINE = FINAL ÷ 40 hrs/week</p>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        The formula combines fixed setup hours with variable
                        parameters based on your project's complexity. A 20%
                        buffer is applied to account for unexpected challenges.
                    </p>
                </div>
            </SectionAccordion>

            <SectionAccordion title="Fixed Setup (24 hours)">
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">
                        Every project includes these foundational items
                        regardless of size:
                    </p>
                    <ul
                        class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"
                    >
                        <li>
                            <strong
                                >Project Setup & Architecture (5 hrs):</strong
                            >
                            Scaffolding, API client, types, layout, routing,
                            SEO, performance, analytics
                        </li>
                        <li>
                            <strong>Shared Components (7 hrs):</strong>
                            Navigation, breadcrumbs, pagination, search, cards,
                            buttons, forms, modals, toasts, skeletons, error
                            states, animations
                        </li>
                        <li>
                            <strong>QA & Polish (5 hrs):</strong> Responsive
                            testing, cross-browser testing, performance
                            optimization, content population, SEO verification,
                            bug fixing
                        </li>
                        <li>
                            <strong>Deployment & Handover (3 hrs):</strong>
                            CI/CD, environment config, DNS/SSL, documentation,
                            training
                        </li>
                        <li>
                            <strong>Dynamic Pages Integration (4 hrs):</strong>
                            API, route resolver, section renderer, global search
                        </li>
                    </ul>
                </div>
            </SectionAccordion>

            <SectionAccordion title="Variable Parameters">
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">
                        These scale based on your project's specific needs:
                    </p>
                    <RateTable />
                </div>
            </SectionAccordion>

            <SectionAccordion title="Optional Features">
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">
                        Additional features that can be added to any project:
                    </p>
                    <div class="overflow-x-auto">
                        <table
                            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                        >
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Feature
                                    </th>
                                    <th
                                        class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Hours
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <tr
                                    v-for="feature in optionalFeatures"
                                    :key="feature.id"
                                >
                                    <td class="px-6 py-4">
                                        <div
                                            class="font-medium text-gray-900 dark:text-white"
                                        >
                                            {{ feature.name }}
                                        </div>
                                        <div
                                            class="text-sm text-gray-500 dark:text-gray-400"
                                        >
                                            {{ feature.description }}
                                        </div>
                                    </td>
                                    <td
                                        class="px-6 py-4 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        +{{ feature.hours }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </SectionAccordion>

            <SectionAccordion title="Example Calculation">
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">
                        Bank Corporate Website example:
                    </p>
                    <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <table class="min-w-full">
                            <tbody
                                class="divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Fixed Setup
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        24 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Content Pairs (Articles, Careers) — 2 ×
                                        8
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        16 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Single Module (Team) — 1 × 4
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        4 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Simple Sections — 3 × 1
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        3 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Standard Sections — 3 × 2
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        6 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Home Page — 1 × 10
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        10 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Utility Page (Contact) — 1 × 3
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        3 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Static Pages (About, Privacy, Terms) — 3
                                        × 1
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        3 hrs
                                    </td>
                                </tr>
                                <tr class="font-semibold">
                                    <td
                                        class="py-2 text-gray-900 dark:text-white"
                                    >
                                        Base Total
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        69 hrs
                                    </td>
                                </tr>
                                <tr
                                    class="font-semibold text-primary-600 dark:text-primary-400"
                                >
                                    <td class="py-2">Final Estimate (×1.20)</td>
                                    <td class="py-2 text-right font-mono">
                                        ~83 hrs
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        class="py-2 text-gray-600 dark:text-gray-300"
                                    >
                                        Timeline (1 developer)
                                    </td>
                                    <td
                                        class="py-2 text-right font-mono text-gray-900 dark:text-white"
                                    >
                                        ~2 weeks
                                    </td>
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
import SectionAccordion from "@/components/shared/SectionAccordion.vue";
import RateTable from "@/components/shared/RateTable.vue";
import { optionalFeatures } from "@/data/optionalFeatures";
</script>

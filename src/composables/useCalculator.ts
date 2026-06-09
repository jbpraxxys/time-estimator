import type { WizardState, CalculatorResult, BreakdownItem } from '@/types'
import { optionalFeatures } from '@/data/optionalFeatures'

const FIXED_HOURS = 24
const BUFFER_MULTIPLIER = 1.20
const HOURS_PER_WEEK = 40

export function useCalculator() {
  function calculate(state: WizardState): CalculatorResult {
    const p1Hours = state.p1 * 8
    const p2Hours = state.p2 * 4
    const p3aHours = state.p3a * 1
    const p3bHours = state.p3b * 2
    const p3cHours = state.p3c * 4
    const p4aHours = state.p4a * 10
    const p4bHours = state.p4b * 3
    const p5Hours = state.p5 * 1

    const variableHours = p1Hours + p2Hours + p3aHours + p3bHours + p3cHours + p4aHours + p4bHours + p5Hours

    const selectedOptional = optionalFeatures.filter(f => state.optionalFeatures.includes(f.id))
    const optionalHours = selectedOptional.reduce((sum, f) => sum + f.hours, 0)

    const baseHours = FIXED_HOURS + variableHours + optionalHours
    const finalHours = Math.round(baseHours * BUFFER_MULTIPLIER)
    const timeline1Dev = Math.round((finalHours / HOURS_PER_WEEK) * 10) / 10
    const timeline2Devs = Math.round((finalHours / (HOURS_PER_WEEK * 2)) * 10) / 10

    const breakdown: BreakdownItem[] = [
      { label: 'Fixed Setup (Sections A–E)', formula: '—', hours: FIXED_HOURS },
    ]

    if (state.p1 > 0) {
      breakdown.push({ label: `Content Listing Pairs (P1)`, formula: `8 × ${state.p1}`, hours: p1Hours })
    }
    if (state.p2 > 0) {
      breakdown.push({ label: `Single-Page Modules (P2)`, formula: `4 × ${state.p2}`, hours: p2Hours })
    }
    if (state.p3a > 0) {
      breakdown.push({ label: `Simple Sections (P3a)`, formula: `1 × ${state.p3a}`, hours: p3aHours })
    }
    if (state.p3b > 0) {
      breakdown.push({ label: `Standard Sections (P3b)`, formula: `2 × ${state.p3b}`, hours: p3bHours })
    }
    if (state.p3c > 0) {
      breakdown.push({ label: `Complex Sections (P3c)`, formula: `4 × ${state.p3c}`, hours: p3cHours })
    }
    if (state.p4a > 0) {
      breakdown.push({ label: `Home Pages (P4a)`, formula: `10 × ${state.p4a}`, hours: p4aHours })
    }
    if (state.p4b > 0) {
      breakdown.push({ label: `Utility Pages (P4b)`, formula: `3 × ${state.p4b}`, hours: p4bHours })
    }
    if (state.p5 > 0) {
      breakdown.push({ label: `Static CMS Pages (P5)`, formula: `1 × ${state.p5}`, hours: p5Hours })
    }
    if (optionalHours > 0) {
      breakdown.push({ label: `Optional Features`, formula: `${selectedOptional.map(f => f.name).join(', ')}`, hours: optionalHours })
    }

    breakdown.push({ label: 'Base Total', formula: 'Fixed + Variable + Optional', hours: baseHours })
    breakdown.push({ label: 'Final Estimate (×1.20 buffer)', formula: `${baseHours} × 1.20`, hours: finalHours })

    return {
      fixedHours: FIXED_HOURS,
      variableHours,
      optionalHours,
      baseHours,
      finalHours,
      timeline1Dev,
      timeline2Devs,
      breakdown,
    }
  }

  return { calculate }
}

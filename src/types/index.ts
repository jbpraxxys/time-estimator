export interface WizardState {
  currentStep: number
  p1: number
  p2: number
  p3a: number
  p3b: number
  p3c: number
  p4a: number
  p4b: number
  p5: number
  optionalFeatures: string[]
  isComplete: boolean
}

export interface OptionalFeature {
  id: string
  name: string
  hours: number
  description: string
}

export interface Scenario {
  id: string
  name: string
  description: string
  params: {
    p1: number
    p2: number
    p3a: number
    p3b: number
    p3c: number
    p4a: number
    p4b: number
    p5: number
  }
  optionalFeatures: string[]
}

export interface BreakdownItem {
  label: string
  formula: string
  hours: number
}

export interface CalculatorResult {
  fixedHours: number
  variableHours: number
  optionalHours: number
  baseHours: number
  finalHours: number
  timeline1Dev: number
  timeline2Devs: number
  breakdown: BreakdownItem[]
}

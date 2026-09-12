import type { FinancialPlan } from '../models/financialPlan';

const FINANCIAL_PLAN_KEY = 'finday-financial-plan';

export function saveFinancialPlan(financialPlan: FinancialPlan): void {
  localStorage.setItem(FINANCIAL_PLAN_KEY, JSON.stringify(financialPlan));
}

export function getFinancialPlan(): FinancialPlan | null {
  const data = localStorage.getItem(FINANCIAL_PLAN_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as FinancialPlan;
}

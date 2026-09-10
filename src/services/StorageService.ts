import type { BudgetInput } from '../models/finance';

const BUDGET_KEY = 'finday-budget';

export function saveBudget(budget: BudgetInput): void {
  localStorage.setItem(BUDGET_KEY, JSON.stringify(budget));
}

export function getBudget(): BudgetInput | null {
  const data = localStorage.getItem(BUDGET_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as BudgetInput;
}

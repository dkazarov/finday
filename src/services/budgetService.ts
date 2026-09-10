import type { BudgetInput, BudgetResult } from '../models/finance';

export function calculateBudget(budgetInput: BudgetInput): BudgetResult {
  if (budgetInput.daysRemaining <= 0) {
    return {
      dailyAmount: 0,
    };
  }

  return {
    dailyAmount:
      (budgetInput.balance - budgetInput.plannedExpenses) /
      budgetInput.daysRemaining,
  };
}

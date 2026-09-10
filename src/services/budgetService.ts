import { BudgetInput } from '../models/finance';

export function calculateBudget(budgetInput: BudgetInput): number {
  if (budgetInput.daysRemaining <= 0) {
    return 0;
  }

  return (
    (budgetInput.balance - budgetInput.plannedExpenses) /
    budgetInput.daysRemaining
  );
}

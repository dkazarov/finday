export interface BudgetInput {
  balance: number;
  plannedExpenses: number;
  daysRemaining: number;
}

export interface BudgetResult {
  dailyAmount: number;
}

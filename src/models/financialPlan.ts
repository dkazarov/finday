export type FinancialMode = 'next-income' | 'financial-space' | 'unknown';

export interface FinancialPlan {
  balance: number;
  mode: FinancialMode;
  financialHorizon: number | null;
  nextIncomeDate: string | null;
  cycleStartDate: string;
}

export interface DailySpending {
  amount: number;
  financialHorizon: number;
}

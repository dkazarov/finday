import type { DailySpending, FinancialPlan } from '../models/financialPlan';

export function calculateDailySpending(
  financialPlan: FinancialPlan,
): DailySpending {
  if (
    financialPlan.financialHorizon === null ||
    financialPlan.financialHorizon <= 0
  ) {
    return {
      amount: 0,
      financialHorizon: 0,
    };
  }

  return {
    amount: financialPlan.balance / financialPlan.financialHorizon,
    financialHorizon: financialPlan.financialHorizon,
  };
}

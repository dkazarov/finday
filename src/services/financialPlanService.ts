import type { DailySpending, FinancialPlan } from '../models/financialPlan';

export function calculateFinancialHorizon(
  financialPlan: FinancialPlan,
  today: Date,
): number {
  if (financialPlan.mode === 'next-income') {
    if (financialPlan.nextIncomeDate === null) {
      return 0;
    }

    const nextIncomeDate = new Date(financialPlan.nextIncomeDate);

    const currentDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const incomeDay = new Date(
      nextIncomeDate.getFullYear(),
      nextIncomeDate.getMonth(),
      nextIncomeDate.getDate(),
    );

    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const millisecondsUntilIncome = incomeDay.getTime() - currentDay.getTime();

    return Math.max(
      Math.floor(millisecondsUntilIncome / millisecondsPerDay),
      0,
    );
  }

  if (financialPlan.financialHorizon === null) {
    return 0;
  }

  return financialPlan.financialHorizon;
}

// Вираховує кількість днів від початкової дати циклу до сьогоднішньої дати
// та повертає кількість днів, що залишилися до кінця фінансового горизонту.

export function calculateDaysRemaining(
  financialPlan: FinancialPlan,
  today: Date,
): number {
  const financialHorizon = calculateFinancialHorizon(financialPlan, today);

  if (financialHorizon === 0) {
    return 0;
  }

  const startDate = new Date(financialPlan.cycleStartDate);

  const startDay = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );

  const currentDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const millisecondsPassed = currentDay.getTime() - startDay.getTime();

  const daysPassed = Math.floor(millisecondsPassed / millisecondsPerDay);

  const daysRemaining = financialHorizon - daysPassed;

  return Math.max(daysRemaining, 0);
}

export function calculateDailySpending(
  financialPlan: FinancialPlan,
): DailySpending {
  const daysRemaining = calculateDaysRemaining(financialPlan, new Date());

  if (daysRemaining <= 0) {
    return {
      amount: 0,
      financialHorizon: 0,
    };
  }

  return {
    amount: financialPlan.balance / daysRemaining,
    financialHorizon: daysRemaining,
  };
}

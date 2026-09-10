export function calculateDailyBudget(
  availableAmount: number,
  daysRemaining: number,
): number {
  if (daysRemaining <= 0) {
    return 0;
  }

  return availableAmount / daysRemaining;
}

import { initializeIcons } from './icons/icons';
import './styles/main.css';

// Luicsd icons
initializeIcons();

import type { BudgetInput } from './models/finance';
import { calculateBudget } from './services/budgetService';

const budgetInput: BudgetInput = {
  balance: 10000,
  plannedExpenses: 2000,
  daysRemaining: 5,
};

const budgetResult = calculateBudget(budgetInput);

console.log(
  'Сьогодні можна витратити:',
  budgetResult.dailyAmount,
);

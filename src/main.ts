import './styles/main.css';

import { initializeIcons } from './icons/icons';
import { calculateDailySpending } from './services/financialPlanService';
import { getFinancialPlan, saveFinancialPlan } from './services/storageService';
import { financialPlanData } from './data/financialPlanData';

initializeIcons();

let financialPlan = getFinancialPlan();

if (!financialPlan) {
  saveFinancialPlan(financialPlanData);
  financialPlan = financialPlanData;
}

console.log('Фінансовий план:', financialPlan);

const dailySpending = calculateDailySpending(financialPlan);

console.log('Результат:', dailySpending);
console.log('Сьогодні можна витратити:', dailySpending.amount);

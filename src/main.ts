import './styles/main.css';

import { initializeIcons } from './icons/icons';
import { getFinancialPlan, saveFinancialPlan } from './services/storageService';
import { financialPlanData } from './data/financialPlanData';

initializeIcons();

const financialPlan = getFinancialPlan();

// замініть фінансовий план, якщо він не існує
if (!financialPlan) {
  saveFinancialPlan(financialPlanData);
}

import { initializeIcons } from './icons/icons';
import './styles/main.css';
import { calculateBudget } from './services/budgetService';
import { budgetInput } from './data/budgetData';

initializeIcons();

const budgetResult = calculateBudget(budgetInput);

console.log(budgetResult);
console.log(budgetResult.dailyAmount);

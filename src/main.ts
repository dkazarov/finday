import { initializeIcons } from './icons/icons';
import './styles/main.css';
import { calculateBudget } from './services/budgetService';
import { budgetInput } from './data/budgetData';
import { saveBudget, getBudget } from './services/StorageService';

initializeIcons();

let savedBudget = getBudget();

if (!savedBudget) {
  saveBudget(budgetInput);
  savedBudget = budgetInput;
}

console.log('Збережений бюджет:', savedBudget);

const budgetResult = calculateBudget(savedBudget);

console.log('Результат:', budgetResult);
console.log('Сьогодні можна витратити:', budgetResult.dailyAmount);

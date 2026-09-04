import type { PizzaCategory } from './signature-pizzas';

export const signatureMenuFilters: Array<{ id: PizzaCategory | 'all'; label: string }> = [
  { id: 'all', label: 'All Masters' },
  { id: 'classic', label: 'Neapolitan Classics' },
  { id: 'white', label: 'Pizza Bianca' },
  { id: 'gourmet', label: 'Truffle & Reserve' },
];

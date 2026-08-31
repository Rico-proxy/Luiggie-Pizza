export type Option = {
  id: string;
  name: string;
  note: string;
  price: number;
  color?: string;
};

export const crustOptions: Option[] = [
  { id: 'sourdough', name: '80h Sourdough', note: 'Airy and blistered', price: 0 },
  { id: 'roman', name: 'Thin Roman Crisp', note: 'Extra light', price: 1.5 },
  { id: 'stuffed', name: 'Ricotta Stuffed Rim', note: 'Decadent rim', price: 4 },
];

export const sauceOptions: Option[] = [
  { id: 'marzano', name: 'San Marzano DOP', note: 'Sweet and tangy red', price: 0, color: '#BC472B' },
  { id: 'truffle', name: 'Black Truffle Cream', note: 'Rich umami white', price: 3.5, color: '#3A332C' },
  { id: 'pistachio', name: 'Bronte Pistachio Pesto', note: 'Nutty green', price: 3, color: '#4A5D4E' },
];

export const toppingOptions: Option[] = [
  { id: 'prosciutto', name: 'Prosciutto di Parma 24mo', note: 'Aged and delicate', price: 4 },
  { id: 'soppressata', name: 'Spicy Soppressata', note: 'Calabrian heat', price: 3 },
  { id: 'basil', name: 'Fresh Basil & Olive Oil', note: 'Bright finish', price: 1 },
  { id: 'porcini', name: 'Wild Porcini Mushrooms', note: 'Forest umami', price: 2.5 },
  { id: 'honey', name: 'Hot Calabrian Honey', note: 'Sweet heat', price: 1.5 },
  { id: 'stracciatella', name: 'Stracciatella Core', note: 'Creamy center', price: 3.5 },
];

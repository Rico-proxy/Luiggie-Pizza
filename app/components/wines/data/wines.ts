import { luiggieImages } from '~/assets/images';

export type Wine = {
  id: string;
  name: string;
  label: string;
  description: string;
  price: number;
  image: string;
  tone: 'sienna' | 'olive';
};

export const wines: Wine[] = [
  {
    id: 'brunello',
    name: 'Brunello di Montalcino D.O.C.G. 2018',
    label: 'Recommended Pairing',
    description:
      'Deep ruby red with wild berries, black truffle, and subtle spice. Excellent with Tartufo Nero & Guanciale.',
    price: 85,
    image: luiggieImages.brunelloWine,
    tone: 'sienna',
  },
  {
    id: 'fiano',
    name: 'Fiano di Avellino Riserva D.O.C.G.',
    label: 'White & Sparkling',
    description:
      'Crisp volcanic white wine with hazelnut, chamomile, and honey. Matched with Mortadella & Bronte Pistachio Bianca.',
    price: 52,
    image: luiggieImages.fianoWine,
    tone: 'olive',
  },
  {
    id: 'prosecco',
    name: 'Valdobbiadene Prosecco Superiore',
    label: 'Bright Sparkling',
    description:
      'Fine bubbles, green apple, and citrus blossom. Fresh with Margherita, basil, and light starters.',
    price: 46,
    image: luiggieImages.proseccoWine,
    tone: 'olive',
  },
  {
    id: 'chianti',
    name: 'Chianti Classico Riserva',
    label: 'House Red',
    description:
      'Cherry, leather, and warm spice with a dry finish. Built for pepperoni, sausage, and tomato-rich pies.',
    price: 58,
    image: luiggieImages.chiantiWine,
    tone: 'sienna',
  },
];

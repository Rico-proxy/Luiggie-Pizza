import { luiggieImages } from '~/assets/images';

export type PizzaCategory = 'classic' | 'white' | 'gourmet';

export type MenuItem = {
  id: string;
  name: string;
  category: PizzaCategory;
  description: string;
  price: number;
  image: string;
  badge: string;
  badgeTone: 'dark' | 'olive' | 'gold';
};

export const signaturePizzas: MenuItem[] = [
  {
    id: 'tartufo-nero',
    name: 'Tartufo Nero & Guanciale',
    category: 'gourmet',
    description:
      'Black truffle veloute, Fior di Latte, crispy aged guanciale, roasted hazelnuts, rosemary oil.',
    price: 28,
    image: luiggieImages.tartufoNero,
    badge: "Chef's Selection",
    badgeTone: 'dark',
  },
  {
    id: 'margherita-extra',
    name: 'Margherita Extra D.O.P.',
    category: 'classic',
    description:
      'Crushed San Marzano D.O.P., fresh Mozzarella di Bufala Campana, cold-pressed EVOO, basil leaves.',
    price: 21.5,
    image: luiggieImages.margheritaExtra,
    badge: 'Traditional D.O.P.',
    badgeTone: 'olive',
  },
  {
    id: 'pistachio-mortadella',
    name: 'Pistachio & Mortadella',
    category: 'white',
    description:
      'Bronte pistachio cream, Fior di Latte, Mortadella Bologna D.O.P., fresh stracciatella cheese.',
    price: 25,
    image: luiggieImages.pistachioMortadella,
    badge: 'Signature White',
    badgeTone: 'gold',
  },
];

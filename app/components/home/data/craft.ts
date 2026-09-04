import type { LucideIcon } from 'lucide-react';
import { Droplets, Flame, Pizza, Wheat } from 'lucide-react';

type CraftStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'sienna' | 'olive' | 'gold';
};

export const craftSection = {
  eyebrow: 'The Uncompromising Standard',
  title: 'Four Elements of Neapolitan Craftsmanship',
};

export const craftSteps: CraftStep[] = [
  {
    title: '1. 80-Hour Dough',
    description: 'Tipo 00 stone-ground organic Vesuvian wheat naturally leavened.',
    icon: Wheat,
    tone: 'sienna',
  },
  {
    title: '2. San Marzano DOP',
    description: 'Hand-crushed tomatoes grown exclusively in volcanic Agro Sarnese soil.',
    icon: Droplets,
    tone: 'olive',
  },
  {
    title: '3. Fresh Fior di Latte',
    description: 'Flown in bi-weekly directly from small creameries in Agerola.',
    icon: Pizza,
    tone: 'gold',
  },
  {
    title: '4. 485C Oven Heat',
    description: 'Seasoned oak and olive wood create an authentic leopard crust.',
    icon: Flame,
    tone: 'sienna',
  },
];

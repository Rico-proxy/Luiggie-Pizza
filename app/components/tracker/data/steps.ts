import { BadgeCheck, Flame, ShieldCheck, Store } from 'lucide-react';

export const trackerSteps = [
  {
    title: 'Confirmed',
    detail: 'Chef Marco verified the sourdough fermentation.',
    icon: BadgeCheck,
    status: 'done',
  },
  {
    title: 'Hand-Stretched',
    detail: 'The dough has been opened by hand and dressed.',
    icon: ShieldCheck,
    status: 'done',
  },
  {
    title: 'Oven Baking',
    detail: 'Currently in the Vesuvian heat chamber.',
    icon: Flame,
    status: 'active',
  },
  {
    title: 'Courier En Route',
    detail: 'Thermal delivery box ready for dispatch.',
    icon: Store,
    status: 'next',
  },
] as const;

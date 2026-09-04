type HeroStat = {
  label: string;
  value: string;
  tone: 'dark' | 'sienna' | 'olive';
};

export const heroContent = {
  eyebrow: '100% Organic San Marzano D.O.P. & Vesuvian Flour',
  title: 'Where Neapolitan Tradition Meets',
  accent: 'Modern Craft.',
  description:
    'Hand-loomed sourdough fermented for 80 hours. Baked in a custom hand-built Vesuvian lava stone oven at 485C for exactly 90 blistering seconds.',
  primaryCta: 'Build Pizza',
  secondaryCta: 'Reserve Table',
  imageAlt: 'Neapolitan pizza',
  awardTitle: 'Gambero Rosso',
  awardDetail: '3 Slices Award 2026',
  heatTitle: 'Express Wood Bake',
  heatDetail: '90 Seconds to Crisp',
};

export const heroStats: HeroStat[] = [
  { label: 'Slow Fermentation', value: '80 Hrs', tone: 'dark' },
  { label: 'Lava Stone Heat', value: '485C', tone: 'sienna' },
  { label: 'Campania Imported', value: '100%', tone: 'olive' },
];

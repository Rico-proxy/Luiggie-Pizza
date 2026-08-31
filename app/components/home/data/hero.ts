type HeroStat = {
  label: string;
  value: string;
  tone: 'dark' | 'sienna' | 'olive';
};

export const heroStats: HeroStat[] = [
  { label: 'Slow Fermentation', value: '80 Hrs', tone: 'dark' },
  { label: 'Lava Stone Heat', value: '485C', tone: 'sienna' },
  { label: 'Campania Imported', value: '100%', tone: 'olive' },
];

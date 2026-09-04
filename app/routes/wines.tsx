import type { Route } from './+types/wines';
import { WinePage } from '~/components/wines/wine-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Wines | Luiggie Pizza' },
    {
      name: 'description',
      content: 'Reserve chef counter experiences and order Italian wine pairings at Luiggie Pizza.',
    },
  ];
}

export default function WinesRoute() {
  return <WinePage />;
}

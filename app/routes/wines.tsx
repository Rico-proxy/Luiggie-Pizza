import type { Route } from './+types/wines';
import { WinePage } from '~/components/wines/wine-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Wines | FORNACE 800' },
    {
      name: 'description',
      content: 'Reserve chef counter experiences and order Italian wine pairings at FORNACE 800.',
    },
  ];
}

export default function WinesRoute() {
  return <WinePage />;
}

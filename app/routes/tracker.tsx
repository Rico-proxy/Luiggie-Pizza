import type { Route } from './+types/tracker';
import { TrackerPage } from '~/components/tracker/tracker-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Order | FORNACE 800' },
    {
      name: 'description',
      content: 'Follow your FORNACE 800 order from sourdough stretch to oven bake and delivery.',
    },
  ];
}

export default function TrackerRoute() {
  return <TrackerPage />;
}

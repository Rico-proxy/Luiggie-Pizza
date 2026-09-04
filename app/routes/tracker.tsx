import type { Route } from './+types/tracker';
import { TrackerPage } from '~/components/tracker/tracker-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Order | Luiggie Pizza' },
    {
      name: 'description',
      content: 'Follow your Luiggie Pizza order from sourdough stretch to oven bake and delivery.',
    },
  ];
}

export default function TrackerRoute() {
  return <TrackerPage />;
}

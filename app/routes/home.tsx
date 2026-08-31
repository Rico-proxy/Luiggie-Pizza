import type { Route } from './+types/home';
import { HomePage } from '~/components/home/home-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Luiggie | Pizza & Wine' },
    {
      name: 'description',
      content:
        'Neapolitan pizza, custom builds, order tracking, and Italian wine pairings.',
    },
  ];
}

export default function Home() {
  return (
    <div className="isolate relative overflow-hidden">
      <div className="z-20 fixed inset-0 overflow-hidden pointer-events-none">
        
      </div>
      <div className="z-10 relative space-y-16">
        <HomePage />
      </div>
    </div>
  );
}

import type { Route } from './+types/menu';
import { MenuPage } from '~/components/menu/menu-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Menu | Luiggie Pizza' },
    {
      name: 'description',
      content: 'Build a custom Luiggie Pizza pie with crusts, sauces, and toppings.',
    },
  ];
}

export default function MenuRoute() {
  return <MenuPage />;
}

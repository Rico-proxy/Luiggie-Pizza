import type { Route } from './+types/menu';
import { MenuPage } from '~/components/menu/menu-page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Menu | FORNACE 800' },
    {
      name: 'description',
      content: 'Build a custom FORNACE 800 pizza with crusts, sauces, and toppings.',
    },
  ];
}

export default function MenuRoute() {
  return <MenuPage />;
}

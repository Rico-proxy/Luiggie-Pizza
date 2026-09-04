import { NavLink } from 'react-router';
import { Menu, ShoppingBag, X, Wine } from 'lucide-react';
import { useState } from 'react';
import { navItems } from './data/nav';
import { useCart } from '~/components/cart/cart-context';
import { Button } from '~/components/ui/button';
import { BrandLogo } from '~/components/shared/brand-logo';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  return (
    <header className="top-0 z-40 sticky bg-fornace-card/90 shadow-sm backdrop-blur-md px-4 md:px-6 py-3.5 border-fornace-border border-b">
      <div className="flex justify-between items-center gap-4 mx-auto max-w-7xl">
        <BrandLogo onClick={() => setIsOpen(false)} />

        <nav className="hidden lg:flex items-center bg-fornace-sand/80 p-1.5 border border-fornace-border/80 rounded-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-fornace-sienna text-white shadow-sm'
                    : 'text-fornace-muted hover:text-fornace-dark'
                }`
              }>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            className="flex items-center gap-2.5 bg-fornace-dark hover:bg-black shadow-soft px-4 py-2.5 rounded-xl font-semibold text-white text-xs transition"
            onClick={openCart}>
            <ShoppingBag className="w-4 h-4 text-fornace-gold" />
            Basket
            <span className="bg-fornace-sienna px-2 py-0.5 rounded-full font-bold text-[11px]">
              {itemCount}
            </span>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            className="relative bg-fornace-dark p-2.5 rounded-xl text-white"
            onClick={openCart}>
            <ShoppingBag className="w-5 h-5" />
            {itemCount ? (
              <span className="-top-1 -right-1 absolute flex justify-center items-center bg-fornace-sienna rounded-full w-5 h-5 font-bold text-[10px]">
                {itemCount}
              </span>
            ) : null}
          </Button>
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            className="bg-fornace-card p-2.5 border border-fornace-border rounded-xl text-fornace-dark"
            onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <nav className="lg:hidden gap-2 grid bg-fornace-card mx-auto mt-3 p-2 border border-fornace-border rounded-2xl max-w-7xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-fornace-sienna text-white'
                    : 'text-fornace-muted hover:bg-fornace-sand hover:text-fornace-dark'
                }`
              }>
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2 px-4 py-3 font-bold text-fornace-sienna text-xs">
            <Wine className="w-4 h-4 text-fornace-gold" />
            Chef table reservations open tonight
          </div>
        </nav>
      ) : null}
    </header>
  );
}

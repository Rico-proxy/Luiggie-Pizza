import { Link } from 'react-router';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useCart } from './cart-context';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';

export function CartDrawer() {
  const { items, isCartOpen, closeCart, adjustQuantity, subtotal } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <Button
        type="button"
        aria-label="Close cart"
        variant="unstyled"
        size="unstyled"
        className="absolute inset-0 cursor-default"
        onClick={closeCart}
      />
      <aside className="relative flex h-full w-full max-w-md flex-col space-y-6 border-l border-fornace-border bg-fornace-card p-6 shadow-float">
        <div className="flex items-center justify-between border-b border-fornace-border pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-fornace-sienna" />
            <h2 className="font-serif text-xl font-bold text-fornace-dark">Your Order Basket</h2>
          </div>
          <Button
            type="button"
            variant="unstyled"
            size="unstyled"
            className="rounded-full p-2 text-fornace-muted transition hover:bg-fornace-sand hover:text-fornace-dark"
            onClick={closeCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {items.length ? (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl border border-fornace-border bg-fornace-sand/50 p-3.5">
                <div>
                  <p className="text-xs font-bold text-fornace-dark">{item.name}</p>
                  <p className="text-[11px] font-semibold text-fornace-sienna">
                    {formatCurrency(item.price)} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="unstyled"
                    size="unstyled"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                    onClick={() => adjustQuantity(item.id, -1)}>
                    <Minus className="h-3.5 w-3.5" />
                  </Button>
                  <span className="w-4 text-center text-xs font-bold text-fornace-dark">
                    {item.quantity}
                  </span>
                  <Button
                    type="button"
                    variant="unstyled"
                    size="unstyled"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                    onClick={() => adjustQuantity(item.id, 1)}>
                    <Plus className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="rounded-2xl border border-fornace-border bg-fornace-sand/50 p-4 text-sm text-fornace-muted">
              Your basket is empty.
            </p>
          )}
        </div>

        <div className="space-y-4 border-t border-fornace-border pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-fornace-muted">Subtotal</span>
            <span className="font-heading text-3xl font-bold text-fornace-dark">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <Link
            to="/tracker"
            onClick={closeCart}
            className="block w-full rounded-2xl bg-fornace-sienna py-4 text-center text-sm font-bold text-white shadow-warm transition hover:bg-fornace-sienna-light">
            Proceed to Oven Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}

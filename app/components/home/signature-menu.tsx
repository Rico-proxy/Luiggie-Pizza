import { useMemo, useState } from 'react';
import { Crown, Plus } from 'lucide-react';
import { signaturePizzas, type PizzaCategory } from './data/signature-pizzas';
import { signatureMenuFilters } from './data/signature-menu-filters';
import { useCart } from '~/components/cart/cart-context';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';

const badgeClasses = {
  dark: 'bg-fornace-dark/90 text-fornace-gold border-fornace-gold/30',
  olive: 'bg-fornace-olive text-white border-fornace-olive',
  gold: 'bg-fornace-gold text-fornace-dark border-fornace-gold',
};

export function SignatureMenu() {
  const [activeFilter, setActiveFilter] = useState<PizzaCategory | 'all'>('all');
  const { addItem } = useCart();

  const pizzas = useMemo(
    () =>
      activeFilter === 'all'
        ? signaturePizzas
        : signaturePizzas.filter((pizza) => pizza.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="space-y-8">
      <div className="flex flex-col justify-between gap-4 border-b border-fornace-border pb-6 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
            La Collezione
          </span>
          <h2 className="mt-1 text-4xl font-normal text-fornace-dark">
            Signature Pizzas of the Season
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 rounded-xl border border-fornace-border bg-fornace-sand p-1">
          {signatureMenuFilters.map((filter) => (
            <Button
              key={filter.id}
              type="button"
              variant="unstyled"
              size="unstyled"
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeFilter === filter.id
                  ? 'bg-fornace-sienna text-white shadow-sm'
                  : 'text-fornace-muted hover:text-fornace-dark'
              }`}
              onClick={() => setActiveFilter(filter.id)}>
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pizzas.map((pizza) => (
          <article
            key={pizza.id}
            className="group overflow-hidden rounded-3xl border border-fornace-border bg-fornace-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <div className="relative h-60 overflow-hidden bg-fornace-sand">
              <img
                src={pizza.image}
                alt={pizza.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-[11px] font-bold ${badgeClasses[pizza.badgeTone]}`}>
                {pizza.badgeTone === 'dark' ? <Crown className="mr-1 inline h-3 w-3" /> : null}
                {pizza.badge}
              </span>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-fornace-dark transition group-hover:text-fornace-sienna">
                  {pizza.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-fornace-muted">
                  {pizza.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-fornace-border/60 pt-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-fornace-muted">
                    Individual 12&quot;
                  </span>
                  <span className="font-heading text-2xl font-bold text-fornace-dark">
                    {formatCurrency(pizza.price)}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="unstyled"
                  size="unstyled"
                  className="flex items-center gap-2 rounded-xl bg-fornace-sienna px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-fornace-sienna-light"
                  onClick={() => addItem({ id: pizza.id, name: pizza.name, price: pizza.price })}>
                  <Plus className="h-3.5 w-3.5" />
                  Add Basket
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

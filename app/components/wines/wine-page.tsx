import { Wine } from 'lucide-react';
import { wines } from './data/wines';
import { useCart } from '~/components/cart/cart-context';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';

export function WinePage() {
  const { addItem, showToast } = useCart();

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-fornace-dark p-8 text-white shadow-float lg:p-14">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-fornace-gold">
            Wine List
          </span>
          <h1 className="text-4xl font-normal lg:text-6xl">
            Authentic Italian Wine & Pizza Pairings
          </h1>
          <p className="text-sm leading-relaxed text-[#F3EDE2]/80">
            Hand-selected bio-dynamic wines imported from boutique vineyards across Tuscany,
            Campania, and Sicily, curated specifically for our wood-fired sourdough.
          </p>
        </div>
        <Wine className="absolute -right-10 -top-10 h-56 w-56 rotate-12 text-fornace-gold/10" />
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {wines.map((wine) => (
          <article
            key={wine.id}
            className="group overflow-hidden rounded-3xl border border-fornace-border bg-fornace-card paper-shadow">
            <div className="relative h-64 overflow-hidden bg-fornace-sand">
              <img
                src={wine.image}
                alt={wine.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fornace-dark/65 via-fornace-dark/5 to-transparent" />
              <span
                className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs font-bold uppercase ${
                  wine.tone === 'sienna'
                    ? 'bg-fornace-sienna text-white'
                    : 'bg-fornace-olive text-white'
                }`}>
                {wine.label}
              </span>
              <div className="absolute bottom-5 left-5 right-5">
                <h2 className="max-w-md text-3xl text-white">{wine.name}</h2>
              </div>
            </div>
            <div className="space-y-5 p-6">
              <p className="text-sm leading-relaxed text-fornace-muted">{wine.description}</p>
              <div className="flex items-center justify-between border-t border-fornace-border pt-4">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-fornace-muted">
                    Bottle 750ml
                  </span>
                  <span className="font-heading text-3xl font-bold text-fornace-dark">
                    {formatCurrency(wine.price)}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="unstyled"
                  size="unstyled"
                  className="rounded-2xl bg-fornace-dark px-6 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-black"
                  onClick={() => addItem({ id: wine.id, name: wine.name, price: wine.price })}>
                  Add Bottle
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-fornace-border bg-fornace-sand/60 p-8 text-center">
        <h2 className="text-3xl font-normal text-fornace-dark">Reserve a Table</h2>
        <p className="text-xs text-fornace-muted">
          Join Master Pizzaiolo Marco for an exclusive 5-course sourdough tasting menu seated
          directly in front of the Vesuvian lava stone oven.
        </p>
        <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name..."
            className="rounded-xl border border-fornace-border bg-fornace-card px-4 py-3 text-xs text-fornace-dark focus:border-fornace-sienna focus:outline-none"
          />
          <input
            type="date"
            className="rounded-xl border border-fornace-border bg-fornace-card px-4 py-3 text-xs text-fornace-dark focus:border-fornace-sienna focus:outline-none"
          />
        </div>
        <Button
          type="button"
          variant="unstyled"
          size="unstyled"
          className="w-full rounded-2xl bg-fornace-sienna py-4 font-bold text-white shadow-warm transition hover:bg-fornace-sienna-light"
          onClick={() =>
            showToast('Reservation Requested', 'Our concierge will contact you shortly.')
          }>
          Request Chef Counter Reservation
        </Button>
      </section>
    </div>
  );
}

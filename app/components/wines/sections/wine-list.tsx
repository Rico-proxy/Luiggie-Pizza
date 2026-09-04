import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';
import { winePage } from '../data/wine-page';
import { wines, type Wine } from '../data/wines';

type WineListProps = {
  onAdd: (wine: Wine) => void;
};

export function WineList({ onAdd }: WineListProps) {
  return (
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
                  {winePage.list.bottleLabel}
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
                onClick={() => onAdd(wine)}>
                {winePage.list.addLabel}
              </Button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

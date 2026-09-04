import { formatCurrency } from '~/lib/format';
import { pizzaBuilder } from '../data/builder';

export function BuilderHeader({ total }: { total: number }) {
  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-fornace-border bg-fornace-card p-8 paper-shadow lg:flex-row lg:items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
          {pizzaBuilder.header.eyebrow}
        </span>
        <h1 className="mt-1 text-4xl font-normal text-fornace-dark">
          {pizzaBuilder.header.title}
        </h1>
        <p className="mt-1 text-sm text-fornace-muted">{pizzaBuilder.header.description}</p>
      </div>
      <div className="flex items-center gap-4 rounded-2xl border border-fornace-border bg-fornace-sand/80 px-6 py-3">
        <span className="text-xs font-bold uppercase text-fornace-muted">
          {pizzaBuilder.header.totalLabel}
        </span>
        <span className="font-heading text-3xl font-bold text-fornace-sienna">
          {formatCurrency(total)}
        </span>
      </div>
    </section>
  );
}

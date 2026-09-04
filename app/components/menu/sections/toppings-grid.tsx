import { Check } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';
import { pizzaBuilder } from '../data/builder';
import { toppingOptions, type Option } from '../data/options';

type ToppingsGridProps = {
  toppings: Option[];
  onToggle: (option: Option) => void;
};

export function ToppingsGrid({ toppings, onToggle }: ToppingsGridProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-fornace-border bg-fornace-card p-6">
      <div className="flex items-center gap-2 border-b border-fornace-border pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fornace-sienna text-xs font-bold text-white">
          {pizzaBuilder.steps.toppings.number}
        </span>
        <h2 className="font-serif text-lg font-bold text-fornace-dark">
          {pizzaBuilder.steps.toppings.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {toppingOptions.map((option) => {
          const isSelected = toppings.some((item) => item.id === option.id);

          return (
            <Button
              key={option.id}
              type="button"
              variant="unstyled"
              size="unstyled"
              className={`flex min-h-20 items-center justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                isSelected
                  ? 'border-fornace-sienna bg-fornace-sienna/5'
                  : 'border-fornace-border hover:border-fornace-sienna'
              }`}
              onClick={() => onToggle(option)}>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-snug text-fornace-dark">{option.name}</p>
                <p className="mt-1 text-xs font-semibold text-fornace-muted">
                  +{formatCurrency(option.price)}
                </p>
              </div>
              <Check
                className={`h-4 w-4 shrink-0 text-fornace-sienna transition ${
                  isSelected ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </Button>
          );
        })}
      </div>
    </section>
  );
}

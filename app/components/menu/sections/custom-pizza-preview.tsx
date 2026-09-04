import { ShoppingBag } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { pizzaBuilder } from '../data/builder';
import type { Option } from '../data/options';

type CustomPizzaPreviewProps = {
  crust: Option;
  sauce: Option;
  toppings: Option[];
  onAdd: () => void;
};

export function CustomPizzaPreview({
  crust,
  sauce,
  toppings,
  onAdd,
}: CustomPizzaPreviewProps) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-5">
      <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl border border-fornace-border bg-fornace-card p-6 paper-shadow">
        <div className="relative flex h-72 w-72 items-center justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-[10px] border-[#DDA15E] bg-[#E9C46A] shadow-float">
            <div
              className="flex h-52 w-52 items-center justify-center rounded-full shadow-inner transition-colors duration-500"
              style={{ backgroundColor: sauce.color }}>
              <div className="flex h-44 w-44 flex-wrap items-center justify-around rounded-full p-3 opacity-90">
                {Array.from({ length: Math.max(5, toppings.length + 5) }).map((_, index) => (
                  <span
                    key={index}
                    className={`rounded-full shadow-sm ${
                      index % 3 === 0
                        ? 'h-5 w-5 bg-white'
                        : index % 3 === 1
                          ? 'h-4 w-4 bg-fornace-olive'
                          : 'h-3 w-3 bg-fornace-gold'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <span className="absolute bottom-1 rounded-full border border-fornace-gold/30 bg-fornace-dark px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {pizzaBuilder.preview.label}
          </span>
        </div>

        <div className="w-full space-y-2 border-t border-fornace-border pt-4 text-xs">
          <p className="text-[10px] font-bold uppercase tracking-wider text-fornace-muted">
            {pizzaBuilder.preview.recipeHeading}
          </p>
          <div className="flex justify-between text-fornace-dark">
            <span className="font-medium">{pizzaBuilder.preview.crustLabel}</span>
            <span className="font-bold text-fornace-sienna">{crust.name}</span>
          </div>
          <div className="flex justify-between text-fornace-dark">
            <span className="font-medium">{pizzaBuilder.preview.sauceLabel}</span>
            <span className="font-bold text-fornace-sienna">{sauce.name}</span>
          </div>
          <div className="flex justify-between gap-4 text-fornace-dark">
            <span className="font-medium">{pizzaBuilder.preview.toppingsLabel}</span>
            <span className="text-right font-bold">
              {toppings.length
                ? toppings.map((item) => item.name).join(', ')
                : pizzaBuilder.preview.emptyToppings}
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="unstyled"
          size="unstyled"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-fornace-sienna py-4 font-bold text-white shadow-warm transition hover:bg-fornace-sienna-light"
          onClick={onAdd}>
          <ShoppingBag className="h-4 w-4" />
          {pizzaBuilder.preview.cta}
        </Button>
      </div>
    </aside>
  );
}

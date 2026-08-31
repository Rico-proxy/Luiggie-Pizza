import { Check, ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { crustOptions, sauceOptions, toppingOptions, type Option } from './data/options';
import { useCart } from '~/components/cart/cart-context';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';

const basePrice = 19;

function OptionGrid({
  title,
  step,
  options,
  selectedId,
  onSelect,
}: {
  title: string;
  step: number;
  options: Option[];
  selectedId: string;
  onSelect: (option: Option) => void;
}) {
  return (
    <section className="space-y-4 rounded-3xl border border-fornace-border bg-fornace-card p-6">
      <div className="flex items-center gap-2 border-b border-fornace-border pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fornace-sienna text-xs font-bold text-white">
          {step}
        </span>
        <h2 className="font-serif text-lg font-bold text-fornace-dark">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => (
          <Button
            key={option.id}
            type="button"
            variant="unstyled"
            size="unstyled"
            className={`flex min-h-24 flex-col items-start justify-center rounded-2xl p-4 text-left transition ${
              selectedId === option.id
                ? 'border-2 border-fornace-sienna bg-fornace-sienna/5'
                : 'border border-fornace-border hover:border-fornace-sienna'
            }`}
            onClick={() => onSelect(option)}>
            <p className="text-sm font-bold leading-snug text-fornace-dark">{option.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-fornace-muted">
              {option.note}
            </p>
            <p className="mt-2 text-xs font-bold text-fornace-sienna">
              {option.price ? `+${formatCurrency(option.price)}` : 'Standard'}
            </p>
          </Button>
        ))}
      </div>
    </section>
  );
}

export function MenuPage() {
  const [crust, setCrust] = useState(crustOptions[0]);
  const [sauce, setSauce] = useState(sauceOptions[0]);
  const [toppings, setToppings] = useState<Option[]>([]);
  const { addItem, openCart } = useCart();

  const total = useMemo(
    () =>
      basePrice +
      crust.price +
      sauce.price +
      toppings.reduce((sum, topping) => sum + topping.price, 0),
    [crust.price, sauce.price, toppings]
  );

  function toggleTopping(option: Option) {
    setToppings((current) =>
      current.some((item) => item.id === option.id)
        ? current.filter((item) => item.id !== option.id)
        : [...current, option]
    );
  }

  function addCustomPizza() {
    addItem(
      {
        id: `custom-${crust.id}-${sauce.id}-${toppings.map((item) => item.id).join('-') || 'plain'}`,
        name: `Custom (${crust.name})`,
        price: total,
      },
      'Your custom pizza was added to the basket.'
    );
    openCart();
  }

  return (
    <div className="space-y-10">
      <section className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-fornace-border bg-fornace-card p-8 paper-shadow lg:flex-row lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
            Build Your Pizza
          </span>
          <h1 className="mt-1 text-4xl font-normal text-fornace-dark">Choose Your Pizza</h1>
          <p className="mt-1 text-sm text-fornace-muted">
            Pick your crust, sauce, and toppings.
          </p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-fornace-border bg-fornace-sand/80 px-6 py-3">
          <span className="text-xs font-bold uppercase text-fornace-muted">Estimated Total</span>
          <span className="font-heading text-3xl font-bold text-fornace-sienna">
            {formatCurrency(total)}
          </span>
        </div>
      </section>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <OptionGrid
            title="Crust"
            step={1}
            options={crustOptions}
            selectedId={crust.id}
            onSelect={setCrust}
          />
          <OptionGrid
            title="Sauce"
            step={2}
            options={sauceOptions}
            selectedId={sauce.id}
            onSelect={setSauce}
          />
          <section className="space-y-4 rounded-3xl border border-fornace-border bg-fornace-card p-6">
            <div className="flex items-center gap-2 border-b border-fornace-border pb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fornace-sienna text-xs font-bold text-white">
                3
              </span>
              <h2 className="font-serif text-lg font-bold text-fornace-dark">Toppings</h2>
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
                    onClick={() => toggleTopping(option)}>
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
        </div>

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
                          index % 3 === 0 ? 'h-5 w-5 bg-white' : index % 3 === 1 ? 'h-4 w-4 bg-fornace-olive' : 'h-3 w-3 bg-fornace-gold'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="absolute bottom-1 rounded-full border border-fornace-gold/30 bg-fornace-dark px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Live Visualiser
              </span>
            </div>

            <div className="w-full space-y-2 border-t border-fornace-border pt-4 text-xs">
              <p className="text-[10px] font-bold uppercase tracking-wider text-fornace-muted">
                Current Custom Recipe
              </p>
              <div className="flex justify-between text-fornace-dark">
                <span className="font-medium">Crust:</span>
                <span className="font-bold text-fornace-sienna">{crust.name}</span>
              </div>
              <div className="flex justify-between text-fornace-dark">
                <span className="font-medium">Base Sauce:</span>
                <span className="font-bold text-fornace-sienna">{sauce.name}</span>
              </div>
              <div className="flex justify-between gap-4 text-fornace-dark">
                <span className="font-medium">Toppings:</span>
                <span className="text-right font-bold">
                  {toppings.length ? toppings.map((item) => item.name).join(', ') : 'None Selected'}
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="unstyled"
              size="unstyled"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-fornace-sienna py-4 font-bold text-white shadow-warm transition hover:bg-fornace-sienna-light"
              onClick={addCustomPizza}>
              <ShoppingBag className="h-4 w-4" />
              Add Custom Build to Order
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

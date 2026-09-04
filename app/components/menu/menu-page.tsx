import { useMemo, useState } from 'react';
import { pizzaBuilder } from './data/builder';
import { crustOptions, sauceOptions, type Option } from './data/options';
import { useCart } from '~/components/cart/cart-context';
import { BuilderHeader } from './sections/builder-header';
import { CustomPizzaPreview } from './sections/custom-pizza-preview';
import { OptionGrid } from './sections/option-grid';
import { ToppingsGrid } from './sections/toppings-grid';

export function MenuPage() {
  const [crust, setCrust] = useState(crustOptions[0]);
  const [sauce, setSauce] = useState(sauceOptions[0]);
  const [toppings, setToppings] = useState<Option[]>([]);
  const { addItem, openCart } = useCart();

  const total = useMemo(
    () =>
      pizzaBuilder.basePrice +
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
      pizzaBuilder.addToCartMessage
    );
    openCart();
  }

  return (
    <div className="space-y-10">
      <BuilderHeader total={total} />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <OptionGrid
            title={pizzaBuilder.steps.crust.title}
            step={pizzaBuilder.steps.crust.number}
            options={crustOptions}
            selectedId={crust.id}
            onSelect={setCrust}
          />
          <OptionGrid
            title={pizzaBuilder.steps.sauce.title}
            step={pizzaBuilder.steps.sauce.number}
            options={sauceOptions}
            selectedId={sauce.id}
            onSelect={setSauce}
          />
          <ToppingsGrid toppings={toppings} onToggle={toggleTopping} />
        </div>

        <CustomPizzaPreview
          crust={crust}
          sauce={sauce}
          toppings={toppings}
          onAdd={addCustomPizza}
        />
      </div>
    </div>
  );
}

export const pizzaBuilder = {
  basePrice: 19,
  addToCartMessage: 'Your custom pizza was added to the basket.',
  header: {
    eyebrow: 'Build Your Pizza',
    title: 'Choose Your Pizza',
    description: 'Pick your crust, sauce, and toppings.',
    totalLabel: 'Estimated Total',
  },
  steps: {
    crust: { number: 1, title: 'Crust' },
    sauce: { number: 2, title: 'Sauce' },
    toppings: { number: 3, title: 'Toppings' },
  },
  preview: {
    label: 'Live Visualiser',
    recipeHeading: 'Current Custom Recipe',
    crustLabel: 'Crust:',
    sauceLabel: 'Base Sauce:',
    toppingsLabel: 'Toppings:',
    emptyToppings: 'None Selected',
    cta: 'Add Custom Build to Order',
  },
};

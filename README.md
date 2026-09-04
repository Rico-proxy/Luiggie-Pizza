# Luiggie Pizza

Luiggie Pizza is a React Router app for an Italian pizzeria ordering experience. It includes a polished home page, signature pizza cards, a custom pizza builder, order tracking, wine pairings, reservations, cart state, toast feedback, and light/dark theming.

## Stack

- React Router 7
- React 19 with TypeScript
- Tailwind CSS 4
- shadcn/ui-style primitives for shared controls
- Lucide React icons

## Project Structure

```txt
app/
├── assets/              # Local brand assets
├── components/
│   ├── cart/            # Cart provider, drawer, and cart data
│   ├── home/            # Home page shell, sections, and section data
│   ├── menu/            # Pizza builder shell, sections, and builder data
│   ├── shared/          # Reusable app components
│   ├── tracker/         # Order tracker shell, sections, and order data
│   ├── ui/              # Reusable UI primitives
│   └── wines/           # Wine page shell, sections, and wine/reservation data
├── layout/              # App layout, navigation, footer, and layout data
├── lib/                 # Shared utilities
└── routes/              # Clean route files that compose page components
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run type checking:

```bash
npm run typecheck
```

## Notes

The app keeps page files intentionally small. Major sections live in page-specific `sections/` folders, while repeated lists and long copy live in dedicated `data/` files next to the features they support.

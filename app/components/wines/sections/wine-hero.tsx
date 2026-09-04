import { Wine } from 'lucide-react';
import { winePage } from '../data/wine-page';

export function WineHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-fornace-dark p-8 text-white shadow-float lg:p-14">
      <div className="relative z-10 max-w-2xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-fornace-gold">
          {winePage.hero.eyebrow}
        </span>
        <h1 className="text-4xl font-normal lg:text-6xl">{winePage.hero.title}</h1>
        <p className="text-sm leading-relaxed text-[#F3EDE2]/80">
          {winePage.hero.description}
        </p>
      </div>
      <Wine className="absolute -right-10 -top-10 h-56 w-56 rotate-12 text-fornace-gold/10" />
    </section>
  );
}

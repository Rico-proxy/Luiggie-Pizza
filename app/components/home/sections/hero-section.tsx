import { Award, ArrowRight, Flame, Leaf, Wine } from 'lucide-react';
import { Link } from 'react-router';
import { luiggieImages } from '~/assets/images';
import { heroContent, heroStats } from '../data/hero';

const toneClasses = {
  dark: 'text-white',
  sienna: 'text-fornace-sienna',
  olive: 'text-fornace-gold',
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden rounded-3xl border border-fornace-border bg-fornace-dark p-8 paper-shadow lg:p-14">
      <div className="absolute inset-0 bg-gradient-to-br from-fornace-dark via-fornace-dark/92 to-fornace-sienna/30" />
      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="space-y-7 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-fornace-border bg-fornace-card px-4 py-1.5 text-xs font-semibold text-fornace-sienna shadow-sm">
            <Leaf className="h-4 w-4 text-fornace-olive" />
            {heroContent.eyebrow}
          </div>
          <h1 className="text-5xl font-normal leading-[1.05] tracking-tight text-white lg:text-7xl">
            {heroContent.title}{' '}
            <span className="font-serif italic text-fornace-sienna">
              {heroContent.accent}
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#F3EDE2]/80 lg:text-lg">
            {heroContent.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/menu"
              className="group flex items-center gap-3 rounded-2xl bg-fornace-sienna px-8 py-4 font-semibold text-white shadow-warm transition hover:bg-fornace-sienna-light">
              {heroContent.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/wines"
              className="flex items-center gap-2 rounded-2xl border border-fornace-border bg-fornace-card px-7 py-4 font-semibold text-fornace-dark shadow-sm transition hover:bg-white">
              <Wine className="h-4 w-4 text-fornace-gold" />
              {heroContent.secondaryCta}
            </Link>
          </div>
          <div className="grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className={`font-heading text-3xl font-bold ${toneClasses[stat.tone]}`}>
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#F3EDE2]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative aspect-square w-full max-w-md rounded-full border-2 border-dashed border-fornace-sienna/30 p-4">
            <img
              src={luiggieImages.heroPizza}
              alt={heroContent.imageAlt}
              className="h-full w-full rounded-full object-cover shadow-float transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -left-2 -top-2 flex animate-float items-center gap-3 rounded-2xl border border-fornace-border bg-fornace-card p-4 shadow-soft sm:-left-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fornace-olive/10 text-fornace-olive">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-fornace-dark">{heroContent.awardTitle}</p>
              <p className="text-[10px] text-fornace-muted">{heroContent.awardDetail}</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 flex items-center gap-3 rounded-2xl bg-fornace-dark p-4 text-white shadow-float sm:-right-4">
            <Flame className="h-6 w-6 animate-flame text-fornace-sienna" />
            <div>
              <p className="text-xs font-bold text-white">{heroContent.heatTitle}</p>
              <p className="text-[10px] text-[#F3EDE2]/70">{heroContent.heatDetail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

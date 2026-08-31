import { Award, ArrowRight, Flame, Leaf, Wine } from 'lucide-react';
import { Link } from 'react-router';
import { fornaceImages } from '~/assets/images';
import { craftSteps } from './data/craft';
import { heroStats } from './data/hero';
import { SignatureMenu } from './signature-menu';

const toneClasses = {
  dark: 'text-white',
  sienna: 'text-fornace-sienna',
  olive: 'text-fornace-gold',
};

const stepToneClasses = {
  sienna: 'bg-fornace-sienna/10 text-fornace-sienna',
  olive: 'bg-fornace-olive/10 text-fornace-olive',
  gold: 'bg-fornace-gold/10 text-fornace-gold',
};

export function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative flex items-center bg-fornace-dark paper-shadow p-8 lg:p-14 border border-fornace-border rounded-3xl min-h-[560px] overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-br from-fornace-dark via-fornace-dark/92 to-fornace-sienna/30" />
        <div className="z-10 relative items-center gap-10 grid grid-cols-1 lg:grid-cols-12 w-full">
          <div className="space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-fornace-card shadow-sm px-4 py-1.5 border border-fornace-border rounded-full font-semibold text-fornace-sienna text-xs">
              <Leaf className="w-4 h-4 text-fornace-olive" />
              100% Organic San Marzano D.O.P. & Vesuvian Flour
            </div>
            <h1 className="font-normal text-white text-5xl lg:text-7xl leading-[1.05] tracking-tight">
              Where Neapolitan Tradition Meets{' '}
              <span className="font-serif text-fornace-sienna italic">Modern Craft.</span>
            </h1>
            <p className="max-w-xl text-fornace-sand/80 text-base lg:text-lg leading-relaxed">
              Hand-loomed sourdough fermented for 80 hours. Baked in a custom hand-built
              Vesuvian lava stone oven at 485C for exactly 90 blistering seconds.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="group flex items-center gap-3 bg-fornace-sienna hover:bg-fornace-sienna-light shadow-warm px-8 py-4 rounded-2xl font-semibold text-white transition">
                Build Pizza
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/wines"
                className="flex items-center gap-2 bg-fornace-card hover:bg-white shadow-sm px-7 py-4 border border-fornace-border rounded-2xl font-semibold text-fornace-dark transition">
                <Wine className="w-4 h-4 text-fornace-gold" />
                Reserve Table
              </Link>
            </div>
            <div className="gap-6 grid grid-cols-3 pt-6 border-white/15 border-t max-w-lg">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className={`font-heading text-3xl font-bold ${toneClasses[stat.tone]}`}>
                    {stat.value}
                  </p>
                  <p className="font-semibold text-fornace-sand/70 text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative p-4 border-2 border-fornace-sienna/30 border-dashed rounded-full w-full max-w-md aspect-square">
              <img
                src={fornaceImages.heroPizza}
                alt="Neapolitan pizza"
                className="shadow-float rounded-full w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="-top-2 -left-2 sm:-left-4 absolute flex items-center gap-3 bg-fornace-card shadow-soft p-4 border border-fornace-border rounded-2xl animate-float">
              <div className="flex justify-center items-center bg-fornace-olive/10 rounded-xl w-10 h-10 text-fornace-olive">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-fornace-dark text-xs">Gambero Rosso</p>
                <p className="text-[10px] text-fornace-muted">3 Slices Award 2026</p>
              </div>
            </div>
            <div className="-right-2 sm:-right-4 -bottom-4 absolute flex items-center gap-3 bg-fornace-dark shadow-float p-4 rounded-2xl text-white">
              <Flame className="w-6 h-6 text-fornace-sienna animate-flame" />
              <div>
                <p className="font-bold text-white text-xs">Express Wood Bake</p>
                <p className="text-[10px] text-fornace-sand/70">90 Seconds to Crisp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignatureMenu />

      <section className="bg-fornace-card paper-shadow p-8 lg:p-12 border border-fornace-border rounded-3xl">
        <div className="space-y-4 mx-auto mb-12 max-w-3xl text-center">
          <span className="font-bold text-fornace-sienna text-xs uppercase tracking-widest">
            The Uncompromising Standard
          </span>
          <h2 className="font-normal text-fornace-dark text-4xl">
            Four Elements of Neapolitan Craftsmanship
          </h2>
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          {craftSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="space-y-3 bg-fornace-sand/40 p-4 border border-fornace-border/60 rounded-2xl text-center">
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${stepToneClasses[step.tone]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-fornace-dark text-base">{step.title}</h3>
                <p className="text-fornace-muted text-xs leading-relaxed">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

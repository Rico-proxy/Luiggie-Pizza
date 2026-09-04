import { craftSection, craftSteps } from '../data/craft';

const stepToneClasses = {
  sienna: 'bg-fornace-sienna/10 text-fornace-sienna',
  olive: 'bg-fornace-olive/10 text-fornace-olive',
  gold: 'bg-fornace-gold/10 text-fornace-gold',
};

export function CraftSection() {
  return (
    <section className="rounded-3xl border border-fornace-border bg-fornace-card p-8 paper-shadow lg:p-12">
      <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
          {craftSection.eyebrow}
        </span>
        <h2 className="text-4xl font-normal text-fornace-dark">{craftSection.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {craftSteps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.title}
              className="space-y-3 rounded-2xl border border-fornace-border/60 bg-fornace-sand/40 p-4 text-center">
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${stepToneClasses[step.tone]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-fornace-dark">{step.title}</h3>
              <p className="text-xs leading-relaxed text-fornace-muted">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

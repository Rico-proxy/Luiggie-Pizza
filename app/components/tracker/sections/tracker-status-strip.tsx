import { Check } from 'lucide-react';
import { trackerSteps } from '../data/steps';

export function TrackerStatusStrip() {
  return (
    <section className="rounded-3xl border border-fornace-border bg-fornace-card p-6 paper-shadow">
      <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        {trackerSteps.map((step) => {
          const Icon = step.icon;
          const active = step.status === 'active';
          const done = step.status === 'done';

          return (
            <div key={step.title} className="space-y-2">
              <div
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold shadow-sm ${
                  done
                    ? 'bg-fornace-olive text-white'
                    : active
                      ? 'animate-bounce bg-fornace-sienna text-white shadow-warm'
                      : 'bg-fornace-sand text-fornace-muted'
                }`}>
                {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
              </div>
              <p
                className={`text-xs font-bold ${
                  active ? 'text-fornace-sienna' : 'text-fornace-dark'
                }`}>
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { activeOrder } from '../data/order';
import { trackerSteps } from '../data/steps';
import { DeliveryMap } from './delivery-map';

export function OrderProgressPanel() {
  return (
    <section className="space-y-6 lg:col-span-7">
      <div className="space-y-6 rounded-3xl border border-fornace-border bg-fornace-card p-8 paper-shadow">
        <div className="flex flex-col justify-between gap-4 border-b border-fornace-border pb-4 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
              {activeOrder.eyebrow}
            </span>
            <h1 className="mt-0.5 text-3xl font-bold text-fornace-dark">
              {activeOrder.estimate}
            </h1>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-fornace-olive/30 bg-fornace-olive/10 px-3 py-1.5 text-xs font-bold text-fornace-olive">
            <span className="h-2 w-2 animate-ping rounded-full bg-fornace-olive" />
            {activeOrder.cameraLabel}
          </span>
        </div>

        <div className="space-y-4">
          {trackerSteps.slice(0, 3).map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className={`flex items-center gap-4 rounded-2xl border p-4 ${
                  step.status === 'active'
                    ? 'border-fornace-sienna/30 bg-fornace-sienna/10'
                    : 'border-fornace-border/80 bg-fornace-sand/50'
                }`}>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step.status === 'active'
                      ? 'bg-fornace-sienna text-white shadow-warm'
                      : 'bg-fornace-olive text-white'
                  }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p
                    className={`text-xs font-bold ${
                      step.status === 'active' ? 'text-fornace-sienna' : 'text-fornace-dark'
                    }`}>
                    {step.title}
                  </p>
                  <p className="text-[10px] text-fornace-muted">{step.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <DeliveryMap />
      </div>
    </section>
  );
}

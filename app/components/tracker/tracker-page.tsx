import { Check, Download, Home, LocateFixed, Store } from 'lucide-react';
import { trackerSteps } from './data/steps';
import { useCart } from '~/components/cart/cart-context';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';

export function TrackerPage() {
  const { items, subtotal, tax, total, adjustQuantity, showToast } = useCart();

  return (
    <div className="space-y-10">
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
                <p className={`text-xs font-bold ${active ? 'text-fornace-sienna' : 'text-fornace-dark'}`}>
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="space-y-6 lg:col-span-7">
          <div className="space-y-6 rounded-3xl border border-fornace-border bg-fornace-card p-8 paper-shadow">
            <div className="flex flex-col justify-between gap-4 border-b border-fornace-border pb-4 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-fornace-sienna">
                  Active Order #FOR-8842
                </span>
                <h1 className="mt-0.5 text-3xl font-bold text-fornace-dark">
                  Estimated Delivery: 16 Mins
                </h1>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-fornace-olive/30 bg-fornace-olive/10 px-3 py-1.5 text-xs font-bold text-fornace-olive">
                <span className="h-2 w-2 animate-ping rounded-full bg-fornace-olive" />
                Live Kitchen Camera
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
                      <p className={`text-xs font-bold ${step.status === 'active' ? 'text-fornace-sienna' : 'text-fornace-dark'}`}>
                        {step.title}
                      </p>
                      <p className="text-[10px] text-fornace-muted">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-fornace-border bg-fornace-sand/80 p-6">
              <div className="relative z-10 w-full max-w-md space-y-3 text-center">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-fornace-sienna text-white shadow-sm">
                      <Store className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-bold text-fornace-dark">Pizzeria</span>
                  </div>
                  <div className="relative mx-4 h-1.5 flex-1 rounded-full bg-fornace-border">
                    <div className="h-full w-1/2 rounded-full bg-fornace-sienna" />
                    <div className="absolute -top-1.5 left-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-fornace-gold text-[10px] font-bold text-fornace-dark shadow-sm">
                      <LocateFixed className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-fornace-border bg-fornace-sand text-fornace-muted">
                      <Home className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-bold text-fornace-muted">Residence</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-fornace-olive">
                  Insulated thermal delivery box active. 65C maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6 lg:col-span-5">
          <div className="space-y-6 rounded-3xl border border-fornace-border bg-fornace-card p-6 paper-shadow">
            <h2 className="border-b border-fornace-border pb-4 font-serif text-xl font-bold text-fornace-dark">
              Order Summary
            </h2>
            <div className="max-h-64 space-y-3 overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-fornace-border bg-fornace-sand/50 p-3.5">
                  <div>
                    <p className="text-xs font-bold text-fornace-dark">{item.name}</p>
                    <p className="text-[11px] font-semibold text-fornace-sienna">
                      {formatCurrency(item.price)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="unstyled"
                      size="unstyled"
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-xs font-bold text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                      onClick={() => adjustQuantity(item.id, -1)}>
                      -
                    </Button>
                    <span className="text-xs font-bold text-fornace-dark">{item.quantity}</span>
                    <Button
                      type="button"
                      variant="unstyled"
                      size="unstyled"
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-xs font-bold text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                      onClick={() => adjustQuantity(item.id, 1)}>
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-fornace-border pt-4 text-xs">
              <div className="flex justify-between text-fornace-muted">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-fornace-muted">
                <span>Eco Delivery</span>
                <span className="font-bold text-fornace-olive">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-fornace-muted">
                <span>State Tax</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between border-t border-fornace-border pt-3 text-base font-bold text-fornace-dark">
                <span>Total Paid</span>
                <span className="font-heading text-2xl text-fornace-sienna">{formatCurrency(total)}</span>
              </div>
            </div>
            <Button
              type="button"
              variant="unstyled"
              size="unstyled"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-fornace-border bg-fornace-sand py-3.5 font-bold text-fornace-dark transition hover:bg-fornace-border"
              onClick={() => showToast('Receipt Downloaded', 'Digital invoice saved to your device.')}>
              <Download className="h-4 w-4" />
              Download Digital Invoice
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { Home, LocateFixed, Store } from 'lucide-react';
import { deliveryMap } from '../data/order';

export function DeliveryMap() {
  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-fornace-border bg-fornace-sand/80 p-6">
      <div className="relative z-10 w-full max-w-md space-y-3 text-center">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-fornace-sienna text-white shadow-sm">
              <Store className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-bold text-fornace-dark">{deliveryMap.origin}</span>
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
            <span className="text-[10px] font-bold text-fornace-muted">
              {deliveryMap.destination}
            </span>
          </div>
        </div>
        <p className="text-xs font-semibold text-fornace-olive">{deliveryMap.status}</p>
      </div>
    </div>
  );
}

import { Download, Minus, Plus } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';
import type { CartItem } from '~/components/cart/cart-context';
import { orderSummary } from '../data/order';

type OrderSummaryProps = {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  onAdjustQuantity: (id: string, change: number) => void;
  onDownloadReceipt: () => void;
};

export function OrderSummary({
  items,
  subtotal,
  tax,
  total,
  onAdjustQuantity,
  onDownloadReceipt,
}: OrderSummaryProps) {
  return (
    <aside className="space-y-6 lg:col-span-5">
      <div className="space-y-6 rounded-3xl border border-fornace-border bg-fornace-card p-6 paper-shadow">
        <h2 className="border-b border-fornace-border pb-4 font-serif text-xl font-bold text-fornace-dark">
          {orderSummary.heading}
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
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                  onClick={() => onAdjustQuantity(item.id, -1)}>
                  <Minus className="h-3.5 w-3.5" />
                </Button>
                <span className="text-xs font-bold text-fornace-dark">{item.quantity}</span>
                <Button
                  type="button"
                  variant="unstyled"
                  size="unstyled"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-fornace-border bg-fornace-card text-fornace-dark transition hover:bg-fornace-sienna hover:text-white"
                  onClick={() => onAdjustQuantity(item.id, 1)}>
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-2 border-t border-fornace-border pt-4 text-xs">
          <div className="flex justify-between text-fornace-muted">
            <span>{orderSummary.subtotal}</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-fornace-muted">
            <span>{orderSummary.delivery}</span>
            <span className="font-bold text-fornace-olive">{orderSummary.deliveryPrice}</span>
          </div>
          <div className="flex justify-between text-fornace-muted">
            <span>{orderSummary.tax}</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between border-t border-fornace-border pt-3 text-base font-bold text-fornace-dark">
            <span>{orderSummary.total}</span>
            <span className="font-heading text-2xl text-fornace-sienna">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
        <Button
          type="button"
          variant="unstyled"
          size="unstyled"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-fornace-border bg-fornace-sand py-3.5 font-bold text-fornace-dark transition hover:bg-fornace-border"
          onClick={onDownloadReceipt}>
          <Download className="h-4 w-4" />
          {orderSummary.receiptButton}
        </Button>
      </div>
    </aside>
  );
}

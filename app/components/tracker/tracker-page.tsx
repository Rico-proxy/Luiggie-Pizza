import { useCart } from '~/components/cart/cart-context';
import { orderSummary } from './data/order';
import { OrderProgressPanel } from './sections/order-progress-panel';
import { OrderSummary } from './sections/order-summary';
import { TrackerStatusStrip } from './sections/tracker-status-strip';

export function TrackerPage() {
  const { items, subtotal, tax, total, adjustQuantity, showToast } = useCart();

  return (
    <div className="space-y-10">
      <TrackerStatusStrip />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <OrderProgressPanel />
        <OrderSummary
          items={items}
          subtotal={subtotal}
          tax={tax}
          total={total}
          onAdjustQuantity={adjustQuantity}
          onDownloadReceipt={() =>
            showToast(orderSummary.receiptToastTitle, orderSummary.receiptToastMessage)
          }
        />
      </div>
    </div>
  );
}

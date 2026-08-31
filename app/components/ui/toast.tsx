import { CircleCheck } from 'lucide-react';
import { useCart } from '~/components/cart/cart-context';

export function Toast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-fornace-gold/30 bg-fornace-dark px-5 py-3.5 text-white shadow-float transition-all duration-300 ${
        toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
      }`}>
      <CircleCheck className="h-5 w-5 text-fornace-gold" />
      <div>
        <p className="text-xs font-bold text-white">{toast?.title ?? 'Notification'}</p>
        <p className="text-[11px] text-[#F3EDE2]/80">{toast?.message ?? 'Updated.'}</p>
      </div>
    </div>
  );
}

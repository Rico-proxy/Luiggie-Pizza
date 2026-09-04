import { useCart } from '~/components/cart/cart-context';
import { reservationSection } from './data/reservation';
import { ReservationSection } from './sections/reservation-section';
import { WineHero } from './sections/wine-hero';
import { WineList } from './sections/wine-list';

export function WinePage() {
  const { addItem, showToast } = useCart();

  return (
    <div className="space-y-10">
      <WineHero />
      <WineList onAdd={(wine) => addItem({ id: wine.id, name: wine.name, price: wine.price })} />
      <ReservationSection
        onRequest={() =>
          showToast(reservationSection.toastTitle, reservationSection.toastMessage)
        }
      />
    </div>
  );
}

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { reservationSection } from '../data/reservation';

type ReservationSectionProps = {
  onRequest: () => void;
};

export function ReservationSection({ onRequest }: ReservationSectionProps) {
  return (
    <section className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-fornace-border bg-fornace-sand/60 p-8 text-center">
      <h2 className="text-3xl font-normal text-fornace-dark">{reservationSection.title}</h2>
      <p className="text-xs text-fornace-muted">{reservationSection.description}</p>
      <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Input
          type="text"
          placeholder={reservationSection.namePlaceholder}
        />
        <Input
          type="date"
        />
      </div>
      <Button
        type="button"
        variant="unstyled"
        size="unstyled"
        className="w-full rounded-2xl bg-fornace-sienna py-4 font-bold text-white shadow-warm transition hover:bg-fornace-sienna-light"
        onClick={onRequest}>
        {reservationSection.buttonLabel}
      </Button>
    </section>
  );
}

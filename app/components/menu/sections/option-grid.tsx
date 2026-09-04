import { Button } from '~/components/ui/button';
import { formatCurrency } from '~/lib/format';
import type { Option } from '../data/options';

type OptionGridProps = {
  title: string;
  step: number;
  options: Option[];
  selectedId: string;
  onSelect: (option: Option) => void;
};

export function OptionGrid({ title, step, options, selectedId, onSelect }: OptionGridProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-fornace-border bg-fornace-card p-6">
      <div className="flex items-center gap-2 border-b border-fornace-border pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fornace-sienna text-xs font-bold text-white">
          {step}
        </span>
        <h2 className="font-serif text-lg font-bold text-fornace-dark">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => (
          <Button
            key={option.id}
            type="button"
            variant="unstyled"
            size="unstyled"
            className={`flex min-h-24 flex-col items-start justify-center rounded-2xl p-4 text-left transition ${
              selectedId === option.id
                ? 'border-2 border-fornace-sienna bg-fornace-sienna/5'
                : 'border border-fornace-border hover:border-fornace-sienna'
            }`}
            onClick={() => onSelect(option)}>
            <p className="text-sm font-bold leading-snug text-fornace-dark">{option.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-fornace-muted">{option.note}</p>
            <p className="mt-2 text-xs font-bold text-fornace-sienna">
              {option.price ? `+${formatCurrency(option.price)}` : 'Standard'}
            </p>
          </Button>
        ))}
      </div>
    </section>
  );
}

import * as React from 'react';
import { cn } from '~/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-10 w-full rounded-xl border border-fornace-border bg-fornace-card px-4 py-3 text-base text-fornace-dark transition outline-none focus:border-fornace-sienna disabled:cursor-not-allowed disabled:opacity-50 md:text-xs',
        className
      )}
      {...props}
    />
  );
}

export { Input };

import { Moon, Sun } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useTheme } from '~/components/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      type="button"
      variant="unstyled"
      size="unstyled"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-fornace-border bg-fornace-card text-fornace-dark shadow-sm transition hover:border-fornace-sienna">
      <span
        className={`absolute inset-1 rounded-lg transition duration-500 ${
          isDark ? 'bg-fornace-dark' : 'bg-fornace-sand'
        }`}
      />
      <span
        className={`relative grid place-items-center transition duration-500 ${
          isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}>
        <Sun className="h-5 w-5 text-fornace-gold" />
      </span>
      <span
        className={`absolute grid place-items-center transition duration-500 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}>
        <Moon className="h-5 w-5 text-fornace-gold" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

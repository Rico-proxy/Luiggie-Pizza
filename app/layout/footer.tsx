import { Heart } from 'lucide-react';
import { Link } from 'react-router';
import { BrandLogo } from '~/components/shared/brand-logo';
import { navItems } from './data/nav';
import { footerContacts, footerCopy } from './data/footer';

export function Footer() {
  return (
    <footer className="bg-fornace-card mt-auto px-4 md:px-6 py-10 border-fornace-border border-t">
      <div className="gap-8 grid md:grid-cols-[1.2fr_0.8fr_1fr] mx-auto max-w-7xl">
        <BrandLogo />

        <nav className="space-y-3">
          <p className="font-bold text-fornace-sienna text-xs uppercase tracking-widest">
            {footerCopy.linksHeading}
          </p>
          <div className="gap-2 grid">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-semibold text-fornace-muted hover:text-fornace-sienna text-sm transition">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="space-y-3">
          <p className="font-bold text-fornace-sienna text-xs uppercase tracking-widest">
            {footerCopy.contactHeading}
          </p>
          <div className="gap-2 grid">
            {footerContacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <p
                  key={contact.label}
                  className="flex items-center gap-2 text-fornace-muted text-sm">
                  <Icon className="w-4 h-4 text-fornace-sienna" />
                  {contact.label}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2 mx-auto mt-8 pt-5 border-fornace-border border-t max-w-7xl text-fornace-muted text-xs">
        <p>&copy; {footerCopy.copyright}</p>
        <p className="flex items-center gap-1 font-semibold">
          {footerCopy.credit}
          <Heart className="fill-fornace-sienna w-4 h-4 text-fornace-sienna animate-love-pulse" />
        </p>
      </div>
    </footer>
  );
}

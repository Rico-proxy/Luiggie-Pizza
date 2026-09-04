import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';

export type FooterContact = {
  label: string;
  icon: LucideIcon;
};

export const footerContacts: FooterContact[] = [
  { label: '21 Via Napoli, Brooklyn, NY', icon: MapPin },
  { label: '+1 (718) 555-0800', icon: Phone },
  { label: 'hello@luiggiepizza.com', icon: Mail },
];

export const footerCopy = {
  linksHeading: 'Links',
  contactHeading: 'Contact',
  copyright: '2026 Luiggie Pizza. All rights reserved.',
  credit: 'Built by Rico',
};

import { NavLink } from 'react-router';
import { luiggieImages } from '~/assets/images';

export function BrandLogo({ onClick }: { onClick?: () => void }) {
  return (
    <NavLink to="/" className="flex min-w-0 items-center" onClick={onClick}>
      <img
        src={luiggieImages.logo}
        alt="Luiggie Pizza"
        className="h-14 w-auto max-w-[190px] object-contain md:h-20 md:max-w-[240px]"
      />
    </NavLink>
  );
}

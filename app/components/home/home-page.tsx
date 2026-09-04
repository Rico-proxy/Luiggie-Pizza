import { SignatureMenu } from './signature-menu';
import { CraftSection } from './sections/craft-section';
import { HeroSection } from './sections/hero-section';

export function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SignatureMenu />
      <CraftSection />
    </div>
  );
}

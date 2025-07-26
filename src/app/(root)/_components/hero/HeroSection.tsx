import { Main } from '@/components/custom/main';
import { Intro } from './Intro';
import { Service } from './Service';
import { DotBackground } from '@/components/custom/overlay-background';

export function HeroSection() {
  return (
    <Main.Section center height='h-max py-32'>
      <Main.Container className='space-y-32'>
        <Intro />
        <Service />
      </Main.Container>

      {/* Overlay */}
      <DotBackground position="top-right" />
    </Main.Section>
  );
}

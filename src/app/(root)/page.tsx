import { Separator } from '@/components/ui/separator';
import { Intro, Service, AboutSection } from './_components';

export default function Home() {
  return (
    <>
      <Intro />
      <Separator className="container mx-auto my-20" />
      <Service />
      <Separator className="container mx-auto my-20" />
      <AboutSection />
    </>
  );
  // Quote
  // About
  // Skills
  // Projects
  // Lets Create Something Together
  // Contact
}

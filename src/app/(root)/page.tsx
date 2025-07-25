import { Separator } from '@/components/ui/separator';
import { Intro, Service } from './_components';

export default function Home() {
  return (
    <>
      <Intro />
      <Separator className='container mx-auto my-12'/>
      <Service />
    </>
  );
  // Quote
  // About
  // Skills
  // Projects
  // Lets Create Something Together
  // Contact
}

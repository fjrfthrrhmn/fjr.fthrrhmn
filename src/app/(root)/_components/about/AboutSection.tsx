import { Main } from '@/components/custom/main';
import { Contributions } from './contributions/Contributions';
import { Profile } from './Profile';
import { Skills } from './skills/Skills';

export function AboutSection() {
  return (
    <Main.Container paddingY="py-32" className="space-y-12">
      <Profile />
      <Skills />
      <Contributions />
    </Main.Container>
  );
}

'use client';
import { dataAbout } from '@/common/constants/about';
import { Title } from '@/components/custom/title';
import { SkillsMarque } from './SkillsMarque';
import { useState } from 'react';

export function Skills() {
  const [view, setView] = useState<('marquee' | 'list')>('marquee');
  const skills = dataAbout.skills;

  return (
    <main>
      <Title text="Skills" desc="Here's the stack I actually enjoy working with. It’s a mix of clean UI and performant frontend/backend.">
        <button onClick={() => setView(view === 'marquee' ? 'list' : 'marquee')} className="text-sm text-gray-500 underline">
          {view === 'marquee' ? 'List View' : 'Marquee View'}
        </button>
      </Title>

      <SkillsMarque data={skills} />
    </main>
  );
}

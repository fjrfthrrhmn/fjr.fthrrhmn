'use client';
import { dataAbout } from '@/common/constants/about';
import { Title } from '@/components/custom/title';
import { SkillsMarque } from './SkillsMarque';
import { useCallback, useState } from 'react';
import { Grid2x2, Rows2, Zap } from 'lucide-react';
import { SkillsGrid } from './SkillsGrid';
import { ScanLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';

export const Skills = () => {
  const [view, setView] = useState<'marquee' | 'list'>('marquee');
  const skills = dataAbout?.skills;

  const isMarquee = view === 'marquee';
  const handleToggle = useCallback(() => {
    setView(isMarquee ? 'list' : 'marquee');
  }, [view]);

  return (
    <main>
      <Title
        text="Skills"
        icon={Zap}
        desc="Here's the stack I actually enjoy working with. It’s a mix of clean UI and performant frontend/backend."
      >
        <div
          className="relative flex border rounded-xl w-fit"
          title={view === 'marquee' ? 'Switch to list view' : 'Switch to marquee view'}
        >
          {/* Animated background indicator */}
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute z-0 h-6 w-6 rounded-lg bg-foreground"
            style={{
              left: isMarquee ? 5 : 45, // depends on button width + gap
              top: 5,
            }}
          />

          <button
            onClick={handleToggle}
            className={`z-10 relative w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
              isMarquee ? 'text-background' : 'text-foreground'
            }`}
          >
            <Rows2 size={18} />
          </button>

          <button
            onClick={handleToggle}
            className={`z-10 relative w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
              !isMarquee ? 'text-background' : 'text-foreground'
            }`}
          >
            <Grid2x2 size={18} />
          </button>
        </div>
      </Title>

      {view === 'marquee' ? <SkillsMarque data={skills} /> : <SkillsGrid data={skills} />}
    </main>
  );
};

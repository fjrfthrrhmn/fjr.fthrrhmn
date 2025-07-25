'use client';
import { ButtonShiny } from '@/components/custom/button-shiny';
import { Main } from '@/components/custom/main';
import { DotBackground } from '@/components/custom/overlay-background';
import { WordRotate } from '@/components/magicui/word-rotate';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, DownloadIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Typography from '@/components/custom/typography';

export function Intro() {
  return (
    <Main container={false} padding={false}>
      <Main padding={false} className="flex flex-col justify-center gap-4">
        <ButtonShiny
          text="Introduction"
          icon={<Sparkles size={20} className="text-amber-500/90 text-shadow-amber-500 text-shadow-2xs" />}
        />
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <Typography.Title variant="2/bold">Hi, I’m Fajar —</Typography.Title>
            <WordRotate words={['Informatics Student', 'Software Developer', 'UI/UX Website']} />
          </div>
          <Typography.Text variant="sm/semibold">
            I build clean, fast, and modern websites with a strong focus on design and user experience. Always down to explore new tech and
            ship meaningful stuff. Currently deep into web dev, open source, and leveling up every day.
          </Typography.Text>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.div
            className="group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              damping: 10,
              stiffness: 320,
              type: 'spring',
            }}
          >
            <Button>
              <DownloadIcon className="group-hover:-rotate-12 duration-300 transition-all" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            className="group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              damping: 10,
              stiffness: 320,
              type: 'spring',
            }}
          >
            <Button variant="outline">
              Let’s Connect
              <ArrowRightIcon className="group-hover:translate-x-1 duration-300 transition-all" />
            </Button>
          </motion.div>
        </div>

      </Main>

      {/* Overlay */}
      <DotBackground position="top-right" />
    </Main>
  );
}

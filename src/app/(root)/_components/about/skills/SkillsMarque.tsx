'use client';
import { useEffect, useState } from 'react';
import { Marquee } from '@/components/magicui/marquee';

export const SkillsMarque = ({ data }: any) => {
  const allSkills = [...data.coreSkills, ...data.otherTools];
  const [sliders, setSliders] = useState<any[][]>([]);

  useEffect(() => {
    const shuffle = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);
    setSliders([shuffle(allSkills), shuffle(allSkills)]);
  }, []);

  if (!sliders.length) return null;

  return (
    <div className="relative">
      {sliders.map((slider, i) => (
        <Marquee key={i} reverse={i === 0} className="max-w-full [--duration:40s]">
          {slider.map(skill => (
            <img
              key={skill.name}
              src={skill.icon}
              alt={skill.name}
              title={skill.name}
              className="w-full h-10 sm:h-14 me-1"
              loading="lazy"
            />
          ))}
        </Marquee>
      ))}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

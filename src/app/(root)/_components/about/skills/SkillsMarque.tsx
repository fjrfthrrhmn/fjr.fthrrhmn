import { Marquee } from '@/components/magicui/marquee';

export const SkillsMarque = ({ data }: any) => {
  const allSkills = [...data.coreSkills, ...data.otherTools];
  
  return (
    <div className="relative">
      {Array.from({ length: 2 }).map((_, i) => {
        const slider = [...allSkills].sort(() => Math.random() - 0.5);

        return (
          <Marquee key={i} reverse={i === 0} className="max-w-full [--duration:40s]">
            {slider.map(skill => (
              <img key={skill.name} src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} title={skill.name} className="w-full h-10 sm:h-14 me-1" />
            ))}
          </Marquee>
        );
      })}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

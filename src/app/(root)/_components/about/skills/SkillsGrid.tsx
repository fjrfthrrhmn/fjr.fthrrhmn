import Typography from '@/components/custom/typography';

interface SkillItem {
  name: string;
  icon: string;
}

export const SkillsGrid = ({ data }: { data: Record<string, SkillItem[]> }) => {
  return (
    <div className="grid grid-rows-1 sm:grid-cols-2 h-full gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <Typography.Text className="capitalize mb-2">{key === 'coreSkills' ? 'Core Skills' : 'Other Tools'}</Typography.Text>

          <div className="flex flex-wrap gap-1 pb-4">
            {value.map(skill => (
              <img key={skill.name} src={skill.icon} alt={skill.name} title={skill.name} className="w-12 h-12" loading="lazy" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

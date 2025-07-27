import Typography from '@/components/custom/typography';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const SkillsGrid = ({ data }: { data: any[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <Typography.Title variant='6/normal'>{key}</Typography.Title>
          <ScrollArea>
            <div className="flex w-max gap-1 pb-4">
              {value.map(skill => (
                <img key={skill.name} src={skill.icon} alt={skill.name} title={skill.name} className="w-12 h-12" loading="lazy" />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};

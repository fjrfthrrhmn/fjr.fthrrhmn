import { dataAbout } from '@/common/constants/about';
import Typography from '@/components/custom/typography';
import { cn } from '@/lib/utils';
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import { InteractiveProfile } from './DiscordActivity/InteractiveProfile';
import { Button } from '@/components/ui/button';
import { Briefcase, FileTextIcon } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:items-center gap-4">
        {/* Avatar is here... */}
        <InteractiveProfile />

        <div>
          {/* Profile Roles */}
          <div className="hidden sm:flex items-center gap-0.5">
            {dataAbout.roles.map((role, idx) => (
              <div
                key={idx}
                className={cn('rounded px-2 py-1 md:py-0.5 border border-white/5 md:flex items-center flex-row-reverse gap-2', role.color)}
              >
                <span className="hidden md:block font-mono text-xs">{role.label}</span>
                <role.icon size={18} />
              </div>
            ))}
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-2">
            <Typography.Title variant="5/bold" title={dataAbout.profile.name} className='line-clamp-1'>{dataAbout.profile.name}</Typography.Title>
            <VerifiedIcon className="text-blue-400" />
          </div>

          {/* Profile Info */}
          <ul className="list-disc pl-4 flex sm:items-center flex-col sm:flex-row sm:justify-between md:justify-start md:gap-x-12">
            {Object.entries(dataAbout.profile)
              .filter(([key]) => key === 'location' || key === 'bio')
              .map(([key, value], idx) => {
                return (
                  <li key={idx}>
                    <Typography.Text variant="sm/medium" className="text-white">
                      {value}
                    </Typography.Text>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      {/* Profile Summary */}
      <Typography.Text>{dataAbout.summary}</Typography.Text>

      {/* Profile Interests */}
      <div className="grid grid-rows-1 sm:grid-cols-2 gap-4 items-center">
        <div className="order-last flex flex-col gap-2">
          <Typography.Text variant="xs/medium" className="text-muted-foreground">
            Resume
          </Typography.Text>
          <Button size="sm">
            <FileTextIcon />
            View CV
          </Button>
          <Button size="sm" variant="outline">
            <Briefcase />
            View Portoflio
          </Button>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          {dataAbout.interests.map(item => (
            <div key={item.label}>
              <Typography.Text variant="xs/medium">{item.label}</Typography.Text>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                {item.items.map((fragment, index) => (
                  <div key={index} className="bg-zinc-900 p-1.5 rounded" title={fragment.label}>
                    <fragment.icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

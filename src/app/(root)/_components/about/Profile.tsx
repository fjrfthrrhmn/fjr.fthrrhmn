import { dataAbout } from '@/common/constants/about';
import Typography from '@/components/custom/typography';
import { cn } from '@/lib/utils';
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { InteractiveProfile } from './DiscordActivity/InteractiveProfile';

export const Profile = () => {
  return (
    <div className="space-y-4">
      <div className="flex  items-center gap-4">
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
            <Typography.Title variant="5/bold">{dataAbout.profile.name}</Typography.Title>
            <VerifiedIcon className='text-blue-400' />
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
      <div className="flex flex-col gap-4 sm:flex-row">
        {dataAbout.interests.map(item => (
          <div key={item.label}>
            <Typography.Text variant="xs/medium">{item.label}</Typography.Text>

            <div className="mt-1.5 flex sm:items-center gap-2">
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
  );
}

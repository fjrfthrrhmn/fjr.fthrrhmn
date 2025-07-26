import { dataAbout } from '@/common/constants/about';
import Typography from '@/components/custom/typography';
import { cn } from '@/lib/utils';

export function Profile() {
  return (
    <div className="space-y-4">
      {/* Avatar is here... */}
      <div className="relative w-max cursor-pointer">
        <img
          src={'https://i.pinimg.com/1200x/88/8b/a9/888ba992b024f21cc4effe0645db95d6.jpg'}
          alt="profile"
          width={100}
          height={100}
          className="rounded-2xl"
        />

        <div className="absolute rounded-full bg-sky-500 shadow-sm shadow-sky-500 w-2.5 h-2.5 -top-0 -right-0" />
      </div>

      <div>
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <Typography.Title variant="5/bold">{dataAbout.profile.name}</Typography.Title>

          {/* Profile Roles */}
          <div className="hidden sm:flex items-center gap-0.5">
            {dataAbout.roles.map((role, idx) => (
              <div key={idx} className={cn('rounded px-2 py-1 md:py-0.5 border border-white/5 md:flex items-center flex-row-reverse gap-2', role.color)}>
                <span className='hidden md:block font-mono text-xs'>{role.label}</span>
                <role.icon size={18} />
              </div>
            ))}
          </div>
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

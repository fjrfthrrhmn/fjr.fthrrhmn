'use client';
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle } from '@/components/ui/dialog';
import { useLanyardActivity } from '@/common/hooks/useLayard';
import Typography from '@/components/custom/typography';
import { TbPlugOff } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';
import { DotBackground } from '@/components/custom/overlay-background';
import { statusColors } from '@/common/constants/about';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ActivityCard } from './ActivityCard';
import { Separator } from '@/components/ui/separator';

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ActivityModal = ({ isOpen, onClose }: ActivityModalProps) => {
  const { discordUser, activities, data } = useLanyardActivity();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-md" />

      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-white">Discord Activity</DialogTitle>
        </DialogHeader>

        {/* Discord Profile */}
        {discordUser && (
          <Link
            href={`https://discord.com/users/${discordUser.id}`}
            target="_blank"
            className="mb-2 group relative overflow-hidden flex gap-4 items-center px-2 py-1 sm:p-4 bg-gradient-to-tr from-background to-indigo-500/70 shadow-xl rounded-xl"
          >
            <div className="relative w-max cursor-pointer group">
              <Image
                src={`https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`}
                alt="Discord Avatar"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div
                className={`absolute rounded-full shadow-sm w-2 h-2 bottom-0 right-0 outline-4 border-background animate-opacity ${
                  statusColors[(data?.discord_status as keyof typeof statusColors) || 'offline']
                }`}
              />
            </div>

            <div className="flex flex-col">
              <Typography.Text variant="sm/semibold" className="text-white">
                {discordUser.username}
              </Typography.Text>
              <Typography.Text variant="xs/normal">Connect with me on Discord</Typography.Text>
            </div>

            <img
              src="https://skillicons.dev/icons?i=discord"
              alt="discord"
              className="opacity-30 absolute -right-5 top-3 w-20 h-20 rotate-12 group-hover:opacity-100 group-hover:-right-2 transition-all duration-300"
            />
          </Link>
        )}

        <Separator/>

        <ScrollArea className={`${!activities?.length ? 'h-max' : 'max-h-[300px]'}`}>
          {/* if not activities */}
          {!activities?.length && (
            <div className="flex items-center flex-col gap-2.5 justify-center py-12 max-w-xs text-center mx-auto">
              <TbPlugOff size={52} />
              <Typography.Text>You are not currently connected to any Discord activity.</Typography.Text>
            </div>
          )}

          {/* activities from index 1 */}
          {activities?.slice(1).map(items => (
            <ActivityCard key={items.name} activity={items} />
          ))}
        </ScrollArea>

        <DotBackground position="bottom" size={16} />
      </DialogContent>
    </Dialog>
  );
};

'use client';
import { useLanyardActivity } from '@/common/hooks/useLayard';
import { statusColors } from '@/common/constants/about';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { ActivityModal } from './ActivityModal';

export const InteractiveProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useLanyardActivity();

  // handleOpen
  const handleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <>
      <div className="relative w-max cursor-pointer group" onClick={handleOpen}>
        <img
          src="https://i.pinimg.com/1200x/88/8b/a9/888ba992b024f21cc4effe0645db95d6.jpg"
          alt="profile"
          className="rounded-3xl w-max h-24"
        />

        <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full duration-300 ease-in-out bg-black/50 transition-all">
          <div className="flex items-center justify-center text-center font-semibold font-mono text-xs h-full w-full">View Activity</div>
        </div>

        <div
          title={data?.discord_status}
          className={`absolute rounded-full ${
            statusColors[(data?.discord_status as keyof typeof statusColors) || 'offline']
          } shadow-sm w-5 h-5 -bottom-1 -right-1 border-4 border-background animate-opacity`}
        />
      </div>

      <ActivityModal isOpen={isOpen} onClose={() => handleOpen()} />
    </>
  );
};

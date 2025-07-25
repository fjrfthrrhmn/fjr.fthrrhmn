import { cn } from '@/lib/utils';
import ShinyText from '../reactbits/ShinyText';

interface ButtonProps {
  className?: string;
  text: string;
  icon?: React.ReactNode;
}

export const ButtonShiny = ({ className, text, icon }: ButtonProps) => {
  return (
    <div
      className={cn(
        'w-max rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in dark:border-white/5 dark:bg-zinc-900 px-3.5 py-0.5',
        className
      )}
    >
      <ShinyText text={text} icon={icon} />
    </div>
  );
};
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import ShinyText from '@/reactbits/ShinyText';

export function Intro() {
  return (
    // Create Section Component
    <div className="relative text-center h-dvh max-h-[800px] min-h-[400px] flex items-center justify-center flex-col gap-4">
      <div
        className={cn(
          'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in dark:border-white/5 dark:bg-zinc-900 px-3.5 py-0.5'
        )}
      >
        <ShinyText text="✨ hello world" />
      </div>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, minima!</p>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn('[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]')}
      />
    </div>
  );
}

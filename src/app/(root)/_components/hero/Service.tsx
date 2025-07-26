'use client';
import { Title } from '@/components/custom/title';
import Typography from '@/components/custom/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, TimerIcon } from 'lucide-react';

export function Service() {
  return (
    <main>
      <Title
        text="Services"
        icon={TimerIcon}
        desc="I work as a freelancer, helping brands, startups, and teams build high-quality websites with a strong focus on strategy, performance, and design."
      />

      <div className="group overflow-hidden relative bg-gradient-to-b from-zinc-800 to-zinc-900 my-6 p-4 sm:p-6 rounded-xl shadow-lg outline-2 outline-offset-[6px] outline-solid outline-white/15">
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <Typography.Title variant="4/bold">
              Let&lsquo;s Build Something{' '}
              <span className="font-bold decoration-2 decoration-wavy decoration-sky-500 underline underline-offset-4">Awesome</span>
            </Typography.Title>
            <Typography.Text className="mt-2 max-w-2xl">
              I’m open for freelance projects — feel free to reach out and let’s make something impactful together.
            </Typography.Text>
          </div>

          <Button className="group hover:scale-110 duration-200 ease-in-out w-max">
            Get Started
            <ArrowRight className="group-hover:-rotate-45 transition-all duration-200" />
          </Button>
        </div>

        {/* Image Bottom Right */}
        <div className="absolute -bottom-40 -right-32 group-hover:-right-28 duration-200 transition-all rotate-12 select-none pointer-events-none">
          <span className="text-[400px] opacity-15 group-hover:opacity-30  duration-200 transition-all">✨</span>
        </div>
      </div>
    </main>
  );
}

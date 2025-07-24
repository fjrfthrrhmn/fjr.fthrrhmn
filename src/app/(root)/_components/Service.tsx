import { Main } from '@/components/custom/main';
import { Title } from '@/components/custom/title';
import { Button } from '@/components/ui/button';
import { ArrowRight, TimerIcon } from 'lucide-react';

export function Service() {
  return (
    <Main padding={false} className="space-y-8">
      <Title
        text="Services"
        icon={<TimerIcon />}
        desc="I work as a freelancer, helping brands, startups, and teams build high-quality websites with a strong focus on strategy, performance, and design."
      />

      <div className="overflow-hidden relative bg-gradient-to-b from-zinc-800 to-zinc-900 p-6 rounded-xl shadow-lg space-y-6 outline-2 outline-offset-[6px] outline-solid outline-white/15">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Let&lsquo;s build something
            <span className="font-bold decoration-2 decoration-wavy decoration-sky-500 underline underline-offset-4">awesome</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            I’m open for freelance projects — feel free to reach out and let’s make something impactful together.
          </p>
        </div>

        <Button className="group hover:scale-110 duration-200 ease-in-out">
          Get Started
          <ArrowRight className="group-hover:-rotate-45 ml-2 transition-all duration-200" />
        </Button>

        {/* Image Bottom Right */}
        <div className="absolute -bottom-40 -right-32 rotate-12 select-none pointer-events-none">
          <span className="text-[400px] opacity-15">✨</span>
        </div>
      </div>
    </Main>
  );
}

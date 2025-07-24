import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ')}
      />
      {children}
    </div>
  );
}

import { cn } from '@/lib/utils';

interface MainProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  padding?: boolean
}

export const Main = ({ children, className, padding = true, container = true }: MainProps) => {
  return <main className={cn('relative w-full min-h-[calc(100dvh-72px)]', padding && 'py-32', container && 'container mx-auto', className)}>{children}</main>;
};

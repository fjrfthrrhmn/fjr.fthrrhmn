import { cn } from '@/lib/utils';

interface MainProps {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  padding?: boolean;
  height?: string;
}

export const Main = ({ children, className, padding = false, container = true, height = 'min-h-[calc(100dvh-72px)]' }: MainProps) => {
  return <main className={cn('relative w-full', height, padding && 'py-32', container && 'container mx-auto', className)}>{children}</main>;
};

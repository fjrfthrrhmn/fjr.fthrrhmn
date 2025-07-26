import { cn } from '@/lib/utils';

interface BaseProps {
  children: React.ReactNode;
  className?: string;

  // Spacing
  paddingY?: 'py-12' | 'py-24' | 'py-32'  | 'py-72';
  marginY?: 'my-12' | 'my-24' | 'my-32' | 'my-72';
}

const Container = ({ children, className, paddingY, marginY }: BaseProps) => {
  return <div className={cn('w-full h-max container mx-auto', paddingY, marginY, className)}>{children}</div>;
};

type SectionProps = BaseProps & {
  height?: 'h-[calc(100dvh-72px)]' | 'h-max py-32' | 'h-auto';
  center?: boolean;
};

const Section = ({ children, className, paddingY, marginY, height = 'h-[calc(100dvh-72px)]', center }: SectionProps) => {
  return (
    <div className={cn('w-full relative', height, center && 'flex items-center justify-center', paddingY, marginY, className)}>{children}</div>
  );
};

export const Main = { Container, Section };

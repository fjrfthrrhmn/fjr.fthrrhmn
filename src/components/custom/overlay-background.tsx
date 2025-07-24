import { cn } from '@/lib/utils';

export const GridBackground = () => {
  return (
    <>
      <div
        className={cn(
          'opacity-50',
          'absolute inset-0 -z-50',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="-z-50 pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />
    </>
  );
};

interface DotBackgroundProps {
  position?: 'center' | 'top-right' | 'top-left' | 'bottom' | 'radial';
  opacity?: number;
}

export const DotBackground = ({ position = 'radial', opacity = 70 }: DotBackgroundProps) => {
  const maskClass = (() => {
    switch (position) {
      case 'top-left':
        return '[mask-image:linear-gradient(to_top_left,white,transparent)]';
      case 'top-right':
        return '[mask-image:linear-gradient(to_top_right,white,transparent)]';
      case 'bottom':
        return '[mask-image:linear-gradient(to_bottom,white,transparent)]';
      case 'center':
        return '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]';
      case 'radial':
      default:
        return '[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]';
    }
  })();

  return (
    <>
      <div
        style={{ opacity: opacity / 100 }}
        className={cn(
          'absolute inset-0 -z-50',
          '[background-size:20px_20px]',
          '[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
          'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
        )}
      />
      <div
        className={cn('-z-50 pointer-events-none absolute inset-0 flex items-center justify-center', 'bg-background', maskClass)}
      />
    </>
  );
};

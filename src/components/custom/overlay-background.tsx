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
  height?: string; // e.g. "80%", "600px"
  size?: number; // spacing of dots (px)
  className?: string
}

export const DotBackground = ({
  position = 'radial',
  opacity = 100, // Reduced default opacity
  height = '100%',
  size = 32, // Increased default size for fewer dots
  className
}: DotBackgroundProps) => {
  const maskClass = (() => {
    switch (position) {
      case 'top-left':
        return '[mask-image:linear-gradient(135deg,white_0%,white_20%,rgba(255,255,255,0.6)_50%,transparent_100%)]';
      case 'top-right':
        return '[mask-image:linear-gradient(30deg,white_0%,white_20%,rgba(255,255,255,0.6)_50%,transparent_100%)]';
      case 'bottom':
        return '[mask-image:linear-gradient(to_bottom,white_0%,white_30%,rgba(255,255,255,0.6)_60%,transparent_100%)]';
      case 'center':
        return '[mask-image:radial-gradient(ellipse_at_center,white_0%,white_20%,rgba(255,255,255,0.6)_60%,transparent_100%)]';
      case 'radial':
      default:
        return '[mask-image:radial-gradient(ellipse_at_center,transparent_0%,transparent_30%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.8)_70%,black_100%)]';
    }
  })();

  return (
    <>
      {/* Dot Layer */}
      <div
        style={{
          opacity: opacity / 100,
          backgroundSize: `${size}px ${size}px`,
          height,
        }}
        className={cn(
          'absolute inset-0 -z-50',
          '[background-image:radial-gradient(#d4d4d4_20px,transparent_20px)]', // Smaller dot size
          'dark:[background-image:radial-gradient(#404040_0.8px,transparent_0.8px)]',
          className
        )}
      />

      {/* Masking Layer with smoother transitions */}
      <div style={{ height }} className={cn('absolute top-0 inset-x-0 -z-50 pointer-events-none bg-background rounded-2xl', maskClass)} />
    </>
  );
};

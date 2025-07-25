import { forwardRef, JSX } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

type TitleStyleProps = VariantProps<typeof TitleStyles>;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, Omit<TitleStyleProps, 'level' | 'weight'> {
  variant: `${NonNullable<TitleStyleProps['level']>}/${NonNullable<TitleStyleProps['weight']>}`;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { children, variant, className, ...rest } = props;

  const [level, weight] = variant.split('/') as [TitleStyleProps['level'], TitleStyleProps['weight']];

  const Comp = `h${level}` as any;

  return (
    <Comp ref={ref} className={TitleStyles({ level, weight, className })} {...rest}>
      {children}
    </Comp>
  );
});

type TextStyleProps = VariantProps<typeof TextStyles>;

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, Omit<TextStyleProps, 'size' | 'weight'> {
  variant?: `${NonNullable<TextStyleProps['size']>}/${NonNullable<TextStyleProps['weight']>}`;
  as?: keyof Pick<JSX.IntrinsicElements, 'p' | 'code' | 'strong' | 'span' | 'small' | 'mark' | 'kbd'>;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { as: Tag = 'p', children, className, variant = 'sm/normal', ...rest } = props;

  const [size, weight] = variant?.split('/') as [TextStyleProps['size'], TextStyleProps['weight']] ?? ['sm', 'semibold'];

  return (
    <Tag ref={ref} className={TextStyles({ size, weight, className })} {...rest}>
      {children}
    </Tag>
  );
});

const TitleStyles = cva([], {
  variants: {
    level: {
      1: 'text-5xl lg:text-6xl',
      2: 'text-4xl lg:text-5xl',
      3: 'text-3xl lg:text-4xl',
      4: 'text-2xl lg:text-3xl',
      5: 'text-xl lg:text-2xl',
      6: 'text-lg lg:text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
});

const TextStyles = cva(['text-muted-foreground font-medium text-pretty leading-5 tracking-wide'], {
  variants: {
    size: {
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-sm sm:text-base',
      sm: 'text-xs sm:text-sm',
      xs: 'text-[10px] sm:text-xs',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    weight: 'semibold',
  },
});

Title.displayName = 'Title';
Text.displayName = 'Text';

const Typography = { Title, Text };

export default Typography;

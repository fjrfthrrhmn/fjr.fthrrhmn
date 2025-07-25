import { LucideIcon, LucideProps } from 'lucide-react';
import Typography from './typography';
import React from 'react';

interface TitleProps {
  text: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  classNameText?: string;
  desc?: string;
  iconSize?: LucideProps['size'];
}

export const Title = ({
  text,
  icon: Icon,
  children,
  className = 'flex items-center justify-between mb-2',
  classNameText,
  desc,
  iconSize = 24,
}: TitleProps) => {
  return (
    <>
      <div className={className}>
        <div className=" flex items-center gap-2">
          {Icon && <Icon size={iconSize} />}
          <Typography.Title className={classNameText} variant="5/semibold">
            {text}
          </Typography.Title>
        </div>
        {children}
      </div>
      <Typography.Text variant="sm/semibold">{desc}</Typography.Text>
    </>
  );
};

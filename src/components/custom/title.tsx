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
  className = 'flex items-center justify-between mb-1',
  classNameText,
  desc,
  iconSize = 24,
}: TitleProps) => {
  return (
    <>
      <div className={className}>
        <div className=" flex items-center gap-2 group">
          {Icon && <Icon size={iconSize} className='group-hover:-rotate-[24deg] group-hover:scale-110 duration-200 transition-all' />}
          <Typography.Title className={classNameText} variant="6/semibold">
            {text}
          </Typography.Title>
        </div>
        {children}
      </div>
      <Typography.Text>{desc}</Typography.Text>
    </>
  );
};

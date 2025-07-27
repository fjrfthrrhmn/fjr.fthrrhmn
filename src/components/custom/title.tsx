'use client'
import { LucideIcon, LucideProps } from 'lucide-react';
import Typography from './typography';
import React from 'react';
import { IconType } from 'react-icons';

interface TitleProps {
  text: string;
  icon?: LucideIcon | IconType;
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
  className,
  classNameText,
  desc,
  iconSize = 24,
}: TitleProps) => {
  return (
    <main className={`${className} my-6`}>
      <div className="flex items-center justify-between mb-1">
        <div className=" flex items-center gap-2 group">
          {Icon && <Icon size={iconSize} className="group-hover:-rotate-[24deg] group-hover:scale-110 duration-200 transition-all" />}
          <Typography.Title className={classNameText} variant="6/semibold">
            {text}
          </Typography.Title>
        </div>
        {children}
      </div>
      <Typography.Text className="max-w-2xl">{desc}</Typography.Text>
    </main>
  );
};

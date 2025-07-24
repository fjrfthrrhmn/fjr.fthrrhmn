interface TitleProps {
  text: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  classNameText?: string;
  desc?: string;
}

export const Title = ({
  text,
  icon,
  children,
  className = 'flex items-center justify-between mb-2',
  classNameText = 'text-xl',
  desc
}: TitleProps) => {
  return (
    <>
      <div className={className}>
        <div className=" flex items-center gap-2">
          {icon && icon}
          <h1 className={classNameText}>{text}</h1>
        </div>
        {children}
      </div>
      <p className="text-muted-foreground">
        {desc}
      </p>
    </>
  );
};

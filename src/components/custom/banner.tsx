import Image from 'next/image';

// TODO: Improve the banner component
export const Banner = () => {
  return (
    <div className="w-full h-full rounded-xl relative">

      {/* banner to be background gradient */}
      <div className="relative h-40 overflow-hidden rounded-2xl"/>
      
      <div className="absolute -bottom-10 left-6">
        <Image
          src={'https://i.pinimg.com/1200x/88/8b/a9/888ba992b024f21cc4effe0645db95d6.jpg'}
          alt="profile"
          width={130}
          height={130}
          className="rounded-2xl border-[8px] border-background"
        />
      </div>
    </div>
  );
};

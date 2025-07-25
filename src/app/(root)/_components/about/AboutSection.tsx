import { Main } from '@/components/custom/main';
import Typography from '@/components/custom/typography';
import { cn } from '@/lib/utils';
import { BookOpenText, Code, Coffee, Figma, Fish, Gamepad2, School, Tv } from 'lucide-react';
import Image from 'next/image';
import { Contributions } from './contributions/Contributions';
import { Separator } from '@/components/ui/separator';

export function AboutSection() {
  return (
    <Main className="space-y-6 pb-32">
      {/* <Banner /> */}
      <div className="relative w-max cursor-pointer">
        <Image
          src={'https://i.pinimg.com/1200x/88/8b/a9/888ba992b024f21cc4effe0645db95d6.jpg'}
          alt="profile"
          width={100}
          height={100}
          className="rounded-2xl"
        />

        <div className="absolute rounded-full bg-sky-500 shadow-sm shadow-sky-500 w-2.5 h-2.5 -top-0 -right-0" />
      </div>
      <div className="space-y-4">
        <div>
          <div className="hidden sm:flex items-center justify-between">
            <Typography.Title variant="6/bold">Fajar Fathurrahman Ramdhani</Typography.Title>
            <div className="flex items-center gap-1">
              {['Student', 'Designer', 'Programmer'].map((role, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'rounded py-0.5 px-2 text-xs font-mono',
                    role === 'Student' && 'bg-sky-500/15 text-sky-500',
                    role === 'Designer' && 'bg-pink-500/15 text-pink-500',
                    role === 'Programmer' && 'bg-indigo-500/15 text-indigo-500'
                  )}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
          <ul className="list-disc pl-4 flex items-center gap-12">
            <li>
              <Typography.Text variant="sm/medium" className="text-white">
                Mahasiswa of Informatics at ITB
              </Typography.Text>
            </li>
            <li>
              <Typography.Text variant="sm/medium" className="text-white">
                Based in Bandung, Indonesian 🇮🇩
              </Typography.Text>
            </li>
          </ul>
        </div>
        <Typography.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi labore obcaecati voluptate earum consequatur, porro
          sunt repellendus quae vel alias temporibus quas optio nobis assumenda eum neque nam vero tempore quos libero dolore voluptas
          laboriosam repellat? Sapiente ab, mollitia laudantium neque itaque reprehenderit dignissimos nobis debitis eaque vitae officiis
          iusto necessitatibus nisi deserunt iure labore, quaerat exercitationem blanditiis optio amet in laborum eos quisquam temporibus.
          Ratione culpa quos vel aperiam praesentium in obcaecati voluptatum cumque, esse molestiae libero sint officiis? Aliquid ut tenetur
          optio error ipsum suscipit nostrum saepe laboriosam ipsam quos. Harum numquam nisi accusantium, necessitatibus id fugiat!
        </Typography.Text>
        <Typography.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni, aliquam doloremque incidunt exercitationem delectus
          blanditiis sequi fugiat deserunt voluptatibus? Officia assumenda neque id saepe quae! Quidem sunt eius ab.
        </Typography.Text>

        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Typography.Text variant="xs/medium">Main Focus</Typography.Text>
            {[<Code size={16} />, <School size={16} />].map((item, index) => (
              <div key={index} className="bg-zinc-900 p-1.5 rounded">
                {item}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Typography.Text variant="xs/medium">Side Interests</Typography.Text>
            {[
              <Figma size={16} />,
              <Gamepad2 size={16} />,
              <BookOpenText size={16} />,
              <Fish size={16} />,
              <Tv size={16} />,
              <Coffee size={16} />,
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900 p-1.5 rounded">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className='my-12' />

      <Contributions />
    </Main>
  );
}

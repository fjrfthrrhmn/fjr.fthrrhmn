import { Code, School, Figma, Gamepad2, BookOpenText, Fish, Tv, Coffee } from 'lucide-react';
import { FaCode } from 'react-icons/fa6';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';

export const roles = [
  {
    icon: PiStudent,
    label: 'Student',
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    icon: MdOutlineDesignServices,
    label: 'Designer',
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    icon: FaCode,
    label: 'Programmer',
    color: 'bg-purple-500/10 text-purple-500',
  },
];

export const profile = {
  name: 'Fajar Fathurrahman Ramdhani',
  email: 'fjr.fthrrhmn25@gmail.com',
  phone: '+62 812 3456 7890',
  location: 'Bandung, Indonesia 🇮🇩',
  bio: 'Informatics student at Satu University',
};

export const summary = [
  'Currently diving deep into Informatics at Satu University — mostly vibing with full-stack web dev, system design, and building things that actually scale.',
  "Outside of code? I'm into design, games, good books, and strong coffee. I believe in work-life balance and clean, maintainable code.",
];

const interests = [
  {
    label: 'Main Focus',
    items: [
      {
        icon: Code,
        label: 'Web Dev',
      },
      {
        icon: School,
        label: 'Informatics',
      },
    ],
  },
  {
    label: 'Side Interests',
    items: [
      {
        icon: Figma,
        label: 'UI/UX',
      },
      {
        icon: Gamepad2,
        label: 'Gaming',
      },
      {
        icon: BookOpenText,
        label: 'Reading',
      },
      {
        icon: Fish,
        label: 'Aquascaping',
      },
      {
        icon: Tv,
        label: 'Movies',
      },
      {
        icon: Coffee,
        label: 'Coffee',
      },
    ],
  },
];

export const dataAbout = {
  roles,
  profile,
  summary,
  interests,
};

import { Code, School, Figma, Gamepad2, BookOpenText, Fish, Tv, Coffee } from 'lucide-react';
import { FaCode } from 'react-icons/fa6';
import { MdOutlineDesignServices } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';

const roles = [
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

const profile = {
  name: 'Fajar Fathurrahman Ramdhani',
  email: 'fjr.fthrrhmn25@gmail.com',
  phone: '+62 812 3456 7890',
  location: 'Based in Bandung, Indonesia 🇮🇩',
  bio: 'Informatics student at Satu University',
};

const summary = [
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

const skills = {
  coreSkills: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Astro', icon: 'astro' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'React.js', icon: 'react' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'TypeScript', icon: 'ts' },
  ],
  otherTools: [
    { name: 'Figma', icon: 'figma' },
    { name: 'Git', icon: 'git' },
    { name: 'Github', icon: 'github' },
    { name: 'Postman', icon: 'postman' },
    { name: 'PowerShell', icon: 'powershell' },
    { name: 'Discord', icon: 'discord' },
    { name: 'Notion', icon: 'notion' },
    { name: 'VSCode', icon: 'vscode' },
  ],
};

export const dataAbout = {
  roles,
  profile,
  summary,
  interests,
  skills,
};

export const statusColors = {
  online: 'bg-green-500',
  idle: 'bg-yellow-500',
  dnd: 'bg-red-500',
  offline: 'bg-gray-500',
};

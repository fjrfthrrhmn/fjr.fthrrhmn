import { Code, School, Figma, Gamepad2, BookOpenText, Fish, Tv, Coffee, Headset, Joystick } from 'lucide-react';
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
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'Astro', icon: 'https://skillicons.dev/icons?i=astro' },
    { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'React.js', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Laravel', icon: 'https://skillicons.dev/icons?i=laravel' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  ],
  otherTools: [
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'Github', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
    { name: 'PowerShell', icon: 'https://skillicons.dev/icons?i=powershell' },
    { name: 'Discord', icon: 'https://skillicons.dev/icons?i=discord' },
    { name: 'Notion', icon: 'https://skillicons.dev/icons?i=notion' },
    { name: 'VSCode', icon: 'https://skillicons.dev/icons?i=vscode' },
  ],
};

export const dataAbout = {
  roles,
  profile,
  summary,
  interests,
  skills,
};

// discord
export const statusColors = {
  online: 'bg-green-500',
  idle: 'bg-yellow-500',
  dnd: 'bg-red-500',
  offline: 'bg-gray-500',
};
// Activity background configurations
export const activityBackground = {
  Roblox: ' bg-gradient-to-tr from-background to-blue-500/60',
  Code: 'bg-gradient-to-tr from-background to-sky-500/60',
  Spotify: 'bg-gradient-to-tr from-background to-emerald-500/60',
  Others: 'bg-gradient-to-tr from-background to-zinc-500/60',
};

// Activity icon configurations
export const activityIcons = {
  Code: 'https://skillicons.dev/icons?i=vscode',
  Spotify: 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png',
  Roblox: 'https://i.pinimg.com/736x/d4/2a/6c/d42a6c5c6cd6eba516d0c8bda1f5a79e.jpg',
  Others: 'https://skillicons.dev/icons?i=discord',
};
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export const navItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const sosmed = [
  {
    icon: <Github size={20} />,
    color: 'text-zinc-400',
  },
  {
    icon: <Linkedin size={20} />,
    color: 'text-sky-500',
  },
  {
    icon: <Twitter size={20} />,
    color: 'text-cyan-400',
  },
  {
    icon: <Instagram size={20} />,
    color: 'text-red-500',
  }
];

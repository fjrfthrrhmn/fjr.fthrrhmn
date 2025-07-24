'use client';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { navItems, sosmed } from '@/common/constants/navbar';
import { NavBar, NavList, NavMobile } from '../custom/navbar';
import { RiVercelFill } from 'react-icons/ri';

const NAME_BRAND = 'hola@fjr.fthrrhmn25.com';

// TODO : add animation for brand
export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleMobileOpen = useCallback(() => setIsMobileOpen(prev => !prev), []);

  return (
    <>
      <NavBar>
        <div className="flex items-center gap-2.5">
          <RiVercelFill size={20} />
          <Link href="mailto:hola@fjr.fthrrhmn25.com" target="_blank" rel="noopener noreferrer">
            <small className="hidden sm:block underline underline-offset-2 text-base lg:text-lg">{NAME_BRAND}</small>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Navigation Desktop */}
          <NavList>
            {navItems.map(item => (
              <motion.div
                key={item.label}
                className="text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
          </NavList>

          {/* Improve when scroll > 120 to be collapsed */}
          <NavList>
            {sosmed.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                }}
              >
                <Link href={'#'}>{item.icon}</Link>
              </motion.div>
            ))}
          </NavList>
        </div>

        {/* Navigation Mobile */}
        <NavMobile isOpen={isMobileOpen} onHandle={handleMobileOpen}>
          <div className="flex flex-col gap-2">
            {navItems.map(item => (
              <motion.div
                key={item.label}
                className="text-sm"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex items-center gap-2.5">
            {sosmed.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                }}
              >
                <Link href={'#'}>{item.icon}</Link>
              </motion.div>
            ))}
          </div>
        </NavMobile>
      </NavBar>
    </>
  );
}

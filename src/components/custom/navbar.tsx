'use client';
import { BsListNested } from 'react-icons/bs';
import { AnimatePresence } from 'motion/react';
import { motion } from 'framer-motion';

export const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full fixed z-10 top-0 left-0 bg-transparent">
        <div className="container mx-auto bg-transparent py-8">
          <div className="flex items-center justify-between">{children}</div>
        </div>
      </div>
    </>
  );
};

export const NavList = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`hidden lg:flex h-10 max-h-10 bg-zinc-900/50 backdrop-blur-md border-white/5 border shadow-xl items-center gap-4 rounded-xl px-5 py-2 ${className}`}>
      {children}
    </div>
  );
};

interface NavMobileProps {
  isOpen: boolean;
  onHandle: () => void;
  children: React.ReactNode;
}

export const NavMobile = ({ isOpen, onHandle, children }: NavMobileProps) => {
  return (
    <div className="lg:hidden relative z-50">
      {/* Toggle Button */}
      <motion.button
        className="p-2 rounded-full bg-zinc-900 text-white shadow-md"
        onClick={onHandle}
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsListNested size={20} />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - lower z-index than menu & button */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md border border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onHandle}
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-10 right-0 z-50 w-36 max-w-xs p-4 border border-white/5 bg-zinc-900 rounded-xl shadow-xl"
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

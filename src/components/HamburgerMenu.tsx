import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaEnvelope, FaHome, FaPalette, FaUserTie } from "react-icons/fa";


interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon:<FaHome/> },
    { name: 'Work', path: '/work', icon:<FaBriefcase/> },
    { name: 'Skills', path: '/skills', icon:<FaPalette/> },
    { name: 'Experience', path: '/experience', icon:<FaUserTie/>  },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope/>}
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-[var(--surface)] border-l border-[var(--border)] z-50 shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/logo/my-logo.png" 
                    alt="Nour Logo" 
                    className="h-8 w-8"
                  />
                  <span className="text-xl font-bold text-[var(--text-primary)]">
                    Nour
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <svg className="w-6 h-6 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 group ${
                        location.pathname === item.path
                          ? 'bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30'
                          : 'text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-hover)]'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="mobileActiveTab"
                          className="ml-auto w-2 h-2 bg-[var(--primary)] rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <p className="text-[var(--text-muted)] text-sm text-center">
                  Let's create something amazing together
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;

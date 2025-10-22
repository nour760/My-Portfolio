import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaEnvelope, FaHome, FaPalette, FaUserTie } from "react-icons/fa";
  const navItems:{name:string,path:string ,icon:React.ReactNode}[] = [
    { name: "Home", path: "/", icon: <FaHome/>},
    { name: "Work", path: "/work", icon: <FaBriefcase/> },
    { name: "Skills", path: "/skills", icon: <FaPalette/> },
    { name: "Experience", path: "/experience", icon: <FaUserTie/> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope/> },
  ];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-2xl shadow-black/20`}
      >
        <div className="px-4 lg:px-12">
          <div className="flex items-center justify-between ">
            <motion.div>
              <div className="flex items-center group">
                  <img
                    src="/logo/my-logo.png"
                    alt="Nour Logo"
                    className="h-16 w-16 lg:h-20 lg:w-20 transition-all duration-300 "
                  />
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`px-4 py-2 ${location.pathname ===item.path ? "border-b-4 border-[var(--primary)] bg-[var(--primary)]/20 rounded-t-3xl text-[var(--primary)] ":"text-[var(--text-secondary)]"}`}
                >
                  <Link
                    to={item.path}
                    className={`relative  rounded-xl  hover:text-[var(--primary)] transition-all duration-300 font-medium text-2xl group `}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity text">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden lg:inline-block">
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" md:inline-block hidden px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--blue-soft)] text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-2xl tracking-wide"
                >
                  Download CV
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" lg:inline-block hidden ml-6 px-6 py-3 bg-transparent  text-[var(--primary)] border-4 border-[var(--blue-soft)] font-semibold rounded-xl shadow-lg transition-all duration-300 text-2xl tracking-wide btn btn-secondary"
                >
                  Send DM
                </motion.a>
              </div>
            </div>

            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-xl hover:bg-[var(--surface-hover)] transition-all duration-300 group"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-1 left-0 w-6 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="absolute top-3 left-0 w-6 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-6 h-0.5 bg-[var(--text-primary)] rounded-full transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-[var(--surface)]/98 backdrop-blur-xl border border-[var(--border)]/50 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
                <nav className="p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 font-medium ${
                            location.pathname === item.path
                              ? "text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20"
                              : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-hover)]"
                          }`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-lg">{item.name}</span>
                          {location.pathname === item.path && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="ml-auto w-2 h-2 bg-[var(--primary)] rounded-full"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-[var(--border)]/50"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-6 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--blue-soft)] text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Let's Work Together
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

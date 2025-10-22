import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  FaLinkedin, FaBehance, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/nourdesigns444?igsh=MThxc2ZoajA2bms4OA==", label: "Instagram" },
    { icon: FaBehance, href: "https://www.behance.net/nourgraphic1", label: "Behance" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61582307720278", label: "Facebook" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] ">
      <div className=" max-w-[90%] mx-auto mt-12 ">
        <div className="lg:flex justify-between mb-8 ">
          <div className="space-y-4">
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
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-120">
              Creative graphic designer passionate about bringing ideas to life through 
              beautiful, functional design solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--background)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-hover)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:text-center mr-[12%]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <p className="text-[var(--text-secondary)]">
                <span className="text-[var(--primary)]">Email:</span> mailto:nourgraphic1@gmail.com
              </p>
              <p className="text-[var(--text-secondary)]">
                <span className="text-[var(--primary)]">Phone:</span>+963 **** *** ***
              </p>
              <p className="text-[var(--text-secondary)]">
                <span className="text-[var(--primary)]">Location:</span>Syria, Hama
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--text-muted)] text-sm ml-[50%] mb-8">
              © {currentYear} Nour. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

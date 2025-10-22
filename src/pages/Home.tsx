import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLinkedin,
  FaBehance,
  FaHandPeace,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/nourdesigns444?igsh=MThxc2ZoajA2bms4OA==", label: "Instagram" },
    { icon: FaBehance, href: "https://www.behance.net/nourgraphic1", label: "Behance" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61582307720278", label: "Facebook" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero.jpg)",
          filter: "blur(10px)",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center pt-20 lg:pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto text-center justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 md:ml-[42%] ml-[36%]"
            >
              <span className="max-w-42 px-4 py-2 bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm font-medium border border-[var(--primary)]/30 flex gap-3">
                <FaHandPeace /> Hello, I'm Nour
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-[var(--text-primary)]">Creative</span>
              <br />
              <span className="text-[var(--primary)] text-glow">
                Graphic Designer
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              I always strive to create designs that tell you a story, connect
              with your audience, and combine with creativity and clarity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/work"
                className="btn btn-primary text-lg px-8 py-4 rounded-xl group"
              >
                View My Work
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary text-lg px-8 py-4 rounded-xl"
              >
                Let's Collaborate
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--surface-hover)] transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-[var(--text-muted)]"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

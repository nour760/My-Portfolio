import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/skillsData'
import SkillsCard from '../components/SkillsCard';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allCategories = ['All', ...skillCategories];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] mt-20">
      <section className="section pt-28 lg:pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">My</span>{' '}
              <span className="text-[var(--primary)] text-glow">Skills</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities, design expertise, and professional skills. 
              I continuously learn and adapt to new technologies and design trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[var(--primary)] text-white shadow-lg'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <SkillsCard skill={skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredSkills.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                No skills found
              </h3>
              <p className="text-[var(--text-secondary)]">
                Try selecting a different category to see more skills.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)]">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                Skills Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    {skills.filter(s => s.level >= 4).length}
                  </div>
                  <div className="text-[var(--text-secondary)]">Expert Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    {skills.filter(s => s.level === 3).length}
                  </div>
                  <div className="text-[var(--text-secondary)]">Proficient</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                    {skills.length}
                  </div>
                  <div className="text-[var(--text-secondary)]">Total Skills</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

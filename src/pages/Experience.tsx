import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
              <span className="text-[var(--primary)] text-glow">Experience</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              A journey through my professional career, showcasing growth, achievements, and the diverse projects 
              that have shaped my expertise in graphic design and creative direction.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--blue-soft)] to-[var(--primary)] transform md:-translate-x-0.5" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-[var(--background)] transform md:-translate-x-2 z-10" />

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <ExperienceCard experience={experience} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)]">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 text-center">
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                    {new Date().getFullYear() - 2024}+
                  </div>
                  <div className="text-[var(--text-secondary)]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                    5+
                  </div>
                  <div className="text-[var(--text-secondary)]">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                    3+
                  </div>
                  <div className="text-[var(--text-secondary)]">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;


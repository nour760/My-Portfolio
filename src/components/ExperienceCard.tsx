import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { Experience } from '../data/experienceData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'freelance':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contract':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'internship':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-[var(--primary)]/20 text-[var(--primary)] border-[var(--primary)]/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="card cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                {experience.title}
              </h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(experience.type)}`}>
                {experience.type.replace('-', ' ')}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 text-[var(--text-secondary)] text-sm mb-2">
              <div className="flex items-center">
                <FaBriefcase className="mr-1" />
                {experience.company}
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                {experience.location}
              </div>
            </div>

            <div className="flex items-center text-[var(--text-muted)] text-sm">
              <FaCalendarAlt className="mr-1" />
              {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
            </div>
          </div>

          <button className="p-2 rounded-lg hover:bg-[var(--surface-hover)] transition-colors">
            {isExpanded ? (
              <FaChevronUp className="w-4 h-4 text-[var(--text-primary)]" />
            ) : (
              <FaChevronDown className="w-4 h-4 text-[var(--text-primary)]" />
            )}
          </button>
        </div>

        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          {experience.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-[var(--border)] space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

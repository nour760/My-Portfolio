import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/skillsData';

interface SkillsCardProps {
  skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  const getLevelColor = (level: number) => {
    if (level >= 4) return 'text-[var(--primary)]';
    if (level >= 3) return 'text-yellow-500';
    return 'text-[var(--text-muted)]';
  };

  const getLevelText = (level: number) => {
    if (level >= 5) return 'Expert';
    if (level >= 4) return 'Advanced';
    if (level >= 3) return 'Proficient';
    if (level >= 2) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="card h-full text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ml-[40%] text-[var(--primary)]">
          {skill.icon}
        </div>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors">
          {skill.name}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          {skill.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[var(--text-muted)]">Level</span>
            <span className={`font-medium ${getLevelColor(skill.level)}`}>
              {getLevelText(skill.level)}
            </span>
          </div>

          <div className="w-full bg-[var(--muted)] rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(skill.level / 5) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-2 rounded-full ${
                skill.level >= 4 
                  ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--blue-soft)]'
                  : skill.level >= 3
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                  : 'bg-gradient-to-r from-[var(--text-muted)] to-[var(--text-secondary)]'
              }`}
            />
          </div>

          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index < skill.level
                    ? skill.level >= 4
                      ? 'bg-[var(--primary)]'
                      : skill.level >= 3
                      ? 'bg-yellow-500'
                      : 'bg-[var(--text-muted)]'
                    : 'bg-[var(--muted)]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <span className="px-2 py-1 bg-[var(--surface-hover)] text-[var(--text-muted)] text-xs rounded-full">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;

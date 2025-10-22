import { motion } from 'framer-motion';
import { Project } from '../data/projectData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="card h-full overflow-hidden">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}

        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium rounded-full">
              {project.category}
            </span>
            <span className="text-[var(--text-muted)] text-sm">
              {project.year}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[var(--surface)] text-[var(--text-muted)] text-xs rounded border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-[var(--surface)] text-[var(--text-muted)] text-xs rounded border border-[var(--border)]">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

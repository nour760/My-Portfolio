import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";
import { Project } from "../data/projectData";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
  setEnlarge:(img:string)=>void
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onClose,
  setEnlarge
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-[var(--surface)] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[var(--border)]"
        >
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium rounded-full">
                {project.category}
              </span>
              <div className="flex items-center text-[var(--text-muted)] text-sm">
                <FaCalendarAlt className="mr-2" />
                {project.year}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
            >
              <FaTimes className="w-5 h-5 text-[var(--text-primary)]" />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                {project.title}
              </h2>

              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center">
                  <FaTag className="mr-2 text-[var(--primary)]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm font-medium border border-[var(--primary)]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setEnlarge(image)}
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">
                          Click to enlarge
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Live Project
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </AnimatePresence>
  );
};

export default ProjectDetails;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import { FaSearch, FaTimes } from "react-icons/fa";

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
    "UI/UX",
    "Social Media",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
  const [Enlarge, setEnlarge] = useState("");

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
              <span className="text-[var(--text-primary)]">My</span>
              <span className="text-[var(--primary)] text-glow">Work</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Here I showcase my unique projects each design reflect my passion
              for creativity, attention to details, and the different challenges
              I have embraced.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4 ml-[47%] text-[var(--primary)]">
                <FaSearch />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                No projects found
              </h3>
              <p className="text-[var(--text-secondary)]">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
            setEnlarge={setEnlarge}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>

      {Enlarge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.img src={Enlarge} ></motion.img>
          <button className=" absolute top-20 right-20 " onClick={()=>setEnlarge("")}> <FaTimes className=" h-12 w-12 rounded-full"/></button>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Work;

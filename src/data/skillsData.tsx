import { JSX } from "react";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaChartBar, FaCode, FaComments, FaFigma, FaFileAlt, FaFillDrip, FaFilm, FaFont, FaLaptopCode, FaLightbulb, FaMobile, FaMobileAlt, FaPrint, FaRulerCombined, FaSearch, FaSketch, FaTag, FaTools } from "react-icons/fa";

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number; 
  description: string;
  icon: JSX.Element;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "Adobe Illustrator",
    category: "Design Software",
    level: 5,
    description: "Expert in vector graphics, logo design, and illustration",
    icon: <DiIllustrator/>
  },
  {
    id: 2,
    name: "Adobe Photoshop",
    category: "Design Software",
    level: 5,
    description: "Advanced photo editing, digital art, and compositing",
    icon: <DiPhotoshop/>
  },
  {
    id: 3,
    name: "Adobe InDesign",
    category: "Design Software",
    level: 4,
    description: "Professional layout design and print production",
    icon: <FaFileAlt/>
  },
  {
    id: 4,
    name: "Figma",
    category: "Design Software",
    level: 3,
    description: "UI/UX design, prototyping, and collaborative design",
    icon: <FaFigma/>
  },
  {
    id: 5,
    name: "Adobe XD",
    category: "Design Software",
    level: 3,
    description: "User experience design and interactive prototyping",
    icon: <FaMobileAlt/>
  },
  {
    id: 6,
    name: "Sketch",
    category: "Design Software",
    level: 4,
    description: "Interface design and digital product design",
    icon: <FaSketch/>
  },

  {
    id: 7,
    name: "Brand Identity",
    category: "Design Skills",
    level: 5,
    description: "Complete brand development from concept to guidelines",
    icon: <FaTag/>
  },
  {
    id: 8,
    name: "UI/UX Design",
    category: "Design Skills",
    level: 3,
    description: "User-centered design and interface optimization",
    icon: <FaLaptopCode/>
  },
  {
    id: 9,
    name: "Typography",
    category: "Design Skills",
    level: 5,
    description: "Font selection, hierarchy, and text layout",
    icon: <FaFont/>
  },
  {
    id: 10,
    name: "Color Theory",
    category: "Design Skills",
    level: 5,
    description: "Color psychology, palettes, and visual harmony",
    icon: <FaFillDrip/>
  },
  {
    id: 11,
    name: "Layout Design",
    category: "Design Skills",
    level: 5,
    description: "Grid systems, composition, and visual hierarchy",
    icon: <FaRulerCombined/>
  },
  {
    id: 12,
    name: "Print Design",
    category: "Design Skills",
    level: 4,
    description: "Brochures, posters, and print production",
    icon: <FaPrint/>
  },

  {
    id: 13,
    name: "HTML/CSS",
    category: "Technical Skills",
    level: 3,
    description: "Basic web development and styling",
    icon: <FaCode/>
  },
  {
    id: 14,
    name: "Responsive Design",
    category: "Technical Skills",
    level: 4,
    description: "Mobile-first and adaptive design principles",
    icon: <FaMobile/>
  },
  {
    id: 15,
    name: "Prototyping",
    category: "Technical Skills",
    level: 4,
    description: "Interactive prototypes and user testing",
    icon: <FaTools/>
  },
  {
    id: 16,
    name: "Animation",
    category: "Technical Skills",
    level: 3,
    description: "Motion graphics and micro-interactions",
    icon: <FaFilm/>
  },

  {
    id: 17,
    name: "Creative Thinking",
    category: "Soft Skills",
    level: 5,
    description: "Innovative problem-solving and ideation",
    icon: <FaLightbulb/>
  },
  {
    id: 18,
    name: "Communication",
    category: "Soft Skills",
    level: 5,
    description: "Client relations and team collaboration",
    icon: <FaComments/>
  },
  {
    id: 19,
    name: "Project Management",
    category: "Soft Skills",
    level: 4,
    description: "Timeline management and workflow optimization",
    icon: <FaChartBar/>
  },
  {
    id: 20,
    name: "Attention to Detail",
    category: "Soft Skills",
    level: 5,
    description: "Precision in design execution and quality control",
    icon: <FaSearch/>
  }
];

export const skillCategories = [
  "Design Software",
  "Design Skills", 
  "Technical Skills",
  "Soft Skills"
];

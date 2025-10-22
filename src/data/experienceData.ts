export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  achievements: string[];
  type: "full-time" | "Freelance" | "contract" | "internship" |"Personal Project" |"Training";
}

export const experiences: Experience[] = [
{
    id: 1,
    title: "Graphic Designer Intern",
    company: "Personal Training Project",
    location: "Syria, Damascus",
    startDate: "2024-02",
    endDate: "2024-12",
    description: "Voluntary training in assisting design teams in creating visual identities for clients and gaining practical experience in designing for social media platforms.",
    responsibilities: [
      "Applying design principles under the supervision of a professional",
      "Designing social media posts and simple identity elements",
      "Designing logos and visual identities for startups and personal initiatives",
      "Editing images and preparing graphics for digital and print use",
      "Participating in brainstorming sessions and evaluating designs",
    ],
    achievements: [
      "Successfully completing the training period",
      "Contributing to more than 3 real volunteer projects for different clients",
      "Developing skills in coordinating elements and understanding the fundamentals of design and brand identity",
      "Receiving an excellent evaluation from  Supervisors"
    ],
    type: "Training"
  },
  {
    id: 2,
    title: "Creative Personal Project",
    company: "Self-Initiated",
    location: "Remote",
    startDate: "2025-02",
    endDate: "2025-03",
    description: "Design a logo and personal visual identity that reflects my design philosophy and creative style, with a focus on simplicity, balance, and modern aesthetics.",
    responsibilities: [
"Develop initial ideas and sketch initial logo designs",
"Select fonts and color palette to align with professional design",
"Create an integrated logo system for digital and print use",
"Document the design process and publish it as a project on social media platforms"
],
    achievements: [
      "Build a personal identity that reflects my design values",
      "Received positive feedback from designers and online design communities",
      "Developed my skills in personal branding and conceptual design",
      "Applied the logo consistently across portfolios and social platforms"
    ],
    type: "Personal Project"
  },

  {
    id: 3,
    title: "Expert Graphic Designer",
    company: "Freelance",
    location: "Remote",
    startDate: "2025-04",
    endDate: "2025-now",
    description:"Working with clients from diverse backgrounds to transform their ideas into creative, thoughtful designs that tell each client's story. Focusing on brand identity, social media designs, and character design.",
    responsibilities: [
    "Developing customized brand identities that fit each client's vision and market",
    "Communicating directly with clients to understand their goals and provide feedback",
    "Delivering projects on time while maintaining high quality",
    "Designing mockups to showcase the logo in real-world applications",
    ],
    achievements: [
    "Building strong, long-term relationships with clients.",
    "Developing the ability to transform ideas into unique and expressive designs.",
    "Informally mentoring emerging freelance designers by sharing tips and feedback.",
    "Helping small businesses stand out with a consistent visual identity.",
    ],
    type: "Freelance"
  },
];

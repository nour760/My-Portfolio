export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Spicy",
    description:
      "A dynamic logo that reflects a spicy and vibrant flavor, appealing to discerning food lovers.",
    longDescription:
      'This logo\'s design is inspired by the spirit of flavorful Indian cuisine, with warm colors that reflect the heat of spices. The modern lines give the restaurant a strong identity that distinguishes its brand.',
    category: "Visual Identity",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/spicy/main.jpg",
      "/project-images/spicy/m1.jpg",
      "/project-images/spicy/m2.jpg",
      "/project-images/spicy/m3.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2024,
  },
  {
    id: 2,
    title: "وهج",
    description:
      "An elegant and calming logo that expresses the warmth and tranquility that candles provide.",
    longDescription:
      "The 'وهج' logo design blends warmth and simplicity. The soft colors and curved lines reflect a sense of relaxation and serenity, while the innovative candle symbol adds an artistic touch that distinguishes the brand and creates a memorable and eye-catching visual identity.",
    category: "Visual Identity",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Mockups"],
    images: [
      "/project-images/wahj/main.jpg",
      "/project-images/wahj/m1.jpg",
      "/project-images/wahj/m2.jpg",
      "/project-images/wahj/m3.jpg",
    ],
    liveUrl: "https://example.com",
    featured: true,
    year: 2024,
  },
  {
    id: 3,
    title: "Aurora",
    description:
      "A luxurious logo that reflects elegance and brilliance, just like fine jewelry.",
    longDescription: "This logo's design reflects luxury and distinction. The precise lines and meticulous details give the brand a sophisticated identity, making customers feel the value and beauty of every piece of Aurora jewelry. The colors leave a strong visual impression, in keeping with the world of fine jewelry",
    category: "Visual Identity",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Mockups"],
    images: [
      "/project-images/aurora/main.jpg",
      "/project-images/aurora/m1.jpg",
      "/project-images/aurora/m2.jpg",
      "/project-images/aurora/m3.jpg",
      "/project-images/aurora/m4.jpg",
    ],
    liveUrl: "https://example.com",
    featured: true,
    year: 2025,
  },
];

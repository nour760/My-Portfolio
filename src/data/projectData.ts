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
    {
    id: 4,
    title: "Nissan Coffee",
    description:
      "Modern business card design for Nissan cafe",
    longDescription:
      'The Nissan Café business card is designed in a modern style that reflects the places identity and its calm, classic character, relying on a harmonious blend of colors inspired by the warm ambiance of coffee.',
    category: "typography",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/nissan-coffee/m1.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2025,
  },
   {
    id: 5,
    title: "Adv",
    description:
      "Let your design talk about you",
    longDescription:
      'This design focuses on expressing creativity and distinction among competitors; in other words, the visual identity is the first voice that speaks for you before any words you say.',
    category: "social media",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/adv/m1.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2025,
  }, {
    id: 6,
    title: "Home coffee",
    description:
      "A warm identity that combines the spirit of coffee and the comfort of home",
    longDescription:
      'The Home Coffee logo reflects the concept of a place that combines comfort and style in a harmonious design, conveying a sense of warmth and tranquility. The logo relies on simple, clean lines that highlight a modern aesthetic.',
    category: "Visual Identity",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/home-coffee/m1.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2025,
  },
    {
    id: 7,
    title: "ENTERX",
    description:
      "The logo symbolizes progress and growth.",
    longDescription:
      'The X logos design was inspired by the concept of continuous evolution and growth to reflect the journey of building software',
    category: "Visual Identity",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/enter-x/m1.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2025,
  },
    {
    id: 8,
    title: "aégle",
    description:
  "Modern informal social media design for an olive oil advertisement",
    longDescription:
      'The design reflects the spirit of authenticity and freshness that characterizes natural olive oil, relying on warm and natural colors such as olive green, beige, and golden yellow, giving the viewer a sense of nature, health, purity, and product quality in an attractive visual way.',
    category: "social media",
    technologies: ["Adobe Illustrator", "Adobe Photoshop","Mockups"],
    images: [
      "/project-images/aegle/m1.jpg",
    ],
    featured: true,
    liveUrl: "https://example.com",
    year: 2025,
  }
];

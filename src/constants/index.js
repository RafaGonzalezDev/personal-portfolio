// Constantes para el resumen profesional
export const PROFESSIONAL_SUMMARY = {
  title: 'Software Developer',
  name: 'Rafa González Rubio',
  description: `Software engineer specialized in **Angular**, global state optimization with **NgRx**, and **scalable architecture**. **Technical leadership** and commitment to quality standards, multifunctional collaboration, and continuous improvement. Consolidated experience in **large-scale projects** and **high availability**, focused on continuous improvement and business value optimization.`,
};

// Constantes para la navegación
export const NAVBAR_ITEMS = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'projects',
    label: 'Projects',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];

// Constantes para la sección de experiencia
export const EXPERIENCES = [
  {
    date: 'Nov 2023 – Present',
    company: 'UST Global | Banco Santander',
    role: 'Software Developer',
    description: `**Led the integral development and optimization** of a micro frontend with **Angular** and **TypeScript**.
- Implemented **NgRx** and a custom state system, improving performance and consistency.
- Designed a **custom routing system** for micro frontends encapsulated through **Module Federation**.
- **Promoted quality standards and best practices**, applying unit testing and integration with **Jasmine** and **Karma**.
- **Collaborated strategically** with QA, development, and business teams in high-availability production environments.
Technologies: Angular, TypeScript, NgRx, Node.js, Module Federation, Jasmine, Karma.`,
  },
  {
    date: 'Mar 2023 – Aug 2023',
    company: 'GrayHats',
    role: 'Software Developer',
    description: `Designed **advanced solutions** with **React** and **GraphQL**, optimizing operational efficiency.
- Developed **backend services** with **AWS Amplify**, ensuring secure integration and scalability.
- Built a **full-stack cultural events platform** with modern architecture and optimized user experience.
- Implemented **hybrid API strategies** combining GraphQL and REST for flexible data management.
Technologies: React, Node.js, GraphQL, REST APIs, AWS Amplify, MongoDB, JavaScript.`,
  },
  {
    date: 'Sep 2021 – Jun 2023',
    company: 'MEDAC',
    role: 'Higher Technician in Web Application Development',
    description: `**Comprehensive training** in modern web development with hands-on **real-world projects**.
- Developed **full-stack applications** using JavaScript, **TypeScript**, **React**, and **PHP** with **Laravel**.
- Gained expertise in **database management** with both **SQL** and **NoSQL** systems.
- Applied **MVC architecture patterns** and modern development methodologies.
Technologies: JavaScript, TypeScript, React, PHP, Laravel, Java, SQL, NoSQL, HTML5, CSS3.`,
  },
];

// Constantes para la sección de proyectos
export const PROJECTS = [
  {
    id: 1,
    title: 'YouTube Transcript CLI',
    description: 'CLI tool to download YouTube video transcripts in Markdown format. It extracts video IDs, downloads transcripts in specified languages, and saves them to .md files.',
    technologies: ['Python', 'youtube-transcript-api'],
    image: '',
    githubUrl: 'https://github.com/RafaGonzalezDev/youtube-transcript-cli',
    liveUrl: '',
    featured: true,
    year: '2024',
    category: 'CLI Tool',
    highlights: ['Extracts YouTube video ID from any URL format', 'Downloads transcript in the specified language', 'Formats transcript and saves it to a .md file'],
  },
  {
    id: 2,
    title: 'HiLink',
    description:
      'Frontend design of a travel and adventure application implemented with CSS-in-JS. Best development practices were applied to create a modern and responsive user interface, making use of reusable components and a scalable architecture.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    image: '/projects/document-platform.jpg',
    githubUrl: 'https://github.com/RafaGonzalezDev/hilink',
    liveUrl: 'https://document-platform.example.com',
    featured: true,
    year: '2024',
    category: 'Enterprise Web Development',
    highlights: ['Scalable micro frontend architecture', 'Advanced permissions system', 'Optimized document loading and search'],
  },
  {
    id: 3,
    title: 'HooBank',
    description:
      'Frontend implementation of a modern banking platform using CSS-in-JS for component styling. The project was developed following web development best practices, with a focus on accessibility, performance, and fluid user experience.',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    image: '/projects/cultural-events.jpg',
    githubUrl: 'https://github.com/RafaGonzalezDev/hoobank',
    liveUrl: 'https://cultural-events.example.com',
    featured: true,
    year: '2023',
    category: 'Full Stack Application',
    highlights: ['Personalized recommendation system', 'Payment gateway integration', 'Real-time notifications'],
  },
];

// Constantes para el carrusel de tecnologías
export const TECH_STACK = [
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'NgRx',
    icon: 'https://ngrx.io/assets/images/badge.svg',
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Vite',
    icon: 'https://vitejs.dev/logo.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
];

// Constantes para la sección de contacto
export const CONTACT_INFO = {
  title: 'Contact',
  subtitle: "Let's Connect",
  description: "I'm open to job opportunities where I can contribute, learn and grow. Feel free to connect with me through social media:",
  contactMethods: [
    {
      id: 'github',
      icon: 'fa-github',
      value: 'GitHub',
      link: 'https://github.com',
      isLink: true,
      title: 'GitHub',
    },
    {
      id: 'linkedin',
      icon: 'fa-linkedin',
      value: 'LinkedIn',
      link: 'https://linkedin.com',
      isLink: true,
      title: 'LinkedIn',
    },
  ],
  closing: 'Looking forward to connecting with you!',
};

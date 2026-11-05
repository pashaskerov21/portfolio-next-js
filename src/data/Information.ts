import { PersonalInformationDataType } from "@/src/types";

const PersonalInformationData: PersonalInformationDataType = {
  title: "Alipasha Askerov | Portfolio",
  description:
    "Alipasha Askerov is a Software Engineer specializing in AI-powered web applications. Full-stack development with Next.js, React, Laravel, Node.js, and Claude AI integration. Available for freelance and full-time opportunities.",
  keywords:
    "Alipasha, Askerov, Alipasha Askerov, Askerov Alipasha, Əlipaşa, Əskərov, Əskərov Əlipaşa, Əlipaşa Əskərov, Developer, Frontend, Frontend Developer, Backend, Backend Developer, Fullstack, Fullstack developer, Web Developer, Web Development, React JS, Javascript, Next JS, PHP, Laravel, Typescript, Responsive Web Design, Next JS Developer, React JS Developer, software engineer, AI developer, claude, freelance developer, Azerbaijan Developer, Alipasha Askerov, software engineer, AI developer, full stack developer, Next.js developer, React developer, Laravel developer, Node.js developer, TypeScript developer, AI integration, Claude AI, web application development, freelance developer, portfolio",
  author_name: "Alipasha Askerov",
  author_url: "https://alipashaskerov.vercel.app",
  social: {
    github: "https://github.com/pashaskerov21",
    linkedin: "https://www.linkedin.com/in/alipasha-askerov-868213246/",
    whatsapp: "https://wa.me/+9940553220718",
    mail: "askerovpasha21@gmail.com",
  },
  home: {
    title: "Hi, I'm Alipasha Askerov",
    animationTitle: "Software Engineer",
    text: "Software Engineer building AI-powered web apps with Next.js, React, Laravel & Claude AI. Full-stack developer open to freelance and global opportunities.",
    location: "Baku, Azerbaijan",
    stack: ["Next.js", "React Native", "Laravel", "Node.js", "TypeScript"],
  },
  aboutText:
    "<p><strong>Software Engineer</strong> focused on building scalable, maintainable, and high-quality software systems. Experienced in full-stack web and mobile development using <strong>Next.js, React Native, Laravel, Node.js, and TypeScript</strong>, with hands-on experience integrating AI-powered features into production applications.</p><p>Strong believer in clean architecture, reusable systems, and thoughtful engineering, with experience delivering products from system design and implementation to deployment.</p>",
  cv: "/personal/Alipasha_Askerov_CV.pdf",
  image: "/personal/image.jpeg",
  experience: [
    {
      id: 1,
      position: "Software Engineer",
      company: "Azerbaijan University of Languages",
      location: "Tabriz Street, 81, Baku, Azerbaijan",
      start: "05/2026",
      end: "current",
      description: "Center of Artificial Intelligence",
      responsibilities: [
        "Lead development of a cross-platform AI assistant for university students using React Native, Next.js, TypeScript, Node.js, and Express, covering authentication, AI chat, and document upload.",
        "Integrate large language models into production applications via REST APIs for AI-powered academic assistance and document analysis.",
        "Design scalable frontend architecture, including reusable component systems, routing, and state management.",
        "Prepare structured Q&A datasets from university documents to build AI-ready knowledge bases for the retrieval pipeline.",
      ],
    },
    {
      id: 2,
      position: "Frontend Developer",
      company: "Safaroff Agency",
      location: "16 Vladisnav Plotnikov, Baku, Azerbaijan",
      start: "10/2025",
      end: "05/2026",
      description: "",
      responsibilities: [
        "Developed responsive, production-ready web applications using React, Next.js, Vue.js, Angular, and TypeScript.",
        "Delivered large-scale enterprise and government projects with complex multi-step forms and advanced state management.",
        "Integrated REST APIs and WebSocket-based AI chatbot functionality into production applications.",
        "Worked in Agile teams with PMs, designers, backend and QA engineers, reviewing requirements and designs and giving technical feedback before implementation.",
      ],
    },
    {
      id: 3,
      position: "Fullstack Developer",
      company: "Proton MMC",
      location: "Nerimanov, Baku, Azerbaijan",
      start: "10/2022",
      end: "06/2024",
      description: "",
      responsibilities: [
        "Joined as a Frontend Intern and earned a full-time position by delivering multiple responsive web projects.",
        "Independently delivered a complete Laravel-based CMS with secure authentication, admin panel, CRUD, multilingual support (AZ/EN/RU), SEO management, and file uploads.",
        "Built full-stack applications using Laravel, PHP, Next.js, TypeScript, SCSS, and MySQL with reusable, component-based frontend architecture.",
        "Handled deployment (cPanel, domains, Cloudflare, CI/CD) and mentored frontend interns.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      univercity: "Azerbaijan State Oil and Industry University",
      faculty: "İnformation Technology and Management",
      field: "Process Automation Engineering",
      degree: "Bachelor Degree",
      start: "2018",
      end: "2022",
      score: 545,
    },
    {
      id: 2,
      univercity: "Azerbaijan State Oil and Industry University",
      faculty: "İnformation Technology and Management",
      field: "Automation of Technological Processes and Production Engineering",
      degree: "Master Degree",
      start: "2022",
      end: "2024",
      score: 70,
    },
  ],
  services: [
    {
      id: 1,
      title: "Frontend Development",
      text: "Interactive and SEO-friendly interfaces developed using Next.js, Angular, and TypeScript.",
      icon: "palette",
    },
    {
      id: 2,
      title: "Backend Development",
      text: "Secure and efficient server-side applications created with Laravel PHP and optimized MySQL databases.",
      icon: "cog",
    },
    {
      id: 3,
      title: "Mobile App Development",
      text: "Cross-platform mobile applications developed using React Native and Expo for seamless iOS and Android experiences.",
      icon: "mobile",
    },
    {
      id: 4,
      title: "Website Optimization",
      text: "Website performance, loading speed, and user experience improved following SEO best practices.",
      icon: "rocket",
    },
    {
      id: 5,
      title: "API Development & Integration",
      text: "Scalable RESTful APIs developed and integrated seamlessly with frontend applications.",
      icon: "plug",
    },
    {
      id: 6,
      title: "Dashboard & Admin Panels",
      text: "User-friendly dashboards and admin panels designed with real-time data visualization and role-based access control.",
      icon: "chart-bar",
    },
  ],
};
export default PersonalInformationData;

import { PersonalInformationDataType } from "@/src/types"

const PersonalInformationData: PersonalInformationDataType = {
    title: "Alipasha Askerov | Portfolio",
    description: "I’m a full-stack developer specializing in frontend and backend web development. I build responsive, user-friendly websites and web applications using modern technologies like TypeScript, Next.js, React.js, and Laravel. With over 2 years of experience, I focus on writing clean, maintainable code and developing scalable solutions that improve user experience. I collaborate closely with clients to deliver high-performance websites, custom admin panels, and optimized SEO-friendly applications on time and within budget. If you’re looking for a dedicated remote full-stack developer, let’s connect and build something great together.",
    keywords: 'Alipasha, Askerov, Alipasha Askerov, Askerov Alipasha, Əlipaşa, Əskərov, Əskərov Əlipaşa, Əlipaşa Əskərov, Developer, Frontend, Frontend Developer, Backend, Backend Developer, Fullstack, Fullstack developer, Web Developer, Web Development, React JS, Javascript, Next JS, PHP, Laravel, Typescript, Responsive Web Design, Next JS Developer, React JS Developer',
    author_name: 'Alipasha Askerov',
    author_url: 'https://alipashaskerov.vercel.app',
    social: {
        github: "https://github.com/pashaskerov21",
        linkedin: "https://www.linkedin.com/in/alipasha-askerov-868213246/",
        whatsapp: "https://wa.me/+9940553220718",
        mail: "askerovpasha21@gmail.com"
    },
    home: {
        title: "Hi, I'm Alipasha Askerov",
        animationTitle: "frontend developer",
        text: "I am developing myself in the field of programming and Web Development. I have excellent knowledge and professional experience in this field and I continue to learn new technologies"
    },
    aboutText: "<p> As a <strong>Frontend Developer</strong>, I build high-performance, SEO-oriented, and responsive web applications and websites using modern web technologies, including <strong>Next.js, Vue.js, React.js, and Angular.js.</strong> I have experience creating interactive user interfaces (UI) with <strong>HTML, CSS, JavaScript, and TypeScript,</strong> coding based on UI/UX designs, and ensuring cross-browser compatibility.</p><p>On the backend side, I have experience with PHP and the <strong>Laravel framework,</strong> developing server-side functionality, integrating APIs, and working with databases. I focus on performance optimization, improving code quality, and writing unit and integration tests. My goal is to deliver optimized, fast, and reliable web solutions for clients and end-users.</p><p>I hold both a Bachelor's and a Master's degree from Azerbaijan State Oil and Industry University and have completed my military service.</p>",
    cv: "/personal/AlipashaAskerovCV.pdf",
    image: "/personal/image.jpeg",
    experience: [
        {
            id: 1,
            position: "Frontend Developer",
            company: "Safaroff Agency",
            location: "28 May, Baku, Azerbaijan",
            start: "10/2025",
            end: "current",
            description: '',
            responsibilities: [
                "Designing and developing user interfaces (UI) for web applications and websites.",
                "Coding responsive (mobile-friendly) interfaces based on UI/UX designs.",
                "Creating interactive elements using HTML, CSS, and JavaScript technologies.",
                "Working with frontend frameworks such as React.js, Vue.js, or others.",
                "Collaborating with the backend team to implement API integrations.",
                "Ensuring cross-browser compatibility and optimizing performance.",
                "Improving existing codebase and implementing new technologies.",
                "Writing unit and integration tests, identifying and fixing bugs.",
            ]
        },
        {
            id: 2,
            position: "Frontend Developer",
            company: "Proton MMC",
            location: "Nerimanov, Baku, Azerbaijan",
            start: "12/2022",
            end: "06/2024",
            description: 'Developed full-stack projects using Laravel, Next.js, HTML, CSS, JS, and jQuery. Built admin panels, integrated APIs, and managed server configuration, hosting, and domains.',
            responsibilities: [
                "Developed and maintained web applications with Laravel and Next.js",
                "Built admin panels for internal management systems",
                "Integrated RESTful APIs and ensured smooth data flow between frontend and backend",
                "Created responsive UIs using HTML, CSS, JavaScript, and jQuery",
                "Configured servers, managed hosting environments, and handled domain setups",
                "Optimized frontend performance and implemented best practices"
            ]
        },
        {
            id: 3,
            position: "Frontend Developer Intern",
            company: "Proton MMC",
            location: "Nerimanov, Baku, Azerbaijan",
            start: "10/2022",
            end: "12/2022",
            description: "Converted Figma designs into responsive websites using HTML, CSS, SCSS, JavaScript, and jQuery. Collaborated closely with backend developers to integrate functionality and complete full-stack projects.",
            responsibilities: [
                "Converted Figma designs into responsive web pages using HTML, CSS, SCSS, JS, and jQuery",
                "Worked collaboratively with backend developers to integrate APIs and functionality",
                "Implemented cross-browser compatible layouts and interactive elements",
                "Learned Agile development workflows and version control practices"
            ]
        },
        {
            id: 4,
            position: "Automation Engineer Intern",
            company: "Azersu OSJ",
            location: "Cheyranbatan, Sumgayit, Azerbaijan",
            start: "02/2022",
            end: "06/2022",
            description: "Worked with automation systems and gained experience in industrial processes.",
            responsibilities: [
                "Assisted in configuring SCADA systems",
                "Monitored sensors and PLC logic",
                "Prepared technical documentation"
            ]
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
            title: 'Web Development',
            text: 'Modern, responsive full-stack websites built with Next.js / Angular frontend and Laravel PHP backend.',
            icon: 'globe',
        },
        {
            id: 2,
            title: 'Frontend Development',
            text: 'Interactive and SEO-friendly interfaces developed using Next.js, Angular, and TypeScript.',
            icon: 'palette',
        },
        {
            id: 3,
            title: 'Backend Development',
            text: 'Secure and efficient server-side applications created with Laravel PHP and optimized MySQL databases.',
            icon: 'cog',
        },
        {
            id: 4,
            title: 'Website Optimization',
            text: 'Website performance, loading speed, and user experience improved following SEO best practices.',
            icon: 'rocket',
        },
        {
            id: 5,
            title: 'API Development & Integration',
            text: 'Scalable RESTful APIs developed and integrated seamlessly with frontend applications.',
            icon: 'plug',
        },
        {
            id: 6,
            title: 'Dashboard & Admin Panels',
            text: 'User-friendly dashboards and admin panels designed with real-time data visualization and role-based access control.',
            icon: 'chart-bar',
        },
    ]
}
export default PersonalInformationData
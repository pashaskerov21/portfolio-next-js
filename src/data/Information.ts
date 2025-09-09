import { PersonalInformationDataType } from "@/src/types"

const PersonalInformationData: PersonalInformationDataType = {
    title: "Alipasha Askerov | Portfolio",
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
        animationTitle: "fullstack developer",
        text: "I am developing myself in the field of programming and Web Development. I have excellent knowledge and professional experience in this field and I continue to learn new technologies"
    },
    aboutText: "I'm a full-stack developer with expertise in both frontend and backend development. I create interactive, user-focused web applications using modern technologies like TypeScript, Next.js, React.js, and Laravel. I am passionate about writing clean, maintainable code and building scalable systems that prioritize user experience. I enjoy bringing creative solutions to each project and collaborating closely with clients to deliver high-quality results on time and within budget. Let's build something great together — feel free to reach out and connect!",
    cv: "/personal/AlipashaAskerovCV.pdf",
    image: "/personal/image-2.png",
    experience: [
        {
            id: 1,
            position: "Frontend Developer",
            company: "Proton MMC",
            location: "Nerimanov, Baku",
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
            id: 2,
            position: "Frontend Developer Intern",
            company: "Proton MMC",
            location: "Nerimanov, Baku",
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
            id: 3,
            position: "Automation Engineer Intern",
            company: "Azersu OSJ",
            location: "Cheyranbatan, Sumgayit",
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
        },
        {
            id: 2,
            univercity: "Azerbaijan State Oil and Industry University",
            faculty: "İnformation Technology and Management",
            field: "Automation of Technological Processes and Production Engineering",
            degree: "Master Degree",
            start: "2022",
            end: "2024",
        },
    ],
}
export default PersonalInformationData
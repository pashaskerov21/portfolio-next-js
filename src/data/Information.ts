import { PersonalInformationDataType } from "@/src/types"

const PersonalInformationData:PersonalInformationDataType = {
    social: {
        github: "https://github.com/pashaskerov21",
        linkedin: "https://www.linkedin.com/in/alipasha-askerov-868213246/",
        whatsapp: "https://wa.me/+9940553220718",
        mail: "mailto:askerovpasha21@gmail.com"
    },
    home: {
        title: "Hi, I'm Alipasha Askerov",
        animationTitle: "frontend developer",
        text: "I am developing myself in the field of programming and Front-End development. I have excellent knowledge and professional experience in this field and I continue to learn new technologies"
    },
    aboutText: "I have been developing myself in the field of Frontend Developer for 3 years now and I have experience with many technologies, I am improving myself in this field. Currently, I am working in the field of Frontend Development. I am experienced in developing powerful websites that meet client goals. Able to identify needs, create plans, and work with clients to optimize design usability and performance. I can work effectively without supervision and learn new skills quickly. I develop web pages that are responsive to all devices in a form according to the wishes of the clients. I have a great passion for programming and am constantly improving my knowledge in this field.",
    cv: "/personal/AlipashaAskerovCV.docx",
    image: "/personal/image-2.png",
    experience: [
        {
            id: 1,
            position: "Automation Engineer Intern",
            company: "Azersu OSJ",
            location: "Cheyranbatan, Sumgayit",
            start: "02/2022",
            end: "06/2022",
        },
        {
            id: 2,
            position: "Frontend Developer Intern",
            company: "Proton MMC",
            location: "Nerimanov, Baku",
            start: "10/2022",
            end: "12/2022",
        },
        {
            id: 3,
            position: "Frontend Developer",
            company: "Proton MMC",
            location: "Nerimanov, Baku",
            start: "12/2022",
            end: "Current",
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
    ]
}
export default PersonalInformationData
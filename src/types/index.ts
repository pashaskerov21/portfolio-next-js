export type PersonalInformationDataType = {
    title: string,
    keywords: string,
    author_name: string,
    author_url: string,
    social: {
        github: string,
        linkedin: string,
        whatsapp: string,
        mail: string,
    },
    home: {
        title: string,
        animationTitle: string,
        text: string,
    },
    aboutText: string,
    cv: string,
    image: string,
    experience: {
        id: number,
        position: string,
        company: string,
        location: string,
        start: string,
        end: string,
    }[],
    education: {
        id: number,
        univercity: string,
        faculty: string,
        field: string,
        degree: string,
        start: string,
        end: string,
    }[]
};
export type MenuDataType = {
    id: number,
    name: string,
};
export type ProjectDataType = {
    title: string,
    image: string,
    previewStatus: boolean,
    githubStatus: boolean,
    home: boolean,
    category: number,
    previewLink: string,
    githubLink: string,
    skills: string[],
};
export type SkillDataType = {
    id: number,
    title: string,
    logo: string,
    logo_dark: string,
    color: string,
};
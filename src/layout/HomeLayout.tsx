'use client'
import React from 'react'
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../types'
import { AboutSection, ContactSection, EducationSection, ExperienceSection, HomeSection, ProjectSection, SkillSection } from '../sections'

type HomeLayoutProps = {
    personalInformationData: PersonalInformationDataType,
    projectData: ProjectDataType[],
    skillData: SkillDataType[],
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ personalInformationData, projectData, skillData }) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        },2000);
    }, []);
    return (
        <React.Fragment>
            <HomeSection personalInformationData={personalInformationData} />
            <AboutSection personalInformationData={personalInformationData} />
            <SkillSection skillData={skillData} />
            <ProjectSection projectData={projectData} skillData={skillData} />
            <ExperienceSection personalInformationData={personalInformationData} />
            <EducationSection personalInformationData={personalInformationData} />
            <ContactSection />
        </React.Fragment>
    )
}

export default HomeLayout

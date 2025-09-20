'use client'
import React from 'react'
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../types'
import { AboutSection, ContactSection, EducationSection, ExperienceSection, HomeSection, ProjectSection, SkillSection } from '../sections'
import ServiceSection from '../sections/Services'

type HomeLayoutProps = {
    personalInformationData: PersonalInformationDataType,
    projectData: ProjectDataType[],
    skillData: SkillDataType[],
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ personalInformationData, projectData, skillData }) => {
    return (
        <React.Fragment>
            <HomeSection personalInformationData={personalInformationData} />
            <AboutSection personalInformationData={personalInformationData} />
            <ServiceSection/>
            <ExperienceSection personalInformationData={personalInformationData} />
            <SkillSection skillData={skillData} />
            <ProjectSection projectData={projectData} skillData={skillData} />
            <EducationSection personalInformationData={personalInformationData} />
            <ContactSection />
        </React.Fragment>
    )
}

export default HomeLayout

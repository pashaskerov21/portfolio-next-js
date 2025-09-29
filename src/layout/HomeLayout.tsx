'use client'
import React from 'react'
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../types'
import Banner from '../sections/Banner'
import About from '../sections/About'
import Services from '../sections/Services'
import Skills from '../sections/Skills'
import ProjectsGrid from '../sections/ProjectsGrid'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Contact from '../sections/Contact'


type HomeLayoutProps = {
    personalInformationData: PersonalInformationDataType,
    projectData: ProjectDataType[],
    skillData: SkillDataType[],
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ personalInformationData, projectData, skillData }) => {
    return (
        <React.Fragment>
            <Banner personalData={personalInformationData} />
            <About personalData={personalInformationData} />
            <Services personalData={personalInformationData} />
            <Experience personalData={personalInformationData} />
            <Skills skillData={skillData} />
            <ProjectsGrid skillData={skillData} projectData={projectData} page='home' />
            <Education personalData={personalInformationData} />
            <Contact/>
        </React.Fragment>
    )
}

export default HomeLayout

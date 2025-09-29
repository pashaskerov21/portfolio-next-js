'use client'
import React from 'react'
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../types'
import Services from '../sections/Services'
import ProjectsGrid from '../sections/ProjectsGrid'
import Contact from '../sections/Contact'


type HomeLayoutProps = {
    personalInformationData: PersonalInformationDataType,
    projectData: ProjectDataType[],
    skillData: SkillDataType[],
}

const ProjectsLayout: React.FC<HomeLayoutProps> = ({ personalInformationData, projectData, skillData }) => {
    return (
        <React.Fragment>
            <ProjectsGrid skillData={skillData} projectData={projectData} page='projects'/>
            <Services personalData={personalInformationData}/>
            <Contact/>
        </React.Fragment>
    )
}

export default ProjectsLayout

'use client'
import React from 'react'
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../types'
import { About, Contact, Education, Experience, Home, Projects, Skills } from '../sections'

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
            <Home loading={loading} personalInformationData={personalInformationData} />
            <About loading={loading} personalInformationData={personalInformationData} />
            <Skills loading={loading} skillData={skillData} />
            <Projects loading={loading} projectData={projectData} skillData={skillData} />
            <Experience loading={loading} personalInformationData={personalInformationData} />
            <Education loading={loading} personalInformationData={personalInformationData} />
            <Contact loading={loading} />
        </React.Fragment>
    )
}

export default HomeLayout

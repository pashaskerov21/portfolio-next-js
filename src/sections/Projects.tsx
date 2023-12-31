'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Image from 'next/image'
import ProjectSkills from '../components/ProjectSkills'
import { FiGithub } from 'react-icons/fi'
import { BsFillEyeFill } from 'react-icons/bs'
import { ProjectDataType, SkillDataType } from '../types'
import { Container } from '../styles/components/container'
import { AllProjectButton, ProjectCard, ProjectContent, ProjectsWrapper } from '../styles/sections/projects'

const ProjectSection: React.FC<{ projectData: ProjectDataType[], skillData: SkillDataType[] }> = ({ projectData, skillData }) => {
    const [projects, setProjects] = React.useState<ProjectDataType[]>(projectData.filter((data) => data.home));
    const [status, setStatus] = React.useState<boolean>(false)
    React.useEffect(() => {
        if(status){
            setProjects(projectData);
        }
    },[status]);
    return (
        <section id="projects">
            <Container>
                <SectionTitle title='projects' />
                <ProjectsWrapper>
                    {
                        projects.map((project) => (
                            <ProjectCard key={project.id}>
                                <Image className='project-img' src={project.image} width={400} height={200} alt='' />
                                <ProjectContent>
                                    <div className="inner">
                                        <h3 className='title'>{project.title}</h3>
                                        <ProjectSkills skillNames={project.skills} skillData={skillData} />
                                    </div>
                                    <div className="links">
                                        {
                                            project.previewStatus && <a href={project.previewLink} target='_blank'><BsFillEyeFill /></a>
                                        }
                                        {
                                            project.githubStatus && <a href={project.githubLink} target='_blank'><FiGithub /></a>
                                        }
                                    </div>
                                </ProjectContent>
                            </ProjectCard>
                        ))
                    }
                </ProjectsWrapper>
                {!status && <AllProjectButton onClick={() => setStatus(true)}>See all projects</AllProjectButton>}
            </Container>
        </section>
    )
}

export default ProjectSection

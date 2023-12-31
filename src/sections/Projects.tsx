'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Image from 'next/image'
import ProjectSkills from '../components/ProjectSkills'
import { FiGithub } from 'react-icons/fi'
import { BsFillEyeFill } from 'react-icons/bs'
import { ProjectDataType, SkillDataType } from '../types'
import { Container } from '../styles/components/container'
import { ProjectCard, ProjectContent, ProjectsWrapper } from '../styles/sections/projects'

const Projects: React.FC<{ loading: boolean, projectData: ProjectDataType[], skillData: SkillDataType[] }> = ({ projectData, skillData }) => {

    return (
        <section id="projects">
            <Container>
                <SectionTitle title='projects' />
                <ProjectsWrapper>
                    {
                        projectData.map((project) => (
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
            </Container>
        </section>
    )
}

export default Projects

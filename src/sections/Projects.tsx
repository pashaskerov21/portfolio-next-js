import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import ProjectSkills from '../components/ProjectSkills';
import { FiGithub } from 'react-icons/fi';
import { BsFillEyeFill } from 'react-icons/bs';
import { ProjectDataType, SkillDataType } from '../types';
import { Container } from '../styles/components/container';
import { AllProjectButton, ProjectCard, ProjectCategoriesWrapper, ProjectContent, ProjectsWrapper } from '../styles/sections/projects';

const ProjectSection: React.FC<{ projectData: ProjectDataType[], skillData: SkillDataType[] }> = ({ projectData, skillData }) => {
    const [category, setCategory] = useState<number>(0);
    const [projects, setProjects] = useState<ProjectDataType[]>([...projectData]);
    const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

    useEffect(() => {
        let limitedProjects = [];
        if (category === 0) {
            limitedProjects = projectData;
            setProjects(limitedProjects.slice(0,6));
        } else {
            limitedProjects = projectData.filter((data) => data.category === category);
            setProjects(limitedProjects.slice(0, 6));
        }
        let status = limitedProjects.length > 6;
        setShowAllProjects(status);
    }, [category, projectData]);

    const showAllProjectsHandler = () => {
        if(category === 0){
            setProjects(projectData);
        }else{
            setProjects(projectData.filter((data) => data.category === category));
        }
        setShowAllProjects(false);
    };

    const changeCategory = (id: number) => {
        setCategory(id);
    };

    return (
        <section id="projects">
            <Container>
                <SectionTitle title='projects' />
                <ProjectCategoriesWrapper>
                    <button type="button" className={`${category === 0 ? 'active' : ''}`} onClick={() => changeCategory(0)}>All</button>
                    <button type="button" className={`${category === 1 ? 'active' : ''}`} onClick={() => changeCategory(1)}>Fullstack</button>
                    <button type="button" className={`${category === 2 ? 'active' : ''}`} onClick={() => changeCategory(2)}>Frontend</button>
                    <button type="button" className={`${category === 3 ? 'active' : ''}`} onClick={() => changeCategory(3)}>Backend</button>
                </ProjectCategoriesWrapper>
                <ProjectsWrapper>
                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <Image className='project-img' src={project.image} width={400} height={200} alt='' />
                            <ProjectContent>
                                <div className="inner">
                                    <h3 className='title'>{project.title}</h3>
                                    <ProjectSkills skillNames={project.skills} skillData={skillData} />
                                </div>
                                <div className="links">
                                    {project.previewStatus && <a href={project.previewLink} target='_blank' rel="noopener noreferrer"><BsFillEyeFill /></a>}
                                    {project.githubStatus && <a href={project.githubLink} target='_blank' rel="noopener noreferrer"><FiGithub /></a>}
                                </div>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsWrapper>
                {showAllProjects && <AllProjectButton onClick={showAllProjectsHandler}>See all projects</AllProjectButton>}
            </Container>
        </section>
    );
};

export default ProjectSection;

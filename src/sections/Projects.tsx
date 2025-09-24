import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';
import ProjectSkills from '../components/ProjectSkills';
import { FiGithub } from 'react-icons/fi';
import { BsFillEyeFill } from 'react-icons/bs';
import { ProjectDataType, SkillDataType } from '../types';
import { Container } from '../styles/components/container';
import { ProjectCard, ProjectCategoriesWrapper, ProjectContent, ProjectsWrapper } from '../styles/sections/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const ProjectSection: React.FC<{ projectData: ProjectDataType[], skillData: SkillDataType[] }> = ({ projectData, skillData }) => {
    const [category, setCategory] = useState<number>(0);
    const [projects, setProjects] = useState<ProjectDataType[]>([...projectData]);

    useEffect(() => {
        let limitedProjects = [];
        if (category === 0) {
            limitedProjects = projectData;
            setProjects([...limitedProjects]);
        } else {
            limitedProjects = projectData.filter((data) => data.category === category);
            setProjects([...limitedProjects]);
        }
    }, [category, projectData]);
    const changeCategory = (id: number) => {
        setCategory(id);
    };

    return (
        <section id="projects" role='region' aria-labelledby='projects-title'>
            <Container>
                <SectionTitle title='projects' id='projects-title' />
                <ProjectCategoriesWrapper>
                    <button type="button" className={`${category === 0 ? 'active' : ''}`} onClick={() => changeCategory(0)} aria-pressed={category === 0}>All</button>
                    <button type="button" className={`${category === 1 ? 'active' : ''}`} onClick={() => changeCategory(1)} aria-pressed={category === 1}>Fullstack</button>
                    <button type="button" className={`${category === 2 ? 'active' : ''}`} onClick={() => changeCategory(2)} aria-pressed={category === 2}>Frontend</button>
                    <button type="button" className={`${category === 3 ? 'active' : ''}`} onClick={() => changeCategory(3)} aria-pressed={category === 3}>Backend</button>
                </ProjectCategoriesWrapper>
                <ProjectsWrapper>
                    <Swiper
                        id='projects-swiper'
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        navigation={{
                            prevEl: ".prev-arrow",
                            nextEl: ".next-arrow",
                        }}
                        breakpoints={{
                            576: { slidesPerView: 1.6, spaceBetween: 20, },
                            768: { slidesPerView: 1.8, spaceBetween: 20, },
                            992: { slidesPerView: 2.4, spaceBetween: 20, },
                            1200: { slidesPerView: 3.2, spaceBetween: 20, },
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard>
                                    <Image className='project-img' src={project.image} width={400} height={200} alt={`${project.title} screenshot`} />
                                    <ProjectContent>
                                        <div className="inner">
                                            <ProjectSkills skillNames={project.skills} skillData={skillData} />
                                            <h3 className='title'>{project.title}</h3>
                                        </div>
                                        <div className="links">
                                            {project.previewLink && <a href={project.previewLink} target='_blank' rel="noopener noreferrer" aria-label={`View ${project.title} live`}><BsFillEyeFill /></a>}
                                            {project.githubLink && <a href={project.githubLink} target='_blank' rel="noopener noreferrer" aria-label={`View ${project.title} on Github`}><FiGithub /></a>}
                                        </div>
                                    </ProjectContent>
                                </ProjectCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-swiper-buttons flex justify-end gap-2 mb-4">
                        <button type='button' aria-label='project swiper prev button' className="prev-arrow arrow-btn">
                            <FaArrowLeftLong/>
                        </button>
                        <button type='button' aria-label='project swiper next button' className="next-arrow arrow-btn">
                            <FaArrowRightLong/>
                        </button>
                    </div>
                </ProjectsWrapper>
            </Container>
        </section>
    );
};

export default ProjectSection;

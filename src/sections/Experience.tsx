'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Image from 'next/image'
import { PersonalInformationDataType } from '../types'
import { Container } from '../styles/components/container'
import { ExperienceCard, ExperienceWrapper } from '../styles/sections/experience'

const ExperienceSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
    return (
        <section id="experience" role='region' aria-labelledby='experience-title'>
            <Image src='/vectors/code.svg' className='code-img-design right' width={100} height={100} alt='' />
            <Container>
                <SectionTitle title='experience' id='experience-title'/>
                <ExperienceWrapper role='list'>
                    {
                        personalInformationData.experience.map((data) => (
                            <li key={data.id} role='listitem' aria-label={`${data.position}:${data.start}-${data.end}`} data-testid="experience-card" data-aos="zoom-in-up" className='listitem'>
                                <ExperienceCard>
                                    <div className="title">
                                        <h3 className="position">{data.position}</h3>
                                        <div className="date">
                                            <FaCalendarAlt />
                                            <span>{data.start} - {data.end}</span>
                                        </div>
                                    </div>
                                    <article>
                                        <div className="description">
                                            <p>{data.description}</p>
                                        </div>
                                        <ul className="responsibilities">
                                            {data.responsibilities.map((r,index) => (
                                                <li key={index}>{r}</li>
                                            ))}
                                        </ul>
                                    </article>
                                    <div className="company">
                                        <h4 className='name'>{data.company}</h4>
                                        <div className='location'>
                                            <span>{data.location}</span>
                                        </div>
                                    </div>
                                </ExperienceCard>
                            </li>
                        ))
                    }
                </ExperienceWrapper>
            </Container>
        </section>
    )
}

export default ExperienceSection

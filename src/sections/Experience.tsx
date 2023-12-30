'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Image from 'next/image'
import { PersonalInformationDataType } from '../types'
import { Container } from '../styles/components/container'
import { ExperienceCard, ExperienceWrapper } from '../styles/sections/experience'

const Experience:React.FC<{personalInformationData: PersonalInformationDataType}> = ({personalInformationData}) => {
  return (
    <section id="experience">
        <Image src='/vectors/code.svg' className='code-img-design right' width={100} height={100} alt=''/>
        <Container>
            <SectionTitle title='experience'/>
            <ExperienceWrapper>
                {
                    personalInformationData.experience.map((data) => (
                        <ExperienceCard key={data.id}>
                            <div className="title">
                                <div className="position">{data.position}</div>
                                <div className="date">
                                    <FaCalendarAlt/>
                                    <span>{data.start} - {data.end}</span>
                                </div>
                            </div>
                            <div className="company">
                                <div className='name'>{data.company}</div>
                                <div className='location'>
                                    <FaLocationDot/>
                                    <span>{data.location}</span>
                                </div>
                            </div>
                        </ExperienceCard>
                    ))
                }
            </ExperienceWrapper>
        </Container>
    </section>
  )
}

export default Experience

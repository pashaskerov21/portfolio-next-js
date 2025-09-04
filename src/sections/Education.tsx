'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { FaBuildingColumns } from 'react-icons/fa6'
import Image from 'next/image'
import { PersonalInformationDataType } from '../types'
import { Container } from '../styles/components/container'
import { EducationCard, EducationWrapper } from '../styles/sections/education'

const EducationSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
    return (
        <section id="education">
            <Image src='/vectors/code.svg' className='code-img-design left' width={100} height={100} alt='' />
            <Container>
                <SectionTitle title='education' />
                <EducationWrapper>
                    {
                        personalInformationData.education.map((data) => (
                            <EducationCard key={data.id}>
                                <div className="title">
                                    <FaBuildingColumns />
                                    <h2>{data.univercity}</h2>
                                </div>
                                <div className="content">
                                    <div className="row">
                                        <div className="label">Faculty:</div>
                                        <div className="text">{data.faculty}</div>
                                    </div>
                                    <div className="row">
                                        <div className="label">Filed of Study:</div>
                                        <div className="text">{data.field}</div>
                                    </div>
                                    <div className="bottom">
                                        <div className="degree">{data.degree}</div>
                                        <div className="date">{data.start} - {data.end}</div>
                                    </div>
                                </div>
                            </EducationCard>
                        ))
                    }
                </EducationWrapper>
            </Container>
        </section>
    )
}

export default EducationSection

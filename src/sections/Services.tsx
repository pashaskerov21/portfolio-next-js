import React from 'react'
import { Container } from '../styles/components/container'
import SectionTitle from '../components/SectionTitle'
import { ServicesWrapper } from '../styles/sections/services'
import { FaChartBar, FaGlobe, FaPalette, FaPlug, FaRocket } from 'react-icons/fa6'
import { FaCog } from 'react-icons/fa'
import { PersonalInformationDataType } from '../types'

const ServiceSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
    return (
        <section className="services" role='region' aria-labelledby='services-title'>
            <Container>
                <SectionTitle id='services-title' title='Services' />
                <ServicesWrapper role='list'>
                    {personalInformationData.services?.length > 0 && personalInformationData.services.map((service) => (
                        <li role='listitem' data-aos="zoom-in-up" className='service-card'>
                            <i className={`icon fa-solid fa-${service.icon}`}></i>
                            <h3 className="title">{service.title}</h3>
                            <p className="text">{service.text}</p>
                        </li>
                    ))}
                </ServicesWrapper>
            </Container>
        </section>
    )
}

export default ServiceSection

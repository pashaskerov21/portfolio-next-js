import React from 'react'
import { Container } from '../styles/components/container'
import SectionTitle from '../components/SectionTitle'
import { ServicesWrapper } from '../styles/sections/services'
import { FaChartArea, FaChartBar, FaGlobe, FaPalette, FaPlug, FaRocket } from 'react-icons/fa6'
import { FaCog } from 'react-icons/fa'

const ServiceSection: React.FC = () => {
    return (
        <section className="services" role='region' aria-labelledby='services-title'>
            <Container>
                <SectionTitle id='services-title' title='Services' />
                <ServicesWrapper role='list'>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaGlobe /> Web Development</h3>
                            <div className="text">
                                <p>Modern, responsive full-stack websites built with Next.js / Angular frontend and Laravel PHP backend.</p>
                            </div>
                        </div>
                    </li>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaPalette /> Frontend Development</h3>
                            <div className="text">
                                <p>Interactive and SEO-friendly interfaces developed using Next.js, Angular, and TypeScript.</p>
                            </div>
                        </div>
                    </li>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaCog /> Backend Development</h3>
                            <div className="text">
                                <p>Secure and efficient server-side applications created with Laravel PHP and optimized MySQL databases.</p>
                            </div>
                        </div>
                    </li>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaRocket /> Website Optimization</h3>
                            <div className="text">
                                <p>Website performance, loading speed, and user experience improved following SEO best practices.</p>
                            </div>
                        </div>
                    </li>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaPlug /> API Development & Integration</h3>
                            <div className="text">
                                <p>Scalable RESTful APIs developed and integrated seamlessly with frontend applications.</p>
                            </div>
                        </div>
                    </li>
                    <li role='listitem' data-aos="zoom-in-up">
                        <div className="service-card">
                            <h3 className="service-title"><FaChartBar /> Dashboard & Admin Panels</h3>
                            <div className="text">
                                <p>User-friendly dashboards and admin panels designed with real-time data visualization and role-based access control.</p>
                            </div>
                        </div>
                    </li>
                </ServicesWrapper>
            </Container>
        </section>
    )
}

export default ServiceSection

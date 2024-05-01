'use client'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { FiGithub } from 'react-icons/fi'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { PersonalInformationDataType } from '../types'
import { Container } from '../styles/components/container'
import { AboutContact, AboutContent, AboutImage, AboutSocialWrapper, AboutText, AboutWrapper, ResumeButton } from '../styles/sections/about'

const AboutSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
    return (
        <section id="about">
            <Container>
                <SectionTitle title='about me' />
                <AboutWrapper>
                    <AboutImage>
                        <Image src={personalInformationData.image} width={1000} height={1000} priority={true} alt='' />
                    </AboutImage>
                    <AboutContent>
                        <AboutText>
                            <p>Hello! I'm Alipasha, a <strong>full-stack developer</strong> specializing in both <strong>frontend and backend development</strong>. Creating interactive and user-oriented web applications has become not just a job but also a passion for me.</p>
                            <p>I especially prefer TypeScript with modern JavaScript libraries and frameworks such as <strong>Next.js and React.js</strong>. By using these technologies, I aim to create powerful and scalable backend systems that prioritize user experience. I also work with a robust and flexible backend framework like <strong>Laravel</strong>, so I can build both sides of my projects on a solid foundation.</p>
                            <p>While doing my work, I always stick to the latest technologies and best practices, while also being a stickler for clean code writing and maintainable architectures. I am passionate about bringing a unique perspective and creative solutions to each project.</p>
                            <p>Doing business with me means not only delivering a project but also developing a long-term business partnership. I strive to understand my customers' needs and meet them in the best way, and I am committed to delivering my projects on time and within budget.</p>
                            <p>I look forward to helping you succeed in your projects. I am always open to communicate, so feel free to contact me.</p>
                        </AboutText>
                        <AboutContact>
                            <ResumeButton href={personalInformationData.cv} target='_blank'>
                                download CV
                            </ResumeButton>
                            <AboutSocialWrapper>
                                <a target="_blank" rel="noreferrer" href={personalInformationData.social.github}><FiGithub /></a>
                                <a target="_blank" rel="noreferrer" href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
                                <a target="_blank" rel="noreferrer" href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
                                <a target="_blank" rel="noreferrer" href={personalInformationData.social.mail}><BiLogoGmail /></a>
                            </AboutSocialWrapper>
                        </AboutContact>
                    </AboutContent>
                </AboutWrapper>
            </Container>
        </section>
    )
}

export default AboutSection

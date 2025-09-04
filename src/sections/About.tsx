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
                        <Image src={personalInformationData.image} width={1000} height={1000} priority={true} alt='Alipasha Askerov - Full stack Developer' />
                    </AboutImage>
                    <AboutContent>
                        <AboutText>
                            <p>
                                I'm a <strong>full-stack developer</strong> with expertise in both <strong> frontend and backend development.</strong> 
                                I create interactive, user-focused web applications using modern technologies like <strong>React JS, Next JS, Angular, TypeScript and Laravel.</strong>
                            </p>
                            <p>
                                I am passionate about writing clean, maintainable code and building scalable systems that prioritize user experience. I enjoy bringing creative solutions to each project and collaborating closely with clients to deliver high-quality results on time and within budget.
                            </p>
                            <p>
                                Let's build something great together — feel free to reach out and connect!
                            </p>
                        </AboutText>
                        <AboutContact>
                            <ResumeButton href={personalInformationData.cv} target='_blank'>
                                download CV
                            </ResumeButton>
                            <AboutSocialWrapper>
                                <li>
                                    <a target="_blank" rel="noreferrer" aria-label='Github' href={personalInformationData.social.github}><FiGithub /></a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" aria-label='Linkedin' href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" aria-label='Whatsapp' href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" aria-label='Mail' href={`mailto:${personalInformationData.social.mail}`}><BiLogoGmail /></a>
                                </li>
                            </AboutSocialWrapper>
                        </AboutContact>
                    </AboutContent>
                </AboutWrapper>
            </Container>
        </section>
    )
}

export default AboutSection

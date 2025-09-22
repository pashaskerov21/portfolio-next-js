'use client'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { FiGithub } from 'react-icons/fi'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { PersonalInformationDataType } from '../types'
import { Container } from '../styles/components/container'
import { AboutContact, AboutContent, AboutImage, AboutSocialWrapper, AboutText, AboutWrapper, CounterWrapper, ResumeButton } from '../styles/sections/about'
import Counter from '../components/Counter'

const AboutSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {

    return (
        <section id="about" role='region' aria-labelledby='about-title'>
            <Container>
                <SectionTitle title='about me' id='about-title' />
                <AboutWrapper>
                    <AboutImage data-aos="fade-right">
                        <Image src={personalInformationData.image} width={1000} height={1000} priority={true} alt='Alipasha Askerov - Full stack Developer' />
                    </AboutImage>
                    <AboutContent data-aos="fade-left">
                        <AboutText role='article' aria-labelledby='about-title' dangerouslySetInnerHTML={{__html: personalInformationData.aboutText}}></AboutText>
                        <CounterWrapper>
                            <li>
                                <Counter value={2} title='experience' speed={700} />
                            </li>
                            <li>
                                <Counter value={25} title='projects' speed={100} />
                            </li>
                        </CounterWrapper>
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

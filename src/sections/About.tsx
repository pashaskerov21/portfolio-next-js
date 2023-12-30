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

const About: React.FC<{personalInformationData: PersonalInformationDataType}> = ({personalInformationData}) => {
    return (
        <section id="about">
            <Container>
                <SectionTitle title='about me' />
                <AboutWrapper>
                    <AboutImage>
                        <Image src={personalInformationData.image} width={1000} height={1000} priority={true} alt='' />
                    </AboutImage>
                    <AboutContent>
                        <AboutText>{personalInformationData.aboutText}</AboutText>
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

export default About

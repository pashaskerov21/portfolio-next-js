'use client'
import React from 'react'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { MainSocialMediaWrapper } from '../styles/components/socialicons'
import { PersonalInformationDataType } from '../types'

const MainSocialMedia: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
    return (
        <MainSocialMediaWrapper>
            <li>
                <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.3s' }} aria-label='Github' href={personalInformationData.social.github}><FiGithub /></a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.4s' }} aria-label='Linkedin' href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.5s' }} aria-label='Whatsapp' href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.6s' }} aria-label='Mail' href={`mailto:${personalInformationData.social.mail}`}><BiLogoGmail /></a>
            </li>
        </MainSocialMediaWrapper>
    )
}

export default React.memo(MainSocialMedia)

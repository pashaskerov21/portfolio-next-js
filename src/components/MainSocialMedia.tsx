'use client'
import React from 'react'
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { MainSocialMediaWrapper } from '../styles/components/socialicons'
import { PersonalInformationDataType } from '../types'

const MainSocialMedia: React.FC<{personalInformationData: PersonalInformationDataType}> = ({personalInformationData}) => {
    return (
        <MainSocialMediaWrapper>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.3s' }} href={personalInformationData.social.github}><FiGithub /></a>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.4s' }} href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.5s' }} href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.6s' }} href={personalInformationData.social.mail}><BiLogoGmail /></a>
        </MainSocialMediaWrapper>
    )
}

export default React.memo(MainSocialMedia)

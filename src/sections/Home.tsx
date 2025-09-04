'use client'
import Image from 'next/image'
import React from 'react'
import { Container } from '../styles/components/container'
import { PersonalInformationDataType } from '../types'
import { AnimationTitle, HomeContentWrapper, HomeTextWrapper, HomeTitle } from '../styles/sections/home'

const HomeSection: React.FC<{ personalInformationData: PersonalInformationDataType }> = ({ personalInformationData }) => {
  return (
    <section id='home'>
      <Container>
        <HomeContentWrapper>
          <div className="content">
            <HomeTitle>{personalInformationData.home.title}</HomeTitle>
            <AnimationTitle title={personalInformationData.home.animationTitle}>{personalInformationData.home.animationTitle}</AnimationTitle>
          </div>
          <div className="image">
            <Image src='/design/img-2.svg' width={500} height={500} alt='Banner Hero' loading='eager' fetchPriority='high' />
          </div>
        </HomeContentWrapper>
      </Container>
    </section>
  )
}

export default HomeSection

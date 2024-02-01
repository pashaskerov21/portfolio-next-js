'use client'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { SkillDataType } from '../types'
import { Container } from '../styles/components/container'
import { SkillCard, SkillsWrapper } from '../styles/sections/skills'
import { useDarkMode } from 'usehooks-ts'

const SkillSection: React.FC<{ skillData: SkillDataType[] }> = ({ skillData }) => {
    const { isDarkMode } = useDarkMode(false);
    return (
        <section id="skills">
            <Container>
                <SectionTitle title='skills' />
                <SkillsWrapper>
                    {
                        skillData.map((skill) => (
                            <SkillCard key={skill.id} $skillColor={skill.color}>
                                <Image src={isDarkMode ? skill.logo_dark : skill.logo} width={70} height={70} alt='' />
                                <span className="title">{skill.title}</span>
                                <div className="border"></div>
                            </SkillCard>
                        ))
                    }
                </SkillsWrapper>
            </Container>
        </section>
    )
}

export default SkillSection

'use client'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { SkillDataType } from '../types'
import { Container } from '../styles/components/container'
import { SkillCard, SkillsWrapper } from '../styles/sections/skills'

const SkillSection: React.FC<{ skillData: SkillDataType[] }> = ({ skillData }) => {
    return (
        <section id="skills" role='region' aria-labelledby='skills-title'>
            <Container>
                <SectionTitle title='skills' id='skills-title' />
                <SkillsWrapper>
                    {
                        skillData.map((skill) => (
                            <li key={skill.id}>
                                <SkillCard $skillColor={skill.color}>
                                    <Image src={skill.logo} width={70} height={70} alt={`${skill.title} logo`} />
                                    <span className="title">{skill.title}</span>
                                    <div className="border"></div>
                                </SkillCard>
                            </li>
                        ))
                    }
                </SkillsWrapper>
            </Container>
        </section>
    )
}

export default SkillSection

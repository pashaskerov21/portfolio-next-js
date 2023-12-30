'use client'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { SkillDataType } from '../types'
import { Container } from '../styles/components/container'
import { SkillCard, SkillsWrapper } from '../styles/sections/skills'

const Skills:React.FC<{skillData: SkillDataType[]}> = ({skillData}) => {
    return (
        <section id="skills">
            <Container>
                <SectionTitle title='skills' />
                <SkillsWrapper>
                    {
                        skillData.map((skill) => (
                            <SkillCard key={skill.id} $skillColor={skill.color}>
                                <Image src={skill.img} width={70} height={70} alt='' />
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

export default Skills

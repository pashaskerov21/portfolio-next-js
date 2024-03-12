"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ProjectSkillsWrapper } from '../styles/sections/projects';
import { SkillDataType } from '../types';
import { useDarkMode } from 'usehooks-ts';

const ProjectSkills: React.FC<{ skillNames: string[], skillData: SkillDataType[] }> = ({ skillNames, skillData }) => {
    const [skills, setSkills] = useState<SkillDataType[]>([]);
    const { isDarkMode } = useDarkMode(false);
    useEffect(() => {

        if (skillNames && skillNames.length > 0 && skillData && skillData.length > 0) {
            const matchedSkills: SkillDataType[] = skillNames
                .map((itemName) => skillData.find((skill) => skill.title === itemName))
                .filter((matchedSkill) => matchedSkill !== undefined) as SkillDataType[];

            setSkills(matchedSkills);
        } else {
            setSkills([]);
        }

    }, [skillNames])
    return (
        <ProjectSkillsWrapper>
            {
                skills.length > 0 && skills.map((skill, index) => (
                    <Image style={{ animationDelay: `${0.1 + index * 0.1}s` }} key={skill.id} src={skill.logo_dark} width={36} height={36} alt='' />
                ))
            }
        </ProjectSkillsWrapper>
    )
}

export default ProjectSkills

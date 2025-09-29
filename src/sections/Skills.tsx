"use client";

import React from "react";
import { SkillDataType } from "../types";

type SkillsProps = {
  skillData: SkillDataType[];
};

const Skills: React.FC<SkillsProps> = ({ skillData }) => {
  if (!skillData || skillData.length === 0) return null;

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 className="section-title" id="skills-title">
          Skills
        </h2>
        <ul className="skills-wrapper">
          {skillData.map((skill, i) => (
            <li key={i} className="skill-card">
              <img
                src={skill.logo}
                width={70}
                height={70}
                alt={`${skill.title} logo`}
              />
              <h3 className="title">{skill.title}</h3>
              <div className="border">
                <span style={{ backgroundColor: skill.color }}></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

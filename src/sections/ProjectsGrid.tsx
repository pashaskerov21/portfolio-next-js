"use client";

import React from "react";
import Link from "next/link";
import { ProjectDataType, SkillDataType } from "../types";
import Image from "next/image";

type ProjectsProps = {
  page: string;
  projectData: ProjectDataType[];
  skillData: SkillDataType[];
};

const ProjectsGrid: React.FC<ProjectsProps> = ({ page, projectData, skillData }) => {
  const filteredProjects = page === "home" ? projectData.slice(0, 6) : projectData;

  // 🔹 Project skills
  const getProjectSkills = (skillNames: string[]) => {
    if (skillNames && skillNames.length > 0 && skillData.length > 0) {
      const matchedSkills = skillNames
        .map((name) => skillData.find((skill) => skill.title === name))
        .filter((s): s is SkillDataType => s !== undefined);

      return matchedSkills;
    }
    return [];
  };

  if (!filteredProjects || filteredProjects.length === 0) return null;

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 className="section-title" id="projects-title">
          Projects
        </h2>

        <ul className="projects-wrapper">
          {filteredProjects.map((project, i) => (
            <li key={i} className={`project-card ${project.previewLink ? "clickable" : ""}`} onClick={() => project.previewLink && window.open(project.previewLink, "_blank", "noopener noreferrer")}>
              <figure className="project-img">
                <Image src={project.image} width={400} height={200} alt={`${project.title} preview`} />
                <div className="layer">
                  <div className="badge">{project.category}</div>

                  <ul className="project-skills">
                    {getProjectSkills(project.skills).map((skill, j) => (
                      <li
                        key={j}
                        className="skill-logo"
                        style={{ animationDelay: `${j * 0.1 + 0.1}s` }}
                      >
                        <Image src={skill.logo} width={20} height={20} alt={`${project.title} ${skill.title} logo`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </figure>

              <div className="card-body">
                <div className="heading">
                  <h3 className="title">{project.title}</h3>
                  <div className="links">
                    {project.previewLink && (
                      <div>
                        <i className="fa-solid fa-eye"></i>
                      </div>
                    )}
                    {/* {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {page === "home" && (
          <Link href="/projects" className="projects-link">
            See all projects
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;

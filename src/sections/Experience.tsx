"use client";
import React from "react";
import { PersonalInformationDataType } from "../types";

type ExperienceProps = {
    personalData: PersonalInformationDataType;
};

const Experience: React.FC<ExperienceProps> = ({ personalData }) => {
    if (!personalData?.experience || personalData.experience.length === 0) return null;

    return (
        <section className="experience-section" aria-labelledby="experience-title" id="experience">
            <div className="container">
                <h2 className="section-title" role="heading" id="experience-title">
                    Experience
                </h2>

                <ul className="experience-wrapper">
                    {personalData.experience.map((exp, i) => (
                        <li key={i} className="experience-card">
                            <div className="left">
                                <div className="left-header">
                                    <h3 className="position">{exp.position}</h3>
                                    <div className="date">
                                        {exp.start} - {exp.end}
                                    </div>
                                </div>
                                <div className="left-footer">
                                    <h4 className="company">{exp.company}</h4>
                                    <div className="location">{exp.location}</div>
                                </div>
                            </div>

                            <article className="card-body">
                                <p>{exp.description}</p>
                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul>
                                        {exp.responsibilities.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;

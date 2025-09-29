import React from "react";
import { PersonalInformationDataType } from "../types";

interface Props {
    personalData: PersonalInformationDataType;
}

const Education: React.FC<Props> = ({ personalData }) => {
    return (
        <section
            className="education-section"
            id="education"
            aria-labelledby="education-title"
        >
            <div className="container">
                <h2 className="section-title" id="education-title">
                    Education
                </h2>
                <ul className="edu-wrapper">
                    {personalData.education.map((edu, i) => (
                        <li key={i} className="edu-card">
                            <span className="score">{edu.score}</span>
                            <div className="card-header">
                                <i className="fa-solid fa-building-columns"></i>
                                <h3 className="title">{edu.univercity}</h3>
                            </div>
                            <article className="card-text">
                                <p>
                                    <span>Faculty</span>: {edu.faculty}
                                </p>
                                <p>
                                    <span>Field of study</span>: {edu.field}
                                </p>
                            </article>
                            <div className="card-footer">
                                <span className="edu-degree">{edu.degree}</span>
                                <span className="edu-date">
                                    {edu.start} - {edu.end}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;

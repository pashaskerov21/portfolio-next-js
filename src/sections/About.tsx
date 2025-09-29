"use client";

import React from "react";
import Counter from "../components/Counter";
import SocialIcons from "../components/SocialIcons";
import { PersonalInformationDataType } from "../types";

type AboutProps = {
  personalData: PersonalInformationDataType;
};

const About: React.FC<AboutProps> = ({ personalData }) => {
  if (!personalData) return null;

  return (
    <section className="about-section" aria-labelledby="about-title" id="about">
      <div className="container">
        <h2 className="section-title" role="heading" id="about-title">
          About me
        </h2>
        <div className="about-wrapper">
          <figure>
            <img
              src={personalData.image}
              alt="Alipasha Askerov - Full stack Developer"
            />
          </figure>
          <div className="wrapper-right">
            <article
              aria-labelledby="about-title"
              dangerouslySetInnerHTML={{ __html: personalData.aboutText }}
            ></article>

            <ul className="reports">
              <li>
                <Counter value={2} title="experience" speed={700} />
              </li>
              <li>
                <Counter value={25} title="projects" speed={100} />
              </li>
            </ul>

            <div className="about-content-items">
              <a
                href={personalData.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >
                Review CV
              </a>

              {personalData.social && (
                <SocialIcons
                  personalData={personalData}
                  className="about-icons"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

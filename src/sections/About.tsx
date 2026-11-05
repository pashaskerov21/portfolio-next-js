"use client";

import React, { useState } from "react";
import SocialIcons from "../components/SocialIcons";
import { PersonalInformationDataType } from "../types";

type AboutProps = {
  personalData: PersonalInformationDataType;
};

const About: React.FC<AboutProps> = ({ personalData }) => {
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const birthDate = new Date("2001-07-18");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }



  if (!personalData) return null;

  const titles = [personalData.author_name, personalData.home.animationTitle];
  const currentTitle = titles[titleIndex];

  const str = (value: string) => <span className="tok-string">&quot;{value}&quot;</span>;
  const prop = (name: string) => <span className="tok-prop">{name}</span>;
  const codeLines: React.ReactNode[] = [
    <><span className="tok-keyword">const</span> <span className="tok-var">engineer</span> = {"{"}</>,
    <>  {prop("name")}: {str(personalData.author_name)},</>,
    <>  {prop("role")}: {str(personalData.home.animationTitle)},</>,
    <>  {prop("age")}: {str(age.toString())},</>,
    <>  {prop("location")}: {str(personalData.home.location)},</>,
    <>  {prop("stack")}: [</>,
    ...personalData.home.stack.map((tech) => <>    {str(tech)},</>),
    <>  ],</>,
    <>  {prop("openToWork")}: <span className="tok-bool">true</span>,</>,
    <>{"}"};<span className="cursor"></span></>,
  ];

  return (
    <section className="about-section" aria-labelledby="about-title" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="wrapper-left">
            <h1
              className="about-title"
              id="about-title"
              data-title={currentTitle}
              onAnimationIteration={() => setTitleIndex((prev) => (prev + 1) % titles.length)}
            >
              {currentTitle}
            </h1>
            <article
              dangerouslySetInnerHTML={{ __html: personalData.aboutText }}
            ></article>
            <div className="about-content-items">
              <a
                href={personalData.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-button"
              >
                Review CV
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              {personalData.social && (
                <SocialIcons
                  personalData={personalData}
                  className="about-icons"
                />
              )}
            </div>
          </div>
          <div className="wrapper-right">
            <figure className="code-card" aria-label="Engineer profile summary">
              <div className="code-header">
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="file-name">engineer.ts</span>
              </div>
              <pre>
                <code>
                  {codeLines.map((line, i) => (
                    <span className="line" key={i}>
                      <span className="ln">{i + 1}</span>
                      <span className="code">{line}</span>
                    </span>
                  ))}
                </code>
              </pre>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

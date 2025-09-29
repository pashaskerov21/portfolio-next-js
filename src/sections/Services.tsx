"use client";

import React from "react";
import { PersonalInformationDataType } from "../types";

type ServicesProps = {
    personalData: PersonalInformationDataType;
};

const Services: React.FC<ServicesProps> = ({ personalData }) => {
    if (!personalData?.services) return null;

    return (
        <section className="services-section" aria-labelledby="services-title" id="services">
            <div className="container">
                <h2 className="section-title" role="heading" id="services-title">
                    Services
                </h2>

                <ul className="service-list">
                    {personalData.services.map((service, i) => (
                        <li key={i} className="service-card">
                            <i className={`icon fa-solid fa-${service.icon}`} />
                            <h3 className="title">{service.title}</h3>
                            <p className="text">{service.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;

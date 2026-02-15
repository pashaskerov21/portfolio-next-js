"use client";

import React, { useEffect, useState } from "react";
import { PersonalInformationDataType } from "../types";
import { useTheme } from "../hooks/useTheme";
import Image from "next/image";

type BannerProps = {
    personalData: PersonalInformationDataType;
};

const Banner: React.FC<BannerProps> = ({ personalData }) => {
    const { currentTheme } = useTheme();
    const [heroImg, setHeroImg] = useState<string>('design/next-js-2.svg');
    useEffect(() => {
        setHeroImg(currentTheme === 'dark' ? 'design/next-js.svg' : 'design/next-js-2.svg');
    }, [currentTheme])
    
    if (!personalData) return null;
    return (
        <section className="banner-section" aria-labelledby="banner-title">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="content">
                        <h1 className="title" id="banner-title">
                            {personalData.home.title}
                        </h1>
                        <h2 className="subtitle" data-title={personalData.home.animationTitle}>
                            {personalData.home.animationTitle}
                        </h2>
                        
                        <ul className="versions">
                            <li>
                                <a href="https://alipashaskerov.vercel.app/" className="active">Next JS</a>
                            </li>
                            <li>
                                <a href="https://alipashaskerov2.vercel.app/">Angular</a>
                            </li>
                            <li>
                                <a href="https://alipashaskerov3.vercel.app/">
                                    Vue
                                </a>
                            </li>
                        </ul>
                        <article>
                            <h3>Version: Next JS</h3>
                            <p>
                                This portfolio is built with Next.js 14 and fully powered by TypeScript. It leverages SSR and SSG, optimized routing, and modern React features for maximum performance.
                            </p>
                        </article>
                    </div>
                    <figure className="content-img">
                        <Image src={heroImg} loading="eager" width={200} height={200} alt="Alipasha Askerov - Portfolio Vue"/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Banner;

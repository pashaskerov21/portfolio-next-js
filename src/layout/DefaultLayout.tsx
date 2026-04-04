"use client"
import React from 'react'
import { MenuDataType, PersonalInformationDataType } from '../types';
import '../scss/styles.scss';
import dynamic from 'next/dynamic';
import Preloader from '../components/Preloader';
import ScrollBtn from '../components/ScrollBtn';
import SocialIcons from '../components/SocialIcons';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

const Starfield = dynamic(() => import('../components/Starfield'), { ssr: false });

type DefaultLayoutProps = {
    children: React.ReactNode,
    menuData: MenuDataType[],
    personalInformationData: PersonalInformationDataType,
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, menuData, personalInformationData }) => {

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null;

    return (
        <>
            <Starfield />
            <Preloader />
            <ScrollBtn />
            <SocialIcons personalData={personalInformationData} className='fixed-icons' />
            <Header personalData={personalInformationData} menuData={menuData} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout

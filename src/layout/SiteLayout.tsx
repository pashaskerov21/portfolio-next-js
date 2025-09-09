"use client"
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { MenuDataType, PersonalInformationDataType } from '../types';
import { darkTheme } from '../styles/theme/dark';
import { lightTheme } from '../styles/theme/light';
import { GlobalStyles } from '../styles/global';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import MainSocialMedia from '../components/MainSocialMedia';
import Preloader from '../components/Preloader';
import ScrollTop from '../components/ScrollTop';
import AOS from 'aos';

type SiteLayoutProps = {
    children: React.ReactNode,
    menuData: MenuDataType[],
    personalInformationData: PersonalInformationDataType,
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, menuData, personalInformationData }) => {

    const themes = ['dark', 'light']
    const { isDarkMode, toggle, } = useDarkMode(false);
    const activeTheme = isDarkMode ? darkTheme : lightTheme;
    const activeThemeValue = isDarkMode ? themes[0] : themes[1];

    React.useEffect(() => {
        AOS.init({
            // offset: 80,   
            duration: 600, 
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null;
    };

    return (
        <>
            <ThemeProvider theme={activeTheme}>
                {loading && <Preloader />}
                <GlobalStyles />
                <MainSocialMedia personalInformationData={personalInformationData} />
                <ScrollTop />
                {/* <TimerModal/> */}
                <Header
                    loading={loading}
                    theme={activeThemeValue}
                    toggleTheme={toggle}
                    menuData={menuData}
                    personalInformationData={personalInformationData}
                />
                <main>
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default SiteLayout

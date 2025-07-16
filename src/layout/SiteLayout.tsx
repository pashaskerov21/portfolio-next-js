"use client"
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';
import { MenuDataType, PersonalInformationDataType } from '../types';
import { darkTheme } from '../styles/theme/dark';
import { lightTheme } from '../styles/theme/light';
import { GlobalStyles } from '../styles/global';
import { ScrollButton } from '../styles/buttons/ScrollButton';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import MainSocialMedia from '../components/MainSocialMedia';
import Preloader from '../components/Preloader';
import TimerModal from '../components/TimerModal';

type SiteLayoutProps = {
    children: React.ReactNode,
    menuData: MenuDataType[],
    personalInformationData: PersonalInformationDataType,
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children, menuData, personalInformationData }) => {

    const themes = ['dark','light']
    const { isDarkMode, toggle, disable, enable, } = useDarkMode(false);
    const activeTheme = isDarkMode ? darkTheme : lightTheme;
    const activeThemeValue = isDarkMode ? themes[0] : themes[1]; 

   

    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        },2000);
    }, []);

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true)
    },[])
    if(!mounted){
        return null;
    };

    


    return (
        <>
            <ThemeProvider theme={activeTheme}>
                {loading && <Preloader/>}
                <GlobalStyles />
                <MainSocialMedia personalInformationData={personalInformationData} />
                <ScrollButton onClick={() => window.scrollTo(0, 0)}>
                    <FaArrowUp />
                </ScrollButton>
                {/* <TimerModal/> */}
                <Header
                    loading={loading}
                    theme={activeThemeValue}
                    disableTheme={disable}
                    enableTheme={enable}
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

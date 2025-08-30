'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import { FaSun } from 'react-icons/fa'
import { BsFillSunFill, BsMoonStarsFill, BsWhatsapp } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { MenuDataType, PersonalInformationDataType } from '../types'
import { ButtonsWrapper, GeneralNav, HeaderContainer, HeaderMenu, LinksWrapper, NavLinksWrapper } from '../styles/partials/header'
import { Container } from '../styles/components/container'
import { MenuButton } from '../styles/buttons/MenuButton'
import { HeaderSocialIcons } from '../styles/components/socialicons'
import { ThemeButtonStyle } from '../styles/buttons/ThemeButton'


type HeaderProps = {
  loading: boolean,
  theme: string,
  toggleTheme: () => void,
  menuData: MenuDataType[],
  personalInformationData: PersonalInformationDataType,
}


const Header: React.FC<HeaderProps> = ({ loading, theme,toggleTheme, menuData, personalInformationData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [fixedTop, setFixedTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setFixedTop(true);
      } else {
        setFixedTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <GeneralNav $fixStatus={fixedTop}>
        <Container>
          <div className="inner">
            <Link to='home'>
              <Logo firstName='Alipasha' lastName='Askerov' color='primary' />
            </Link>
            <NavLinksWrapper>
              {
                menuData.map((link, index) => (
                  <Link key={link.id} to={link.name} offset={-90} smooth={true} duration={100} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{link.name}</Link>
                ))
              }
            </NavLinksWrapper>
            <ButtonsWrapper>
              <ThemeButtonStyle onClick={toggleTheme}>
                <div className={`btn ${theme === 'light' ? 'active' : ''}`}>
                  <BsFillSunFill />
                </div>
                <div className={`btn ${theme === 'dark' ? 'active' : ''}`}>
                  <BsMoonStarsFill />
                </div>
              </ThemeButtonStyle>
              <MenuButton $active={showMenu} onClick={() => toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </MenuButton>
            </ButtonsWrapper>
          </div>
        </Container>
      </GeneralNav>
      <HeaderMenu $loading={loading} $menuStatus={showMenu}>
        <LinksWrapper $loading={loading} $menuStatus={showMenu}>
          {
            menuData.map((link, index) => (
              <Link key={link.id} to={link.name} offset={-90} smooth={true} duration={100} onClick={() => setShowMenu(false)} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{link.name}</Link>
            ))
          }
        </LinksWrapper>
        <HeaderSocialIcons $loading={loading} $menuStatus={showMenu}>
          <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.3s' }} href={personalInformationData.social.github}><FiGithub /></a>
          <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.4s' }} href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
          <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.5s' }} href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
          <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.6s' }} href={personalInformationData.social.mail}><BiLogoGmail /></a>
        </HeaderSocialIcons>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header

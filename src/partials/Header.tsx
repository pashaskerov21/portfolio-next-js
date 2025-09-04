'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import { BsFillSunFill, BsMoonStarsFill, BsWhatsapp } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { BiLogoLinkedin, BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { MenuDataType, PersonalInformationDataType } from '../types'
import { ButtonsWrapper, GeneralNav, HeaderContainer, HeaderMenu, LinksWrapper, NavLinksWrapper } from '../styles/partials/header'
import { Container } from '../styles/components/container'
import { HeaderSocialIcons } from '../styles/components/socialicons'
import { ThemeButton } from '../styles/buttons/themebtn'
import { MenuButton } from '../styles/buttons/menubtn'


type HeaderProps = {
  loading: boolean,
  theme: string,
  toggleTheme: () => void,
  menuData: MenuDataType[],
  personalInformationData: PersonalInformationDataType,
}


const Header: React.FC<HeaderProps> = ({ loading, theme, toggleTheme, menuData, personalInformationData }) => {
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
      <GeneralNav $fixStatus={fixedTop} aria-label='Main Navigation'>
        <Container>
          <div className="inner">
            <Link to='home' aria-label='Alipasha Askerov Logo' smooth>
              <Logo firstName='Alipasha' lastName='' color='primary' />
            </Link>
            <NavLinksWrapper>
              {
                menuData.map((link, index) => (
                  <li key={link.id}>
                    <Link to={link.name} offset={-90} smooth={true} duration={100} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{link.name}</Link>
                  </li>
                ))
              }
            </NavLinksWrapper>
            <ButtonsWrapper>
              <ThemeButton onClick={toggleTheme} aria-label='Toggle theme'>
                <span className={`icon ${theme === 'light' ? 'active' : ''}`}>
                  <BsFillSunFill />
                </span>
                <span className={`icon ${theme === 'dark' ? 'active' : ''}`}>
                  <BsMoonStarsFill />
                </span>
              </ThemeButton>
              <MenuButton $active={showMenu} onClick={() => toggleMenu()} aria-label='Toggle Menu' aria-expanded={showMenu}>
                <span></span>
                <span></span>
                <span></span>
              </MenuButton>
            </ButtonsWrapper>
          </div>
        </Container>
      </GeneralNav>
      <HeaderMenu className={showMenu ? 'open' : ''} $loading={loading} $menuStatus={showMenu} aria-label='Mobile Navigation' aria-hidden={!showMenu}>
        <LinksWrapper $loading={loading} $menuStatus={showMenu}>
          {
            menuData.map((link, index) => (
              <li key={link.id}>
                <Link to={link.name} offset={-90} smooth={true} duration={100} onClick={() => setShowMenu(false)} style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>{link.name}</Link>
              </li>
            ))
          }
        </LinksWrapper>
        <HeaderSocialIcons $loading={loading} $menuStatus={showMenu}>
          <li>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.5s' }} aria-label='Github' href={personalInformationData.social.github}><FiGithub /></a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.7s' }} aria-label='Linkedin' href={personalInformationData.social.linkedin}><BiLogoLinkedin /></a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '0.9s' }} aria-label='Whatsapp' href={personalInformationData.social.whatsapp}><BsWhatsapp /></a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{ animationDelay: '1.1s' }} aria-label='Mail' href={`mailto:${personalInformationData.social.mail}`}><BiLogoGmail /></a>
          </li>
        </HeaderSocialIcons>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header

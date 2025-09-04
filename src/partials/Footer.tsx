'use client'
import React from 'react'
import Logo from '../components/Logo'
import { FooterContainer } from '../styles/partials/footer'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to='home' aria-label='Alipasha Askerov Logo'>
        <Logo firstName='Alipasha' lastName='Askerov' color='#fff' />
      </Link>
    </FooterContainer>
  )
}

export default Footer

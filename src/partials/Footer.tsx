'use client'
import React from 'react'
import Logo from '../components/Logo'
import { FooterContainer } from '../styles/partials/footer'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <FooterContainer>
      <Link to='home'>
        <Logo firstName='Alipasha' lastName='Askerov' color='#000000' />
      </Link>
    </FooterContainer>
  )
}

export default Footer

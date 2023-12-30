'use client'
import React from 'react'
import Logo from '../components/Logo'
import { FooterContainer } from '../styles/partials/footer'

const Footer = () => {
  return (
    <FooterContainer>
        <Logo firstName='Alipasha' lastName='Askerov' color='#000000'/>
    </FooterContainer>
  )
}

export default Footer

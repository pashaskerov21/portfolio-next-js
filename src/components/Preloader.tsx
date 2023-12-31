'use client'
import React from 'react'
import { PreloaderWrapper } from '../styles/components/preloader'
import Logo from './Logo'


const Preloader = () => {
    return (
        <PreloaderWrapper>
            <Logo firstName='Alipasha' lastName='Askerov' color='primary' infinite={true}  />
            {/* <div className="loader load-1"></div>
            <div className="loader load-2"></div>
            <div className="loader load-3"></div>
            <div className="loader load-4"></div> */}
        </PreloaderWrapper>
    )
}

export default Preloader

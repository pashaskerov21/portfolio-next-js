'use client'
import React from 'react'
import { PreloaderWrapper } from '../styles/components/preloader'


const Preloader = () => {
    return (
        <PreloaderWrapper>
            <div className="loader load-1"></div>
            <div className="loader load-2"></div>
            <div className="loader load-3"></div>
            <div className="loader load-4"></div>
        </PreloaderWrapper>
    )
}

export default Preloader

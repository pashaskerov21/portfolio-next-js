'use client'
import React from 'react'
import { Page404 } from '../styles/sections/page404'

const Page404Section = () => {
  return (
    <Page404>
        <div className="error-code">404</div>
        <div className="error-text">PAGE NOT FOUND</div>
        <a href="/" className="rotate-link">HOME PAGE</a>
    </Page404>
  )
}

export default Page404Section

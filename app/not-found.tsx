// import Page404Section from '@/src/sections/Page404Section'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Alipasha Askerov | 404',
}

const NotFound = () => {
  return (
    <React.Fragment>
      <section className="page-404-section">
        <div className="container">
          <div className="content">
            <div className="error-code">404</div>
            <h1 className="title">Page not found</h1>
            <Link href="/">Home Page</Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default NotFound

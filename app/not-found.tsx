import Page404Section from '@/src/sections/Page404Section'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Alipasha Askerov | 404',
}

const NotFound = () => {
  return (
    <Page404Section/>
  )
}

export default NotFound

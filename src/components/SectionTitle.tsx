'use client'
import React from 'react'
import { SectionTitleWrapper } from '../styles/components/sectiontitle'

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionTitleWrapper>
      <h1>{title}</h1>
    </SectionTitleWrapper>
  )
}

export default React.memo(SectionTitle)

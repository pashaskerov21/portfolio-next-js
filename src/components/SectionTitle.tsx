'use client'
import React from 'react'
import { SectionTitleWrapper } from '../styles/components/sectiontitle'

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionTitleWrapper>
      <h2>{title}</h2>
    </SectionTitleWrapper>
  )
}

export default React.memo(SectionTitle)

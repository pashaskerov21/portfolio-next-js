'use client'
import React from 'react'
import { SectionTitleWrapper } from '../styles/components/sectiontitle'

const SectionTitle: React.FC<{ title: string,id: string }> = ({ title,id }) => {
  return (
    <SectionTitleWrapper>
      <h2 role='heading' id={id}>{title}</h2>
    </SectionTitleWrapper>
  )
}

export default React.memo(SectionTitle)

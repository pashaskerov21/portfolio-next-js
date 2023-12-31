import About from '@/src/sections/About';
import Home from '@/src/sections/Home';
import Projects from '@/src/sections/Projects';
import Skills from '@/src/sections/Skills';
import Experience from '@/src/sections/Experience';
import Education from '@/src/sections/Education';
import Contact from '@/src/sections/Contact';
import { MenuDataType, PersonalInformationDataType, ProjectDataType, SkillDataType } from '@/src/types';
import { fetchInformationData, fetchMenuData, fetchProjectData, fetchSkillData } from '@/src/utils/fetch';
import React from 'react';
import HomeLayout from '@/src/layout/HomeLayout';

const fetchData = async (): Promise<{
  menuData: MenuDataType[],
  personalInformationData: PersonalInformationDataType,
  projectData: ProjectDataType[],
  skillData: SkillDataType[],
}> => {
  try {
    const [
      menuData,
      personalInformationData,
      projectData,
      skillData,
    ] = await Promise.all([
      fetchMenuData(),
      fetchInformationData(),
      fetchProjectData(),
      fetchSkillData(),
    ]);

    return {
      menuData,
      personalInformationData,
      projectData,
      skillData,
    };
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}



const PortfolioApp = async () => {
  const { menuData, personalInformationData, projectData, skillData } = await fetchData();

  try {
    if (menuData && personalInformationData && projectData && skillData) {
      return (
        <HomeLayout
          personalInformationData={personalInformationData}
          projectData={projectData}
          skillData={skillData}
        />
      )
    } else {
      <React.Fragment>
        Error
      </React.Fragment>
    }
  } catch (error) {
    console.error('Error:', error);
  }
  return (
    <React.Fragment>
      Error
    </React.Fragment>
  )
}


export default PortfolioApp;
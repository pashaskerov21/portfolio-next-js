import React from 'react';
import { MenuDataType, PersonalInformationDataType, ProjectDataType, SkillDataType } from '@/src/types';
import { fetchInformationData, fetchMenuData, fetchProjectData, fetchSkillData } from '@/src/hooks/useApi';
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
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}



const PortfolioApp = async () => {
  const { menuData, personalInformationData, projectData, skillData } = await fetchData();

  try {
    if (menuData && personalInformationData && projectData && skillData) {
      return (
        <React.Fragment>
          <HomeLayout
            personalInformationData={personalInformationData}
            projectData={projectData}
            skillData={skillData}
          />
        </React.Fragment>
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
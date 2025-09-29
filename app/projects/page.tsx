import React from 'react';
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '@/src/types';
import { fetchInformationData, fetchProjectData, fetchSkillData } from '@/src/hooks/useApi';
import ProjectsLayout from '@/src/layout/ProjectsLayout';

const fetchData = async (): Promise<{
  personalInformationData: PersonalInformationDataType,
  projectData: ProjectDataType[],
  skillData: SkillDataType[],
}> => {
  try {
    const [
      personalInformationData,
      projectData,
      skillData,
    ] = await Promise.all([
      fetchInformationData(),
      fetchProjectData(),
      fetchSkillData(),
    ]);

    return {
      personalInformationData,
      projectData,
      skillData,
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw new Error('Failed to fetch data');
  }
}



const ProjectsPage = async () => {
  const { personalInformationData, projectData, skillData } = await fetchData();

  try {
    if (personalInformationData && projectData && skillData) {
      return (
        <React.Fragment>
          <ProjectsLayout
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


export default ProjectsPage;
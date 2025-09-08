import { fireEvent, render, screen } from '@testing-library/react';
import { ProjectSection } from '../../sections';
import { ProjectDataType, SkillDataType } from '@/src/types';

const mockProjects: ProjectDataType[] = [
  {
    title: "Fullstack Project",
    image: "/fullstack.png",
    previewStatus: true,
    githubStatus: true,
    home: true,
    category: 1,
    previewLink: "https://alipashaskerov.vercel.app/",
    githubLink: "https://github.com/pashaskerov21/portfolio-next-js",
    skills: ['React JS', 'Next JS', 'TypeScript', 'Formik', 'Styled Components']
  },
  {
    title: "Frontend Project",
    image: "/frontend.png",
    previewStatus: true,
    githubStatus: true,
    home: true,
    category: 1,
    previewLink: "https://alipashaskerov.vercel.app/",
    githubLink: "https://github.com/pashaskerov21/portfolio-next-js",
    skills: ['React JS', 'Next JS', 'TypeScript', 'Formik', 'Styled Components']
  },
  {
    title: "Backend Project",
    image: "/backend.png",
    previewStatus: true,
    githubStatus: true,
    home: true,
    category: 1,
    previewLink: "https://alipashaskerov.vercel.app/",
    githubLink: "https://github.com/pashaskerov21/portfolio-next-js",
    skills: ['React JS', 'Next JS', 'TypeScript', 'Formik', 'Styled Components']
  },
];

const mockSkills: SkillDataType[] = [
  {
    id: 1,
    title: 'JavaScript',
    logo: '/javascript.svg',
    logo_dark: '/javascript.svg',
    color: '#fff'
  },
  {
    id: 2,
    title: 'React',
    logo: '/react.svg',
    logo_dark: '/react.svg',
    color: '#fff'
  },
];


describe('AboutSection', () => {
  beforeEach(() => {
    render(<ProjectSection projectData={mockProjects} skillData={mockSkills} />);
  });

  it('Section render olunur', () => {
    const section = screen.getByRole('region', { name: /projects/i });
    expect(section).toBeInTheDocument();
  });
  it('Section title render olunur', () => {
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toBeInTheDocument();
  });
});

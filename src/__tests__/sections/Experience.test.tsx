import { render, screen } from '@testing-library/react';
import { PersonalInformationData } from '../../data';
import { ExperienceSection } from '../../sections';

describe('ExperienceSection', () => {
  beforeEach(() => {
    render(<ExperienceSection personalInformationData={PersonalInformationData} />);
  });


  it('Section render olunur', () => {
    const section = screen.getByRole('region', { name: /experience/i });
    expect(section).toBeInTheDocument();
  });
  it('Section title render olunur', () => {
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toBeInTheDocument();
  });
  it('Experience cards render olunur', () => {
    const cards = screen.getAllByTestId('experience-card');
    expect(cards.length).toBe(PersonalInformationData.experience.length);
  });
});

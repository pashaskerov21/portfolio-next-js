import { render, screen } from '@testing-library/react';
import { EducationSection } from '../../sections';
import { PersonalInformationData } from '../../data';

describe('EducationSection', () => {
  beforeEach(() => {
    render(<EducationSection personalInformationData={PersonalInformationData} />);
  });


  it('Section render olunur', () => {
    const section = screen.getByRole('region', { name: /education/i });
    expect(section).toBeInTheDocument();
  });
  it('Section title render olunur', () => {
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toBeInTheDocument();
  });
  it('Education cards render olunur', () => {
    const cards = screen.getAllByRole('listitem');
    expect(cards.length).toBe(PersonalInformationData.education.length);
  });
});

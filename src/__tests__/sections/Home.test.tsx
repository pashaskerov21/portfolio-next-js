import { render, screen } from '@testing-library/react';
import { HomeSection } from '../../sections';
import { PersonalInformationData } from '../../data';

describe('AboutSection', () => {
  beforeEach(() => {
    render(<HomeSection personalInformationData={PersonalInformationData} />);
  });

  it('Section render olunur', () => {
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });
  it('Hero image render olunur', () => {
    const image = screen.getByAltText('Banner Hero');
    expect(image).toBeInTheDocument();
  });
});

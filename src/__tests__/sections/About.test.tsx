import { render, screen } from '@testing-library/react';
import { AboutSection } from '../../sections';
import { PersonalInformationData } from '../../data';

describe('AboutSection', () => {
  beforeEach(() => {
    render(<AboutSection personalInformationData={PersonalInformationData} />);
  });

  it('Section render olunur', () => {
    const section = screen.getByRole('region', { name: /about me/i });
    expect(section).toBeInTheDocument();
  });
  it('Section title render olunur', () => {
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toBeInTheDocument();
  });

  it('Profile image render olunur', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', PersonalInformationData.image);
  });
  it('About text render olunur', () => {
    const aboutText = screen.getByRole('article', { name: /about me/i });
    expect(aboutText).toBeInTheDocument();
  });

  it('CV download button render olunur', () => {
    const button = screen.getByRole('link', { name: /download cv/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', PersonalInformationData.cv);
  });

  it('Social icon links render olunur', () => {
    const github = screen.getByLabelText(/Github/i);
    const linkedin = screen.getByLabelText(/Linkedin/i);
    const whatsapp = screen.getByLabelText(/Whatsapp/i);
    const mail = screen.getByLabelText(/Mail/i);

    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();
    expect(mail).toBeInTheDocument();
  });
});

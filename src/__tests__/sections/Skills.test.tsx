import { render, screen } from '@testing-library/react';
import { SkillSection } from '../../sections';
import { SkillData } from '../../data';

describe('AboutSection', () => {
    //usedarkmode matchmedia configuration 
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // köhnə API üçün
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });
    
    beforeEach(() => {
        render(<SkillSection skillData={SkillData} />);
    });

    it('Section render olunur', () => {
        const section = screen.getByRole('region', { name: /skills/i });
        expect(section).toBeInTheDocument();
    });
    it('Section title render olunur', () => {
        const sectionTitle = screen.getByRole('heading', { level: 2 });
        expect(sectionTitle).toBeInTheDocument();
    });
});

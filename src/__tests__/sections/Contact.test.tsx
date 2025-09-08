import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ContactSection } from '../../sections';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({
  send: jest.fn(() => Promise.resolve({ status: 200 })),
}));


describe('AboutSection', () => {
  beforeEach(() => {
    render(<ContactSection />);
  });

  it('Section render olunur', () => {
    const section = screen.getByRole('region', { name: /contact/i });
    expect(section).toBeInTheDocument();
  });
  it('Section title render olunur', () => {
    const sectionTitle = screen.getByRole('heading', { level: 2 });
    expect(sectionTitle).toBeInTheDocument();
  });
  it('Form inputları render olunur', () => {
    expect(screen.getByLabelText(/surname, firstname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
  it('Submit button render olunur', () => {
    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();
  });

  it('Form duzgun isleyir', async () => {

    const fullNameInput = screen.getByLabelText(/Surname, Firstname/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);

    // Formu doldururuq
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello world!' } });

    // Button-u tapırıq
    const submitButton = screen.getByText(/send/i).closest('button');
    expect(submitButton).toBeInTheDocument();

    // Button-u click edirik
    fireEvent.click(submitButton!);

    // emailjs.send-in çağırıldığını gözləyirik
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        'service_5oxskh4',
        'template_ubdp51h',
        {
          user_name: 'John Doe',
          user_email: 'john@example.com',
          user_message: 'Hello world!',
        },
        'wbStjN6pVz7MYmF3r'
      );
    });
  });
});

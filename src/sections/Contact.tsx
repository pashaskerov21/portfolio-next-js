'use client'
import React, { useState, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import emailjs from 'emailjs-com';
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image';
import { Container } from '../styles/components/container';
import { ContactFormWrapper, ContactWrapper, FormItem } from '../styles/sections/contact';
import { SubmitButton } from '../styles/buttons/SubmitButton';

const Contact = () => {


  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [formValidation, setFormValidation] = useState<boolean>(false);


  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let emailValidate = emailRegex.test(email)

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !email || !emailValidate || !message) {
      setFormValidation(false)

      if (!fullName) {
        setFullNameError(true)
      } else {
        setFullNameError(false)
      }
      if (!email || !emailValidate) {
        setEmailError(true)
      } else {
        setEmailError(false)
      }
      if (!message) {
        setMessageError(true)
      } else {
        setMessageError(false)
      }
    } else {
      setFormValidation(true);
      setFullNameError(false);
      setEmailError(false);
      setMessageError(false);

      const params = {
        user_name: fullName,
        user_email: email,
        user_message: message,
      }
      emailjs
        .send('service_w47i0ze', 'template_ubdp51h', params, 'wbStjN6pVz7MYmF3r')
        .then((res) => {
          e.target.reset();
          console.log('Email sent successfully!');
        })
        .catch((err) => console.error('Error sending email:', err));


    }
  }

  useEffect(() => {
    if (formValidation) {
      setTimeout(() => {
        setFormValidation(false);
        setFullName('');
        setEmail('');
        setMessage('');
      }, 1700)
    }
  }, [formValidation]);
  return (
    <section id="contact">
      <Image src='/vectors/code.svg' className='code-img-design right' width={100} height={100} alt='' />

      <Container>
        <SectionTitle title='contact'></SectionTitle>
        <ContactWrapper>
          <ContactFormWrapper onSubmit={handleFormSubmit} autoComplete='off'>
            <FormItem $inputFocus={fullName && fullName.length > 0 ? true : false} $inputError={fullNameError ? true : false}>
              <input type="text" value={fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} />
              <span>Surname, Firstname</span>
            </FormItem>
            <FormItem $inputFocus={email && email.length > 0 ? true : false} $inputError={emailError ? true : false}>
              <input type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
              <span>Email</span>
            </FormItem>
            <FormItem $inputFocus={message && message.length > 0 ? true : false} $inputError={messageError ? true : false}>
              <textarea value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}></textarea>
              <span>Message</span>
            </FormItem>
            <SubmitButton $formValidation={formValidation ? true : false} type='submit'>
              {
                formValidation ? (
                  <div className="validate">
                    <div className="loader"></div>
                    <div className="check"><FaCheck /></div>
                  </div>
                ) : (
                  <span className='label'>send</span>
                )
              }
            </SubmitButton>
          </ContactFormWrapper>
        </ContactWrapper>
      </Container>
    </section>
  )
}

export default Contact

'use client'
import React from 'react'
import emailjs from 'emailjs-com';
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image';
import * as Yup from 'yup'
import SectionTitle from '../components/SectionTitle'
import { Container } from '../styles/components/container';
import { ContactFormWrapper, ContactWrapper, FormItem } from '../styles/sections/contact';
import { SubmitButton } from '../styles/buttons/submitbtn';
import { Field, Form, Formik, FormikHelpers } from 'formik';

const ContactSection: React.FC = () => {

  type FormValueType = {
    fullName: string,
    email: string,
    message: string,
  }
  const initialValues: FormValueType = {
    fullName: '',
    email: '',
    message: '',
  }
  const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required(),
  });

  const [formSubmit, setFormSubmit] = React.useState<boolean>(false)
  const onSubmit = (values: FormValueType, actions: FormikHelpers<FormValueType>) => {

    actions.resetForm();
    setFormSubmit(true);
    setTimeout(() => {
      setFormSubmit(false);
    }, 2000);

    let params = {
      user_name: values.fullName,
      user_email: values.email,
      user_message: values.message,
    }

    emailjs
      .send('service_5oxskh4', 'template_ubdp51h', params, 'wbStjN6pVz7MYmF3r')
      .then((res) => {
        // console.log('Email sent successfully!');
      })
      .catch((err) =>
        console.error('Error sending email:', err)
      );
  }

  return (
    <section id="contact" role='region' aria-labelledby='contact-title'>
      <Image src='/vectors/code.svg' className='code-img-design right' width={100} height={100} alt='' />

      <Container>
        <SectionTitle title='contact' id='contact-title'/>
        <ContactWrapper>
          <ContactFormWrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {
                formik => (
                  <Form role='form'>
                    <FormItem $inputFocus={formik.values.fullName.length > 0 ? true : false} $inputError={formik.errors.fullName ? true : false}>
                      <Field name='fullName' id='fullname' />
                      <label htmlFor='fullname'>Surname, Firstname</label>
                    </FormItem>
                    <FormItem $inputFocus={formik.values.email.length > 0 ? true : false} $inputError={formik.errors.email ? true : false}>
                      <Field name='email' id='email' />
                      <label htmlFor='email'>Email</label>
                    </FormItem>
                    <FormItem $inputFocus={formik.values.message.length > 0 ? true : false} $inputError={formik.errors.message ? true : false}>
                      <Field name='message' as='textarea' id='message' />
                      <label htmlFor='message'>Message</label>
                    </FormItem>
                    <SubmitButton $formValidation={formSubmit} type='submit'>
                      {
                        formSubmit ? (
                          <div className="validate">
                            <div className="loader"></div>
                            <div className="check"><FaCheck /></div>
                          </div>
                        ) : (
                          <span className='label'>send</span>
                        )
                      }

                    </SubmitButton>
                  </Form>
                )
              }
            </Formik>
          </ContactFormWrapper>
        </ContactWrapper>
      </Container>
    </section>
  )
}

export default ContactSection

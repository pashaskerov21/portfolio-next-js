'use client'
import React, { useEffect } from 'react'
import emailjs from 'emailjs-com';
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle'
import { Container } from '../styles/components/container';
import { ContactFormWrapper, ContactWrapper, FormItem } from '../styles/sections/contact';
import { SubmitButton } from '../styles/buttons/SubmitButton';

const Contact:React.FC<{loading: boolean}> = () => {

  const [form, setForm] = React.useState<{
    value: {
      fullName: string,
      email: string,
      message: string,
    },
    validation: {
      fullName: boolean,
      email: boolean,
      message: boolean,
      submit: boolean,
    }
  }>({
    value: {
      fullName: "",
      email: "",
      message: "",
    },
    validation: {
      fullName: false,
      email: false,
      message: false,
      submit: false,
    },
  })

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let emailValidate = emailRegex.test(form.value.email ? form.value.email : '');

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.value.fullName || !form.value.email || !form.value.message || !emailValidate) {
    
      setForm((prev) => {
        return {
          ...prev,
          validation: {
            ...prev.validation,
            form: false,
          }
        };
      });
      if (!form.value.fullName) {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              fullName: true,
            }
          }
        })
      } else {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              fullName: false,
            }
          }
        })
      };
      if (!form.value.email) {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              email: true,
            }
          }
        })
      } else {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              email: false,
            }
          }
        })
      };
      if (!form.value.message) {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              message: true,
            }
          }
        })
      } else {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              message: false,
            }
          }
        })
      };
    } else {

      setForm((prev) => {
        return {
          ...prev,
          validation: {
            fullName: false,
            email: false,
            message: false,
            submit: true,
          }
        }
      });
      const params = {
        user_name: form.value.fullName,
        user_email: form.value.email,
        user_message: form.value.message,
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

  const changeFormValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: "fullName" | "email" | "message") => {
    setForm((prev) => {
      return {
        ...prev,
        value: {
          ...prev.value,
          [key]: e.target.value,
        }
      }
    })
  }, [setForm]);

  useEffect(() => {
    if (form.validation.submit) {
      setTimeout(() => {
        setForm((prev) => {
          return {
            ...prev,
            validation: {
              ...prev.validation,
              submit: false,
            },
            value: {
              fullName: '',
              email: '',
              message: '',
            }
          }
        })
      }, 1700)
    }
  }, [form.validation.submit]);

  React.useEffect(() =>{
    console.log(form)
  },[form])
  return (
    <section id="contact">
      <Image src='/vectors/code.svg' className='code-img-design right' width={100} height={100} alt='' />

      <Container>
        <SectionTitle title='contact'></SectionTitle>
        <ContactWrapper>
          <ContactFormWrapper onSubmit={handleFormSubmit} autoComplete='off'>
            <FormItem $inputFocus={form.value.fullName && form.value.fullName.length > 0 ? true : false} $inputError={form.validation.fullName}>
              <input type="text" value={form.value.fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFormValue(e, "fullName")} />
              <span>Surname, Firstname</span>
            </FormItem>
            <FormItem $inputFocus={form.value.email && form.value.email.length > 0 ? true : false} $inputError={form.validation.email}>
              <input type="text" value={form.value.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFormValue(e, "email")} />
              <span>Email</span>
            </FormItem>
            <FormItem $inputFocus={form.value.message && form.value.message.length > 0 ? true : false} $inputError={form.validation.message}>
              <textarea value={form.value.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeFormValue(e, "message")}></textarea>
              <span>Message</span>
            </FormItem>
            <SubmitButton $formValidation={form.validation.submit ? true : false} type='submit'>
              {
                form.validation.submit ? (
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

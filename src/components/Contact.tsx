import * as S from './Contact.styled'
import { FadeTransition } from './shared/Transitions'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface ContactProps {
  contactCopy: {
    title: string
    subtitle: string
    contactInfo: {
      email: string
      phone: string
    }
    contactForm: ContactForm
  }
}

type ContactForm = {
  name: FormFieldProps
  lastName: FormFieldProps
  email: FormFieldProps
  message: FormFieldProps
  submit: string
  success?: string
  error?: string
  subject: FormFieldProps
}
type FormFieldProps = {
  placeholder: string
  required: boolean
  label: LabelType
}

export type LabelType = 'name' | 'last name' | 'email' | 'message' | 'subject'

function Contact({
  contactCopy: {
    title,
    subtitle,
    contactInfo: { email: emailInfo, phone },
    contactForm,
  },
}: ContactProps) {
  const toastifySuccess = () => {
    toast.success('Form sent!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
      style: {
        zIndex: '9999',
        marginTop: '4em',
        backgroundColor: '#80D8DA',
        color: 'white',
        fontFamily: 'Overpass Mono',
        fontSize: '1.2em',
        fontWeight: 'bold',
      },
    })
  }
  const toastifyLoad = () => {
    toast.info('Sending form . . .', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: 'notifyToast',
      style: {
        zIndex: '9999',
        marginTop: '4em',
        backgroundColor: '#80D8DA',
        color: 'white',
        fontFamily: 'Overpass Mono',
        fontSize: '1.2em',
        fontWeight: 'bold',
      },
    })
  }
  const onSubmit: SubmitHandler<SubmitValues> = async (data) => {
    const { name, 'last name': lastName, email, subject, message } = data
    toastifyLoad()
    try {
      const templateParams = {
        name: `${name} ${lastName}`,
        email,
        subject,
        message,
      }
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <S.Box>
      <S.ContactSection>
        <FadeTransition>
          <S.Title variant='h3' component='h1'>
            {title}
          </S.Title>
        </FadeTransition>
        <S.FormRow>
          <FadeTransition>
            <S.Subtitle variant='h5' component='h2'>
              {subtitle}
            </S.Subtitle>
          </FadeTransition>
        </S.FormRow>
        <FadeTransition>
          <S.ContentRow>
            <S.LeftSection>
              <S.ContactInfo variant='h6' component='h3'>
                <strong>
                  Phone:
                  <br />
                </strong>
                {phone}
              </S.ContactInfo>
              <S.ContactInfo variant='h6' component='h3'>
                <strong>
                  E-mail:
                  <br />
                </strong>
                {emailInfo}
              </S.ContactInfo>
            </S.LeftSection>
            <S.RightSection>
              <ContactForm contactForm={contactForm} onSubmit={onSubmit} />
            </S.RightSection>
            <ToastContainer />
          </S.ContentRow>
        </FadeTransition>
      </S.ContactSection>
    </S.Box>
  )
}

interface ContactFormProps {
  contactForm: ContactForm
  onSubmit: (data: any) => void
}

type SubmitValues = {
  name: string
  ['last name']: string
  email: string
  message: string
  subject: string
}
const ContactForm = ({
  contactForm: { name, lastName, email, message, submit, subject },
  onSubmit,
}: ContactFormProps) => {
  const { handleSubmit, control, reset } = useForm<SubmitValues>()

  const onSubmitHandler = async (
    data: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    await handleSubmit(onSubmit)(data)
    await reset()
  }

  return (
    <S.FormSection onSubmit={onSubmitHandler}>
      <S.FormRow>
        <S.Form50Row>
          <Controller
            name={name.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'First Name required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextField
                margin='normal'
                label={name.label}
                placeholder={name.placeholder}
                required={name.required}
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? name.placeholder : null}
              />
            )}
          />
        </S.Form50Row>
        <S.Form50Row>
          <Controller
            name={lastName.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'Last Name required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextField
                margin='normal'
                label={lastName.label}
                placeholder={lastName.placeholder}
                required={lastName.required}
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? name.placeholder : null}
              />
            )}
          />
        </S.Form50Row>
      </S.FormRow>
      <S.FormRow>
        <S.Form50Row>
          <Controller
            name={email.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'E-mail required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextField
                margin='normal'
                label={email.label}
                placeholder={email.placeholder}
                required={email.required}
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? name.placeholder : null}
                type='email'
              />
            )}
          />
        </S.Form50Row>
        <S.Form50Row>
          <Controller
            name={subject.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'Subject is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextField
                margin='normal'
                label={subject.label}
                placeholder={subject.placeholder}
                required={subject.required}
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? name.placeholder : null}
              />
            )}
          />
        </S.Form50Row>
      </S.FormRow>
      <S.FormRow>
        <S.Form70Row>
          <Controller
            name={message.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'Message is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextArea
                margin='normal'
                label={message.label}
                placeholder={message.placeholder}
                required={message.required}
                multiline
                minRows={3}
                maxRows={4}
                value={value}
                onChange={onChange}
                InputProps={{ sx: { border: 'none' } }}
                sx={{ outline: 'none' }}
                focused={value !== ''}
                error={!!error}
                helperText={error ? name.placeholder : null}
                inputProps={{ maxLength: 500 }}
              />
            )}
          />
        </S.Form70Row>
        <S.Form30Row>
          <S.ButtonCircle type='submit'>{submit}</S.ButtonCircle>
        </S.Form30Row>
      </S.FormRow>
    </S.FormSection>
  )
}

export { Contact }

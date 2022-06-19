import { Badge } from '@mui/icons-material'
import { InputAdornment, Box } from '@mui/material'
import * as S from './Contact.styled'
import { FadeTransition } from './shared/Transitions'

import React from 'react'
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

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
  label: string
}

function Contact({
  contactCopy: {
    title,
    subtitle,
    contactInfo: { email: emailInfo, phone },
    contactForm,
  },
}: ContactProps) {
  const [textAreaMessage, setTextAreaMessage] = React.useState('')
  const onSubmit = (data: SubmitValues) => console.log(data)

  return (
    <S.Box>
      <S.ContactSection>
        <FadeTransition>
          <S.Title variant='h3' component='h1'>
            {title}
          </S.Title>
        </FadeTransition>
        <FadeTransition>
          <S.ContentRow>
            <S.LeftSection>
              <S.Subtitle variant='h5' component='h2'>
                {subtitle}
              </S.Subtitle>
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

interface SubmitValues extends SubmitHandler<FieldValues> {
  name: string
  ['last name']: string
  email: string
  message: string
  subject: string
}
const ContactForm = ({
  contactForm: {
    name,
    lastName,
    email,
    message,
    submit,
    success,
    error,
    subject,
  },
  onSubmit,
}: ContactFormProps) => {
  const { register, handleSubmit, watch, control } = useForm()
  return (
    <S.FormSection onSubmit={handleSubmit(onSubmit)}>
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
              />
            )}
          />
        </S.Form50Row>
        <S.Form50Row>
          <Controller
            name={subject.label}
            control={control}
            defaultValue={''}
            rules={{ required: 'E-mail subject is required' }}
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
            rules={{ required: 'E-mail subject is required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <S.TextArea
                margin='normal'
                label={message.label}
                placeholder={message.placeholder}
                required={message.required}
                multiline
                rows={7}
                value={value}
                onChange={onChange}
                InputProps={{ sx: { border: 'none' } }}
                sx={{ outline: 'none' }}
                focused={value !== ''}
                error={!!error}
                helperText={error ? name.placeholder : null}
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

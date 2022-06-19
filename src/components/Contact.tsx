import { Badge } from '@mui/icons-material'
import { InputAdornment, Box } from '@mui/material'
import * as S from './Contact.styled'
import { FadeTransition } from './shared/Transitions'

import React from 'react'

interface ContactProps {
  contactCopy: {
    title: string
    subtitle: string
    contactInfo: {
      email: string
      phone: string
    }
    contactForm: {
      name: FormFieldProps
      lastName: FormFieldProps
      email: FormFieldProps
      message: FormFieldProps
      submit: string
      success: string
      error: string
      subject: FormFieldProps
    }
  }
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
  },
}: ContactProps) {
  const [textAreaMessage, setTextAreaMessage] = React.useState('')
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
              <S.FormSection>
                <S.FormRow>
                  <S.Form50Row>
                    <S.TextField
                      margin='normal'
                      label={name.label}
                      placeholder={name.placeholder}
                      required={name.required}
                    />
                  </S.Form50Row>
                  <S.Form50Row>
                    <S.TextField
                      margin='normal'
                      label={lastName.label}
                      placeholder={lastName.placeholder}
                      required={lastName.required}
                    />
                  </S.Form50Row>
                </S.FormRow>
                <S.FormRow>
                  <S.Form50Row>
                    <S.TextField
                      margin='normal'
                      label={email.label}
                      placeholder={email.placeholder}
                      required={email.required}
                    />
                  </S.Form50Row>
                  <S.Form50Row>
                    <S.TextField
                      margin='normal'
                      label={subject.label}
                      placeholder={subject.placeholder}
                      required={subject.required}
                    />
                  </S.Form50Row>
                </S.FormRow>
                <S.FormRow>
                  <S.Form70Row>
                    <S.TextArea
                      margin='normal'
                      label={message.label}
                      placeholder={message.placeholder}
                      required={message.required}
                      multiline
                      rows={7}
                      value={textAreaMessage}
                      onChange={(e) => setTextAreaMessage(e.target.value)}
                      InputProps={{ sx: { border: 'none' } }}
                      sx={{ outline: 'none' }}
                      focused={textAreaMessage !== ''}
                    />
                  </S.Form70Row>
                  <S.Form30Row>
                    <S.ButtonCircle>{submit}</S.ButtonCircle>
                  </S.Form30Row>
                </S.FormRow>
              </S.FormSection>
            </S.RightSection>
          </S.ContentRow>
        </FadeTransition>
      </S.ContactSection>
    </S.Box>
  )
}

export { Contact }

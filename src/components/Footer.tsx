import * as S from './Footer.styled'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import React from 'react'
import { Typography } from '@mui/material'

interface FooterProps {
  footerCopy: {
    phone: string
    email: string
    linkedIn: string
    github: string
  }
}
function Footer({
  footerCopy: { phone, email, linkedIn, github },
}: FooterProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleArrowClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Footer
      className={`${isOpen ? 'open' : 'close'}`}
      $isOpen={isOpen}
      onClick={() => handleArrowClose()}>
      <div style={{ width: '100%', height: '2em' }}>
        <S.ArrowUp
          strokeWidth={2}
          className='fade-in'
          onClick={() => handleArrowClose()}
          $isOpen={isOpen}
        />
      </div>
      <Typography
        variant='caption'
        sx={{ width: '100%', textAlign: 'center', margin: '0px 0 10px 0' }}>
        INFO
      </Typography>
      <S.Box $isOpen={isOpen}>
        <S.Column>
          <S.Label>Phone</S.Label>
          <S.Value>{phone}</S.Value>
        </S.Column>
        <S.Column>
          <S.Label>Email</S.Label>
          <S.Value>{email}</S.Value>
        </S.Column>
        <S.Column>
          <S.Label>Follow Me</S.Label>
          <div>
            <S.IconButton href={linkedIn} target='_blank' $type={'linkedin'}>
              <LinkedInIcon />
            </S.IconButton>
            <S.IconButton href={github} target='_blank' $type={'github'}>
              <GitHubIcon />
            </S.IconButton>
          </div>
        </S.Column>
        <S.Column $hide600>
          <S.Label>Created with </S.Label>
          <S.Value>Vitejs | React | Typescript</S.Value>
          <S.Value>StyledComponents | MaterialUI </S.Value>
        </S.Column>
      </S.Box>
    </S.Footer>
  )
}

export { Footer }

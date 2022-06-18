import { Fade, Toolbar, Zoom } from '@mui/material'
import ComputerIcon from '@mui/icons-material/ComputerOutlined'

import * as S from './Header.styled'
import { Link } from './shared/Link'
import { useLocation } from 'react-router-dom'
import React from 'react'
import { CottageOutlined } from '@mui/icons-material'

interface HeaderProps {
  headerCopy: {
    name: string
    jobRole: string
    shortJobRole: string
  }
  headerButton: {
    button1: string
    button2: string
    button3: string
    color: {
      orange: string
      red: string
      cyan: string
    }
  }
}
function Header({
  headerCopy: { name, jobRole, shortJobRole },
  headerButton: {
    button1,
    button2,
    button3,
    color: { orange, red, cyan },
  },
}: HeaderProps) {
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const isButton1 = pathname === `/${button1}`
  const isButton2 = pathname === `/${button2}`
  const isButton3 = pathname === `/${button3}`

  const iconColor = () => {
    if (isHome) return '#232323'
    if (isButton1) return orange
    if (isButton2) return red
    if (isButton3) return cyan
    return '#232323'
  }

  return (
    <S.AppBar>
      <Toolbar sx={{ maxWidth: 'fit-content', overflow: 'hidden' }}>
        <Link to='/'>
          {pathname === '/' && (
            <Zoom in={isHome} timeout={1000} exit={!isHome}>
              <ComputerIcon sx={{ color: '#232323', mr: 2 }} />
            </Zoom>
          )}
          {pathname !== '/' && (
            <Zoom in={!isHome} timeout={1000} exit={isHome}>
              <CottageOutlined sx={{ color: '#232323', mr: 2 }} />
            </Zoom>
          )}
        </Link>
        <Link to='/'>
          <S.NameTypography
            variant='h5'
            component='div'
            className='moves'
            color={iconColor()}>
            {name}
          </S.NameTypography>
        </Link>
        <S.JobRoleTypography
          variant='h6'
          component='div'
          className='moves'
          $shortJobRole={shortJobRole}>
          {jobRole}
        </S.JobRoleTypography>
      </Toolbar>
      {!isHome && (
        <Zoom in={!isHome} exit={isHome} timeout={1000}>
          <S.ButtonRow className='moves'>
            <Link to={`/${button1}`}>
              <S.ButtonHeader
                $color={orange}
                $isActive={isButton1}
                variant='text'>
                {button1}
              </S.ButtonHeader>
            </Link>
            <S.DividerButtonHeader
              orientation='vertical'
              flexItem
              variant='middle'
            />
            <Link to={`/${button2}`}>
              <S.ButtonHeader $color={red} $isActive={isButton2} variant='text'>
                {button2}
              </S.ButtonHeader>
            </Link>
            <S.DividerButtonHeader
              orientation='vertical'
              flexItem
              variant='middle'
            />
            <Link to={`/${button3}`}>
              <S.ButtonHeader
                $color={cyan}
                $isActive={isButton3}
                variant='text'>
                {button3}
              </S.ButtonHeader>
            </Link>
          </S.ButtonRow>
        </Zoom>
      )}
    </S.AppBar>
  )
}

export { Header }

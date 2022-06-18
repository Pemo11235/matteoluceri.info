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
  }
}
function Header({
  headerCopy: { name, jobRole, shortJobRole },
  headerButton: { button1, button2, button3 },
}: HeaderProps) {
  const { pathname } = useLocation()

  const isHome = pathname === '/'
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
          <S.NameTypography variant='h5' component='div' className='moves'>
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
              <S.ButtonHeader variant='text'>{button1}</S.ButtonHeader>
            </Link>
            <S.DividerButtonHeader
              orientation='vertical'
              flexItem
              variant='middle'
            />
            <Link to={`/${button2}`}>
              <S.ButtonHeader variant='text'>{button2}</S.ButtonHeader>
            </Link>
            <S.DividerButtonHeader
              orientation='vertical'
              flexItem
              variant='middle'
            />
            <Link to={`/${button3}`}>
              <S.ButtonHeader variant='text'>{button3}</S.ButtonHeader>
            </Link>
          </S.ButtonRow>
        </Zoom>
      )}
    </S.AppBar>
  )
}

export { Header }

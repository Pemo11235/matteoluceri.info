import { Toolbar } from '@mui/material'
import ComputerIcon from '@mui/icons-material/ComputerOutlined'

import * as S from './Header.styled'

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
  return (
    <S.Box>
      <S.AppBar position='fixed'>
        <Toolbar sx={{ alignItems: 'center' }}>
          <ComputerIcon sx={{ color: 'black', mr: 2 }} />
          <S.NameTypography variant='h5' component='div' className='moves'>
            {name}
          </S.NameTypography>
          <S.JobRoleTypography
            variant='h6'
            component='div'
            className='moves'
            $shortJobRole={shortJobRole}>
            {jobRole}
          </S.JobRoleTypography>
        </Toolbar>
        <S.ButtonRow className='moves'>
          <S.ButtonHeader variant='text' href='/'>
            {button1}
          </S.ButtonHeader>
          <S.DividerButtonHeader
            orientation='vertical'
            flexItem
            variant='middle'
          />
          <S.ButtonHeader variant='text' href='/'>
            {button2}
          </S.ButtonHeader>
          <S.DividerButtonHeader
            orientation='vertical'
            flexItem
            variant='middle'
          />
          <S.ButtonHeader variant='text' href='/'>
            {button3}
          </S.ButtonHeader>
        </S.ButtonRow>
      </S.AppBar>
    </S.Box>
  )
}

export { Header }

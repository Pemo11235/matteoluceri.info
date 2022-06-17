import { Toolbar } from '@mui/material'
import ComputerIcon from '@mui/icons-material/ComputerOutlined'

import * as S from './Header.styled'
import { Link } from './shared/Link'

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
    <S.AppBar>
      <Toolbar sx={{ maxWidth: 'fit-content', overflow: 'hidden' }}>
        <Link to='/'>
          <ComputerIcon sx={{ color: 'black', mr: 2 }} />
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
      <S.ButtonRow className='moves'>
        <S.ButtonHeader variant='text' href={`/${button1}`}>
          {button1}
        </S.ButtonHeader>
        <S.DividerButtonHeader
          orientation='vertical'
          flexItem
          variant='middle'
        />
        <S.ButtonHeader variant='text' href={`/${button2}`}>
          {button2}
        </S.ButtonHeader>
        <S.DividerButtonHeader
          orientation='vertical'
          flexItem
          variant='middle'
        />
        <S.ButtonHeader variant='text' href={`/${button3}`}>
          {button3}
        </S.ButtonHeader>
      </S.ButtonRow>
    </S.AppBar>
  )
}

export { Header }

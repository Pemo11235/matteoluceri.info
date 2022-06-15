import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ComputerIcon from '@mui/icons-material/ComputerOutlined'
import type { TypographyProps } from '@mui/material/Typography'

interface HeaderProps {
  name: string
  jobRole: string
  shortJobRole: string
}

type ExtraProp = {
  component: string
  $shortJobRole?: string
}
const NameTypography = styled(Typography)<ExtraProp>`
  color: #232323;
  font-weight: 700;
  font-family: Monospace;
  letter-spacing: 0.1em;
  padding: 10px 0 0 0;
  margin-block-start: 0;
  margin-block-end: 0;
  word-wrap: never;
  white-space: nowrap;

  @media (min-width: 0px) and (max-width: 600px) {
    font-size: 1.2em;
  }

  &.moves {
    animation-name: move;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
  }

  @keyframes move {
    0% {
      transform: translateX(+200%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`

const JobRoleTypography = styled(Typography)<ExtraProp>`
  color: #232323;
  font-weight: 400;
  font-family: Monospace;
  letter-spacing: 0.1em;
  padding: 10px 0 0 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 10px;
  white-space: nowrap;
  font-size: 1.2em;

  :before {
    content: '|';
  }

  @media (min-width: 0px) and (max-width: 499px) {
    visibility: hidden;
    :before {
      visibility: visible;
      content: ' | ${(props) => props.$shortJobRole}';
      font-size: 0.8em;
    }
  }
  @media (min-width: 500px) and (max-width: 800px) {
    font-size: 1em;
    margin-left: 10px;
  }

  &.moves {
    animation-name: move;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
  }

  @keyframes move {
    0% {
      transform: translateX(+200%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`
const ButtonHeader = styled(Button)`
  color: #232323;
  font-weight: 400;
  font-family: Monospace;
  letter-spacing: 0.1em;
  font-size: 1em;

  @media (min-width: 0px) and (max-width: 799px) {
    visibility: hidden;
  }
`

const DividerButtonHeader = styled(Divider)`
  @media (min-width: 0px) and (max-width: 799px) {
    visibility: hidden;
  }
`
function Header({ name, jobRole, shortJobRole }: HeaderProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100vw',
        margin: '0 0 54px 0',
        backgroundColor: '#f3f3f3',
      }}>
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: '#f3f3f3',
          width: '100vw',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          boxShadow: 'none',
        }}>
        <Toolbar sx={{ alignItems: 'center' }}>
          <ComputerIcon sx={{ color: 'black', mr: 2 }} />
          <NameTypography variant='h5' component='div' className='moves'>
            {name}
          </NameTypography>
          <JobRoleTypography
            variant='h6'
            component='div'
            className='moves'
            $shortJobRole={shortJobRole}>
            {jobRole}
          </JobRoleTypography>
        </Toolbar>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '10px 50px 0 0 ',
          }}>
          <ButtonHeader variant='text' href='/'>
            Resume
          </ButtonHeader>
          <DividerButtonHeader
            orientation='vertical'
            flexItem
            variant='middle'
          />
          <ButtonHeader variant='text' href='/'>
            Project
          </ButtonHeader>
          <DividerButtonHeader
            orientation='vertical'
            flexItem
            variant='middle'
          />
          <ButtonHeader variant='text' href='/'>
            Contact
          </ButtonHeader>
        </div>
      </AppBar>
    </Box>
  )
}

export { Header }

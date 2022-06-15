import {
  Avatar,
  Container as ContainerBase,
  styled,
  Typography,
  Button,
} from '@mui/material'

const Container = styled(ContainerBase)`
  min-width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10% 0;

  @media (min-width: 0px) and (max-width: 599px) {
    flex-direction: column-reverse;
  }
`
const Column = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ColumnLeft = styled(Column)`
  width: 60%;
  margin-left: 10%;

  @media (min-width: 0px) and (max-width: 599px) {
    margin-left: 0;
    max-height: 50%;
    width: 80%;
  }
`
const ColumnRight = styled(Column)`
  width: 40%;
  margin-left: 2%;
  margin-right: 10%;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 0px) and (max-width: 599px) {
    margin-left: 0;
    margin-right: 0;
    max-height: 50%;
    width: 80%;
  }
`

const AvatarStyled = styled(Avatar)`
  min-width: 400px;
  min-height: 400px;
  margin-right: 2%;
  transition: all 0.3s ease-in-out;

  @media (min-width: 0px) and (max-width: 599px) {
    transform: scale(0.8);
  }

  @media (min-width: 600px) and (max-width: 799px) {
    transform: scale(0.7);
  }

  @media (min-width: 800px) {
    transform: scale(1.05);
  }

  &.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
type ExtraProp = {
  component: string
}
const GreetingTypography = styled(Typography)<ExtraProp>`
  font-family: Monospace;
  font-weight: 700;
  letter-spacing: 0.2em;

  &.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const TextTypography = styled(Typography)<ExtraProp>`
  font-family: Monospace;

  &.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  justify-items: space-between;
  align-items: center;
  margin-top: 20px;
`
type ExtraButtonProps = {
  $animationDuration: number
}
const ButtonCircle = styled(Button)<ExtraButtonProps>`
  border: 1px solid #232323;
  color: #232323;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 30px;
  margin: 0 0 0 10px;
  text-transform: none;
  font-weight: 700;

  :first-child {
    margin-left: 0;
  }

  :hover {
    background-color: white;
  }

  @media (min-width: 0px) and (max-width: 449px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 450px) and (max-width: 599px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 600px) and (max-width: 749px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 750px) and (max-width: 999px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1000px) {
    width: 130px;
    height: 130px;
  }

  &.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: ${(props) => props.$animationDuration}s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
function Home() {
  return (
    <Container>
      <ColumnLeft>
        <AvatarStyled className='fade-in' />
      </ColumnLeft>
      <ColumnRight>
        <GreetingTypography variant='h3' component='h1' className='fade-in'>
          Hello World!
        </GreetingTypography>
        <TextTypography variant='body1' component='h2' className='fade-in'>
          I'm Matteo Luceri, a Front-end Developer. And this thext is gonna be
          longer that wha it is now.
        </TextTypography>
        <Row>
          <ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#EEA302' }}
            className='fade-in'
            $animationDuration={2}>
            Resume
          </ButtonCircle>
          <ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#FF3B25' }}
            className='fade-in'
            $animationDuration={2.5}>
            Project
          </ButtonCircle>
          <ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#80D8DA' }}
            className='fade-in'
            $animationDuration={3}>
            Contact
          </ButtonCircle>
        </Row>
      </ColumnRight>
    </Container>
  )
}

export { Home }

import { Link } from './shared/Link'
import * as S from './Home.styled'

interface HomeProps {
  homeButton: {
    button1: string
    button2: string
    button3: string
    color: {
      orange: string
      red: string
      cyan: string
    }
  }
  homeCopy: {
    greeting: string
    text: string
  }
  avatar: string
}
function Home({
  homeButton: {
    button1,
    button2,
    button3,
    color: { orange, red, cyan },
  },
  homeCopy: { greeting, text },
  avatar,
}: HomeProps) {
  return (
    <S.Container>
      <S.ColumnLeft>
        <S.AvatarStyled className='fade-in' src={avatar} />
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.GreetingTypography variant='h3' component='h1' className='fade-in'>
          {greeting}
        </S.GreetingTypography>
        <S.TextTypography variant='body1' component='h2' className='fade-in'>
          {text}
        </S.TextTypography>
        <S.Row>
          <Link to={`/${button1}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: orange }}
              className='fade-in'
              $animationDuration={2}>
              {button1}
            </S.ButtonCircle>
          </Link>
          <Link to={`/${button2}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: red }}
              className='fade-in'
              $animationDuration={2.5}>
              {button2}
            </S.ButtonCircle>
          </Link>
          <Link to={`/${button3}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: cyan }}
              className='fade-in'
              $animationDuration={3}>
              {button3}
            </S.ButtonCircle>
          </Link>
        </S.Row>
      </S.ColumnRight>
    </S.Container>
  )
}

export { Home }

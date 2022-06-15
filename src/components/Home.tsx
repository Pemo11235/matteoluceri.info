import * as S from './Home.styled'

interface HomeProps {
  homeButton: {
    button1: string
    button2: string
    button3: string
  }
  homeCopy: {
    greeting: string
    text: string
  }
  avatar: string
}
function Home({
  homeButton: { button1, button2, button3 },
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
          <S.ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#EEA302' }}
            className='fade-in'
            $animationDuration={2}>
            {button1}
          </S.ButtonCircle>
          <S.ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#FF3B25' }}
            className='fade-in'
            $animationDuration={2.5}>
            {button2}
          </S.ButtonCircle>
          <S.ButtonCircle
            variant='contained'
            sx={{ backgroundColor: '#80D8DA' }}
            className='fade-in'
            $animationDuration={3}>
            {button3}
          </S.ButtonCircle>
        </S.Row>
      </S.ColumnRight>
    </S.Container>
  )
}

export { Home }

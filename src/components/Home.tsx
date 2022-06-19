import { Link } from './shared/Link'
import * as S from './Home.styled'
import React from 'react'
import { FadeTransition } from './shared/Transitions'

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
  coloredAvatars: string[]
}

enum AVATAR_INDEX {
  orange = 0,
  red = 1,
  cyan = 2,
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
  coloredAvatars,
}: HomeProps) {
  const [avatarIndex, setAvatarIndex] = React.useState(AVATAR_INDEX.orange)
  const timeoutRef = React.useRef<number>(0)

  const cycleAvatar = React.useCallback(() => {
    setAvatarIndex((prev) => (prev + 1) % 3)
  }, [avatarIndex])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(cycleAvatar, 1000)

    return () => {
      resetTimeout()
    }
  }, [avatarIndex])

  return (
    <S.Container>
      <S.ColumnLeft>
        <S.AvatarStyled src={coloredAvatars[avatarIndex]} />
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

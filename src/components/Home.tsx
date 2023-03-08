import React from 'react'
import { useOnLoadImages } from '../hooks/useOnLoadImages'
import * as S from './Home.styled'
import { Link } from './shared/Link'

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
    text_b: string
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
  homeCopy: { greeting, text, text_b },
  coloredAvatars,
}: HomeProps) {
  const [avatarIndex, setAvatarIndex] = React.useState(AVATAR_INDEX.orange)
  const timeoutRef = React.useRef<number>(0)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const imagesLoaded = useOnLoadImages(wrapperRef)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setAvatarIndex((prevAvatarIndex) => {
        if (prevAvatarIndex === AVATAR_INDEX.cyan) {
          return AVATAR_INDEX.orange
        }
        return prevAvatarIndex + 1
      })
    }, 2000)
    return () => {
      resetTimeout()
    }
  }, [avatarIndex])

  return (
    <S.Container>
      <S.ColumnLeft ref={wrapperRef}>
        {!imagesLoaded ? (
          <S.Skeleton
            variant='circular'
            animation='wave'
          />
        ) : (
          <S.SlideshowContainer>
            <S.SlideshowSlider
              style={{ transform: `translate3d(calc(${-avatarIndex * 100}%), 0 ,0)` }}
            >
              {coloredAvatars.map((coloredAvatar, index) => (
                <S.AvatarStyled
                  key={index}
                  className={'slide fade'}
                  imgProps={{ loading: 'lazy' }}
                  src={coloredAvatar}
                />
              ))}
            </S.SlideshowSlider>
          </S.SlideshowContainer>
        )}
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.GreetingTypography
          variant='h3'
          component='h1'
          className='fade-in'
        >
          {greeting}
        </S.GreetingTypography>
        <S.TextTypography
          variant='body1'
          component='p'
          className='fade-in'
        >
          {text}
        </S.TextTypography>
        <S.TextTypography
          variant='body1'
          component='p'
          className='fade-in'
        >
          {text_b}
        </S.TextTypography>
        <S.Row>
          <Link to={`/${button1}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: orange }}
              className='fade-in'
              $animationDuration={2}
            >
              {button1}
            </S.ButtonCircle>
          </Link>
          <Link to={`/${button2}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: red }}
              className='fade-in'
              $animationDuration={2.5}
            >
              {button2}
            </S.ButtonCircle>
          </Link>
          <Link to={`/${button3}`}>
            <S.ButtonCircle
              variant='contained'
              sx={{ backgroundColor: cyan }}
              className='fade-in'
              $animationDuration={3}
            >
              {button3}
            </S.ButtonCircle>
          </Link>
        </S.Row>
      </S.ColumnRight>
    </S.Container>
  )
}
export { Home }

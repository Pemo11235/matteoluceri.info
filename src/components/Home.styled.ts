import {
  Avatar,
  Container as ContainerBase,
  styled,
  Typography,
  Button,
} from '@mui/material'

const Container = styled(ContainerBase)`
  min-width: 100%;
  min-height: 100%;
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
  width: 50%;
  margin-left: 10%;
  justify-content: flex-end;
  align-items: flex-end;

  @media (min-width: 0px) and (max-width: 599px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    max-height: 50%;
    width: 80%;
  }
`
const ColumnRight = styled(Column)`
  width: 50%;
  margin-left: 2%;
  margin-right: 20%;
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
    margin-right: 0;
    transform: scale(0.8);
  }

  @media (min-width: 600px) and (max-width: 799px) {
    transform: scale(0.7);
    margin-right: 0;
  }

  @media (min-width: 800px) {
    transform: scale(1.05);
  }
`
type ExtraProp = {
  component: string
}
const GreetingTypography = styled(Typography)<ExtraProp>`
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
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0 0;

  @media (min-width: 0px) and (max-width: 599px) {
    justify-content: center;
  }
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
  font-size: 1.2em;

  :first-child {
    margin-left: 0;
  }

  :hover {
    background-color: white;
  }

  @media (min-width: 0px) and (max-width: 449px) {
    width: 80px;
    height: 80px;
    font-size: 0.8em;
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

export {
  Container,
  ColumnLeft,
  ColumnRight,
  AvatarStyled,
  GreetingTypography,
  TextTypography,
  Row,
  ButtonCircle,
}

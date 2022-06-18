import { Box as BoxBase, Typography, Container, Button } from '@mui/material'
import styled from 'styled-components'

const Box = styled(BoxBase)`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  margin: 10% 0;
  overflow: hidden;
  align-items: center;
  width: 90%;

  @media (max-width: 500px) {
    padding: 0 0 0 5%;
  }
`

type ExtraProp = {
  component: string
}
const Title = styled(Typography)<ExtraProp>`
  font-weight: 700;
  text-align: left;
  width: 100%;

  &.moves {
    animation-name: move;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
  }

  @keyframes move {
    0% {
      transform: translateX(+100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`

const ProjectsSection = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 3% 0;
  width: 100%;
`
const ProjectRow = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
  margin: 6em 0 0 0;
  padding: 1em 0 1em 1em;

  :first-child {
    margin: 0 0 0 0;
  }

  @media (max-width: 699px) {
    flex-direction: column;
    padding: 0 0 2em 0;
    border-bottom: 1px solid #e0e0e0;
  }
`

const LeftSection = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0;
  padding: 0 10% 0 0;
  border-right: 1px solid #e0e0e0;

  @media (max-width: 799px) {
    width: fit-content;
    padding: 0;
  }

  &.moves {
    animation-name: move;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 1.2s;
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

const RightSection = styled(LeftSection)`
  width: 40%;
  padding: 0;

  @media (max-width: 799px) {
    width: 100%;
    border-right: none;
    align-items: center;
  }
`

const ProjectTitle = styled(Typography)<ExtraProp>`
  font-weight: 700;
  width: 100%;
  margin: 0;
`

const Image = styled('img')`
  max-width: 30em;
  min-width: 30em;
  max-height: 21em;
  min-height: 21em;
  object-fit: cover;
`

const Description = styled(Typography)<ExtraProp>`
  font-weight: 200;
  text-align: left;
  padding: 10px 0 0 0;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 0.9rem;
    width: fit-content;
    letter-spacing: -0.05em;
  }
`

const LinkSection = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin: 1em 0;
  padding: 0;
`

type IconButtonProps = {
  target: string
}
const IconButton = styled(Button)<IconButtonProps>`
  padding: 0;
  margin: 0;
  color: #232323;
`
export {
  Box,
  Title,
  ProjectsSection,
  ProjectRow,
  LeftSection,
  RightSection,
  ProjectTitle,
  Image,
  Description,
  LinkSection,
  IconButton,
}

import {
  Box as BoxBase,
  AppBar as AppBarBase,
  Typography,
  Button,
  Divider,
} from '@mui/material'
import styled from 'styled-components'

type ExtraProp = {
  component: string
  $shortJobRole?: string
}

const AppBar = styled(AppBarBase)`
  background-color: #f3f3f3;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  position: fixed;
  right: auto;
  max-width: 100%;
`

const NameTypography = styled(Typography)<ExtraProp>`
  font-weight: 700;
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
      font-size: 0.7em;
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;

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
  @media (min-width: 0px) and (max-width: 799px) {
    display: none;
  }
`

type ButtonHeaderProps = {
  $color?: string
  $isActive?: boolean
}
const ButtonHeader = styled(Button)<ButtonHeaderProps>`
  color: #232323;
  font-weight: 400;
  padding: 20px;
  font-size: 1em;

  &:hover {
    color: ${({ $color }) => $color};
    background-color: #f3f3f3;
  }

  @media (min-width: 0px) and (max-width: 799px) {
    display: none;
  }
`

const DividerButtonHeader = styled(Divider)`
  @media (min-width: 0px) and (max-width: 799px) {
    display: none;
  }
`

export {
  AppBar,
  NameTypography,
  JobRoleTypography,
  ButtonRow,
  ButtonHeader,
  DividerButtonHeader,
}

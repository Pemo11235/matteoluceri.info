import styled from 'styled-components'

import {
  Box as BoxBase,
  Divider as DividerBase,
  Typography,
  IconButton as IconButtonBase,
  Button,
} from '@mui/material'
22
const Footer = styled('footer')`
  position: relative;
  bottom: 0;
  width: 100%;
  height: max-content;
  padding: 5% 0 0 0;

  &.popup {
    animation: pop 1s ease-in-out;
    animation-iteration-count: 1;
  }

  @keyframes pop {
    0% {
      transform: translateY(-150%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @media (min-height: 900px) {
    position: fixed;
  }
`
const Divider = styled(DividerBase)`
  min-width: 70%;
`
const Box = styled(BoxBase)`
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 0px) and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 0 5%;
  }
`
type ColumnExtraType = {
  $hide600?: boolean
}

const Column = styled('div')<ColumnExtraType>`
  display: flex;
  padding: 2% 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  height: 100%;

  ${(props) =>
    props.$hide600 &&
    `@media (min-width: 0px) and (max-width: 599px) {
    display: none;
  }`}
`

const Label = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  color: #232323;
  text-align: left;
  font-family: monospace;
  padding: 10px 0 0 0;
`
const Value = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 400;
  color: #232323;
  text-align: left;
  font-family: monospace;
  line-height: 1;
`

const IconButton = styled(Button)`
  padding: 0;
  margin: 0;
  min-width: 40px;
  color: #232323;
`

export { Footer, Box, Divider, Column, Label, Value, IconButton }

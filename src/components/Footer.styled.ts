import styled from 'styled-components'

import {
  Box as BoxBase,
  Divider as DividerBase,
  Typography,
  IconButton as IconButtonBase,
  Button,
} from '@mui/material'
import { ArrowDropUp } from '@mui/icons-material'
interface FooterProps {
  $isOpen: boolean
}

const Footer = styled('footer')<FooterProps>`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  bottom: -9.5em;
  position: fixed;
  z-index: 1100;
  transition: 1s;
  width: 100%;
  height: 13em;
  cursor: pointer;
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 20%),
    0px -4px 5px 0px rgb(0 0 0 / 14%), 0px -1px 10px 0px rgb(0 0 0 / 12%);
  &.open {
    transform: translateY(-6em);
  }

  &.closed {
    transform: translateY(12em);
  }

  @media (min-width: 0px) and (max-width: 500px) {
    &.open {
      transform: translateY(-11em);
    }
  }
`
const Divider = styled(DividerBase)`
  background-color: transparent;
  z-index: 1200;
`
type ExtraBoxProps = {
  $isOpen: boolean
}

const Box = styled(BoxBase)<ExtraBoxProps>`
  background-color: #f3f3f3;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  ${({ $isOpen }) => ($isOpen ? `opacity: 1;` : `opacity: 0;`)}

  @media (min-width: 0px) and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 0 6%;
  }
`
type ColumnExtraType = {
  $hide600?: boolean
}

const Column = styled('div')<ColumnExtraType>`
  display: flex;
  padding: 1% 0;
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

  .visible {
    opacity: 1;
  }
  .hidden {
    opacity: 0;
  }
`

const Label = styled(Typography)`
  font-size: 1rem;</S.Divider>
  font-weight: bold;
  color: #232323;
  text-align: left;

  padding: 10px 0 0 0;
`
const Value = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 400;
  color: #232323;
  text-align: left;

  line-height: 1;
`
type IconButtonProps = {
  target: string
  $type?: 'linkedin' | 'github'
}
const IconButton = styled(Button)<IconButtonProps>`
  padding: 0;
  margin: 0;
  min-width: 40px;
  color: #232323;

  ${({ $type }) =>
    $type === 'github' &&
    `
  &:hover {
    color: #f3f3f3;
    background-color: #232323;
  }`}

  ${({ $type }) =>
    $type === 'linkedin' &&
    `
    &:hover {
      color: white;
      background-color: #0A66C2;
    }`}
}
`

const ArrowUp = styled(ArrowDropUp)<FooterProps>`
  color: #232323;
  width: 100%;
  height: 2em;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg) ' : '')};

  &.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
  }

  :hover {
    cursor: pointer;
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
export { Footer, Box, Divider, Column, Label, Value, IconButton, ArrowUp }

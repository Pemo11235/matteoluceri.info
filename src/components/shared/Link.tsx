import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: #232323;
  margin: 0 10px 0 0;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #232323;
  }
`

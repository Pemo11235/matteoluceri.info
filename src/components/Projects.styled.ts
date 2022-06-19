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
  padding: 0 0 0 20px;

  @media (max-width: 999px) {
    padding: 0;
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
  padding: 1em 0 1em 20px;

  :first-child {
    margin: 0 0 0 0;
  }

  @media (max-width: 999px) {
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

  @media (max-width: 1300px) {
    padding: 0 5% 0 0;
    width: 50%;
  }

  @media (max-width: 999px) {
    width: fit-content;
    padding: 0;
  }
`

const RightSection = styled(LeftSection)`
  width: 40%;
  padding: 0;

  @media (max-width: 999px) {
    width: 100%;
    align-items: center;
  }
`

const ProjectTitle = styled(Typography)<ExtraProp>`
  font-weight: 700;
  width: 100%;
  margin: 0;
`

const Image = styled('img')`
  width: 80%
  height: 350px;
  object-fit: cover;
  border-radius: 25px;
  -webkit-box-shadow: 2px 6px 21px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 2px 6px 21px -4px rgba(0, 0, 0, 0.74);
  cursor: pointer;

  @media (max-width: 999px) {
    height: 250px;
    width: fit-content;
  }

  @media (max-width: 700px) {
    height: 200px;
  }

  @media (max-width: 400px) {
    width: fit-content;
    height: 150px;
  }
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

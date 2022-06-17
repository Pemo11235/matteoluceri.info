import {
  Box as BoxBase,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material'
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
  font-family: monospace;
  font-weight: 700;
  text-align: left;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

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
const ResumeSection = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 3% 0;
  width: 100%;
`

const LeftSection = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0;
  padding: 0;
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
  width: 70%;

  @media (max-width: 799px) {
    width: 100%;
    border-right: none;
  }
`

const SectionTitle = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 700;
  width: 100%;
  margin: 0;

  @media (min-width: 500px) and (max-width: 799px) {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  @media (max-width: 499px) {
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: 1rem;
  }
`

const RightSectionItem = styled(Container)`
  display: flex;
  flex-direction: row;
  margin: 0;

  @media (max-width: 500px) {
    flex-direction: column;
    border-left: none;
    width: 100%;
    box-shadow: inset 0px -42px 50px -30px rgba(0, 0, 0, 0.06);
    padding: 1em 0 0 1em;
  }
`
const SubSectionRow = styled(Container)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  width: 30%;
  min-width: 100px;
  padding: 0;
  margin: 0 40px 0 0;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
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
const SubSectionColumn = styled(SubSectionRow)`
  flex-direction: column;
  width: 100%;
  max-width: 100%;

  @media (max-width: 500px) {
    max-width: fit-content;
  }
`

const Period = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 400;
  letter-spacing: -0.05em;
  font-size: 0.9rem;

  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`
type InfoTitleProp = {
  component: string
}
const InfoTitle = styled(Typography)<InfoTitleProp>`
  font-family: monospace;
  font-weight: 700;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    letter-spacing: -0.05em;
    white-space: normal;
  }
`

const Company = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 200;
  letter-spacing: -0.15em;
  @media (max-width: 1100px) {
    font-size: 0.8rem;
  }
`
const Description = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 200;
  text-align: left;
  padding: 10px 0 0 10px;
  border-left: 1px solid #e0e0e0;
  width: 100%;
  margin: 0 0 10px 0;
  line-height: 0.9;

  @media (max-width: 500px) {
    font-size: 0.9rem;
    width: fit-content;
    line-height: 0.8;
  }
`

const TitleRow = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`

const DownloadButton = styled(Button)`
  font-family: monospace;
  color: #232323;
  padding: 5px 10px 0 10px;
  background-color: #e0e0e0;
  border-radius: 20px;
  border: 1px solid #232323;
  font-weight: 700;
  font-size: 0.7rem;
  width: max-content;

  &:hover {
    background-color: white;
  }
`

const AccordionSummaryStyled = styled(AccordionSummary)`
  background-color: #f3f3f3;
  font-family: monospace;
  font-weight: 700;
  margin: 0;
  padding: 0;
`
const AccordionDetailsStyled = styled(AccordionDetails)`
  background-color: #f3f3f3;
  font-family: monospace;
  font-weight: 400;
`

const AccordionSummaryTypo = styled(Typography)`
  font-family: monospace;
  padding: 10px 0 0 0;
  margin: 0;
`

const AccordionDescription = styled(Accordion)`
  border-bottom: 1px solid #e0e0e0;
  padding: 0;
  margin: 0;
  box-shadow: none;
  width: 100%;

  @media (min-width: 499px) {
    display: none;
  }
`
export {
  Box,
  Title,
  ResumeSection,
  LeftSection,
  RightSection,
  SectionTitle,
  RightSectionItem,
  SubSectionRow,
  SubSectionColumn,
  Period,
  InfoTitle,
  Company,
  Description,
  DownloadButton,
  TitleRow,
  AccordionDescription,
  AccordionSummaryTypo,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
}

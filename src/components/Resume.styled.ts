import {
  Box as BoxBase,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import styled from 'styled-components'

const Box = styled(BoxBase)`
  display: flex;
  flex-direction: column;
  padding: 0 2%;
  margin: 10% 0;
`
type ExtraProp = {
  component: string
}
const Title = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
const ResumeSection = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 5% 0;
`

const LeftSection = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0;

  @media (max-width: 699px) {
    width: fit-content;
  }
`

const RightSection = styled(LeftSection)`
  width: max-content;
`

const SectionTitle = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 700;
  width: 100%;
  margin: 0;

  @media (min-width: 0px) and (max-width: 799px) {
    writing-mode: vertical-lr;
    text-orientation: upright;

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
`

const RightSectionItem = styled(Container)`
  display: flex;
  flex-direction: row;
  margin: 0;
  border-left: 1px solid #e0e0e0;

  @media (max-width: 500px) {
    flex-direction: column;
    border-left: none;
    border-bottom: 1px solid #e0e0e0;
    max-width: 70%;
  }
`
const SubSectionRow = styled(Container)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  max-width: 30%;
  padding: 0;
  margin: 0 40px 0 0;

  @media (max-width: 500px) {
    max-width: 100%;
    justify-content: flex-start;
  }
`
const SubSectionColumn = styled(SubSectionRow)`
  flex-direction: column;
  max-width: 70%;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`

const Period = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 400;

  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`
type InfoTitleProp = {
  component: string
  $company: string
}
const InfoTitle = styled(Typography)<InfoTitleProp>`
  font-family: monospace;
  font-weight: 700;
  width: 100%;
  justify-content: space-between;
  white-space: nowrap;

  :after {
    color: #232323;
    content: '${(props) => props.$company}';
    font-weight: 200;
    white-space: nowrap;
    margin: 10px;
    padding: 0 10px;
  }

  @media (min-width: 501px) and (max-width: 1100px) {
    font-size: 1rem;
    :after {
      white-space: normal;
      font-size: 0.8em;
    }
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    :after {
      display: none;
    }
  }
`
const Description = styled(Typography)<ExtraProp>`
  font-family: monospace;
  font-weight: 400;
  text-align: left;
  padding: 10px 0 0 10px;
  border-left: 1px solid #e0e0e0;
  width: 100%;
  margin: 0 0 10px 0;

  @media (max-width: 500px) {
    display: none;
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
  Description,
  AccordionDescription,
  AccordionSummaryTypo,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
}

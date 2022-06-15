import { ArrowRight, ExpandMoreOutlined } from '@mui/icons-material'
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import * as S from './Resume.styled'

function Resume() {
  return (
    <S.Box>
      <S.Title variant='h3' component='h1'>
        Resume
      </S.Title>
      <S.ResumeSection>
        <S.LeftSection>
          <S.SectionTitle variant='h5' component='h2'>
            Work Experience
          </S.SectionTitle>
        </S.LeftSection>
        <S.RightSection>
          <SectionItem
            period={{ start: '2019', end: 'Present' }}
            jobTitle='Front-end Developer'
            company='Center for Digital Innovation'
            description='I worked on a team of developers to build a new website for the Center for Digital Innovation. I spearheaded the development of the website, oversaw the development of the front-end, oversaw the development of the back-end, and oversaw the development of the database.'
          />
          <SectionItem
            period={{ start: '2019', end: 'Present' }}
            jobTitle='Front-end Developer'
            company='Center for Digital Innovation'
            description='I worked on a team of developers to build a new website for the Center for Digital Innovation. I spearheaded the development of the website, oversaw the development of the front-end, oversaw the development of the back-end, and oversaw the development of the database.'
          />
          <SectionItem
            period={{ start: '2019', end: 'Present' }}
            jobTitle='Front-end Developer'
            company='Center for Digital Innovation'
            description='I worked on a team of developers to build a new website for the Center for Digital Innovation. I spearheaded the development of the website, oversaw the development of the front-end, oversaw the development of the back-end, and oversaw the development of the database.'
          />
        </S.RightSection>
      </S.ResumeSection>
    </S.Box>
  )
}

interface SectionItemProps {
  period: {
    start: string
    end: string
  }
  jobTitle: string
  company: string
  description: string
}
const SectionItem = ({
  period,
  jobTitle,
  company,
  description,
}: SectionItemProps) => (
  <S.RightSectionItem>
    <S.SubSectionRow>
      <S.Period variant='body1' component='div'>
        {period.start} - {period.end}
      </S.Period>
    </S.SubSectionRow>
    <S.SubSectionColumn>
      <S.InfoTitle variant='body1' component='h3' $company={company}>
        {jobTitle}
      </S.InfoTitle>
      <S.Description variant='body1' component='p'>
        {description}
      </S.Description>
      <S.AccordionDescription>
        <S.AccordionSummaryStyled expandIcon={<ExpandMoreOutlined />}>
          <S.AccordionSummaryTypo variant='body1'>
            Details
          </S.AccordionSummaryTypo>
        </S.AccordionSummaryStyled>
        <S.AccordionDetailsStyled>{description}</S.AccordionDetailsStyled>
      </S.AccordionDescription>
    </S.SubSectionColumn>
  </S.RightSectionItem>
)

export default Resume

import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import * as S from './Resume.styled'
import { Link } from './shared/Link'
interface ResumeProps {
  resumeCopy: {
    title: string
    section1: Section
    section2: Section
    section3: Section
  }
}

interface Section {
  title: string
  items: SectionItemProps[]
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
function Resume({
  resumeCopy: {
    title,
    section1: { title: sectionTitle, items: sectionItems },
    section2: { title: sectionTitle2, items: sectionItems2 },
    section3: { title: sectionTitle3, items: sectionItems3 },
  },
}: ResumeProps) {
  const id = React.useId()
  return (
    <S.Box>
      <S.TitleRow>
        <S.Title variant='h3' component='h1' className='moves'>
          {title}
        </S.Title>
        <Link
          to={'/public/files/CV_Matteo_Luceri-1.pdf'}
          target='_blank'
          download>
          <S.DownloadButton variant='contained'>
            Download PDF
            <ArrowDownward
              style={{
                width: '0.7em',
                height: '0.7em',
                padding: 0,
              }}
            />
          </S.DownloadButton>
        </Link>
      </S.TitleRow>
      <S.ResumeSection>
        <S.LeftSection className='moves'>
          <S.SectionTitle variant='h5' component='h2'>
            {sectionTitle}
          </S.SectionTitle>
        </S.LeftSection>
        <S.RightSection>
          {sectionItems.map(
            (
              { period: { start, end }, jobTitle, company, description },
              index
            ) => (
              <SectionItem
                key={`section-${id}-${index}-${jobTitle}`}
                period={{ start, end }}
                jobTitle={jobTitle}
                company={company}
                description={description}
              />
            )
          )}
        </S.RightSection>
      </S.ResumeSection>
      <S.ResumeSection>
        <S.LeftSection className='moves'>
          <S.SectionTitle variant='h5' component='h2'>
            {sectionTitle2}
          </S.SectionTitle>
        </S.LeftSection>
        <S.RightSection>
          {sectionItems2.map(
            ({ period: { start, end }, jobTitle, company, description }) => (
              <SectionItem
                key={`section-${id}-${company}-${jobTitle}`}
                period={{ start, end }}
                jobTitle={jobTitle}
                company={company}
                description={description}
              />
            )
          )}
        </S.RightSection>
      </S.ResumeSection>
      <S.ResumeSection>
        <S.LeftSection className='moves'>
          <S.SectionTitle variant='h5' component='h2'>
            {sectionTitle3}
          </S.SectionTitle>
        </S.LeftSection>
        <S.RightSection>
          {sectionItems3.map(
            ({ period: { start, end }, jobTitle, company, description }) => (
              <SectionItem
                key={`section-${id}-${company}-${jobTitle}`}
                period={{ start, end }}
                jobTitle={jobTitle}
                company={company}
                description={description}
              />
            )
          )}
        </S.RightSection>
      </S.ResumeSection>
    </S.Box>
  )
}

const SectionItem = ({
  period,
  jobTitle,
  company,
  description,
}: SectionItemProps) => (
  <S.RightSectionItem>
    <S.SubSectionRow className='moves'>
      <S.Period variant='body1' component='div'>
        {period.start} {period.start !== '' ? '-' : '‣'}
        {period.start.length > 5 ? <br /> : '  '}
        {period.end}
      </S.Period>
    </S.SubSectionRow>
    <S.SubSectionColumn className='moves'>
      <S.InfoTitle variant='body1' component='h3'>
        {jobTitle}
      </S.InfoTitle>
      <S.Company variant='body1' component='h4'>
        {company}
      </S.Company>
      <S.Description variant='body1' component='p'>
        {description}
      </S.Description>
    </S.SubSectionColumn>
  </S.RightSectionItem>
)

export default Resume

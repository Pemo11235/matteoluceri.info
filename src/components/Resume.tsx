import { ArrowDownward, Favorite, QuestionMark } from '@mui/icons-material'
import React from 'react'
import * as S from './Resume.styled'
import { FadeTransition } from './shared/Transitions'

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
  description: string | string[]
  tooltipDescription?: string[]
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
      <FadeTransition>
        <S.TitleRow>
          <S.Title
            variant='h3'
            component='h1'
          >
            {title}
          </S.Title>
          <a
            href={
              'https://drive.google.com/file/d/1Ss_xerYFLF9Igh0LZU8ipTIOffz2014H/view?usp=share_link'
            }
            rel='noopener noreferrer'
            target='_blank'
            style={{ width: '30%' }}
            download
          >
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
          </a>
        </S.TitleRow>
      </FadeTransition>
      <S.ResumeSection>
        <FadeTransition>
          <S.LeftSection>
            <S.SectionTitle
              variant='h5'
              component='h2'
            >
              {sectionTitle}
            </S.SectionTitle>
          </S.LeftSection>
        </FadeTransition>
        <S.RightSection>
          {sectionItems.map(
            (
              { period: { start, end }, jobTitle, company, description },
              index,
            ) => (
              <SectionItem
                key={`section-${id}-${index}-${jobTitle}`}
                period={{ start, end }}
                jobTitle={jobTitle}
                company={company}
                description={description}
              />
            ),
          )}
        </S.RightSection>
      </S.ResumeSection>
      <S.ResumeSection>
        <FadeTransition>
          <S.LeftSection>
            <S.SectionTitle
              variant='h5'
              component='h2'
            >
              {sectionTitle2}
            </S.SectionTitle>
          </S.LeftSection>
        </FadeTransition>
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
            ),
          )}
        </S.RightSection>
      </S.ResumeSection>
      <S.ResumeSection>
        <FadeTransition>
          <S.LeftSection>
            <S.SectionTitle
              variant='h5'
              component='h2'
            >
              {sectionTitle3}
            </S.SectionTitle>
          </S.LeftSection>
        </FadeTransition>
        <S.RightSection>
          {sectionItems3.map(
            ({
              period: { start, end },
              jobTitle,
              company,
              description,
              tooltipDescription,
            }) => (
              <SectionItem
                key={`section-${id}-${company}-${jobTitle}`}
                period={{ start, end }}
                jobTitle={jobTitle}
                company={company}
                description={description}
                tooltipDescription={tooltipDescription}
              />
            ),
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
  tooltipDescription,
}: SectionItemProps) => (
  <S.RightSectionItem>
    <FadeTransition>
      <S.SubSectionRow>
        <S.Period
          variant='body1'
          component='div'
        >
          {period.start} {period.start !== '' ? '-' : '‣'}
          {period.start.length > 5 ? <br /> : '  '}
          {period.end}
        </S.Period>
      </S.SubSectionRow>
    </FadeTransition>
    <FadeTransition>
      <S.SubSectionColumn>
        <S.InfoTitle
          variant='body1'
          component='h3'
        >
          {jobTitle}
        </S.InfoTitle>
        <S.Company
          variant='body1'
          component='h4'
        >
          {company}
        </S.Company>
        {Array.isArray(description) ? (
          <S.ListItem>
            {description.map((chip, index) => (
              <S.Tooltip
                disableFocusListener
                leaveTouchDelay={3000}
                enterTouchDelay={0}
                arrow
                title={
                  chip.endsWith('?') && tooltipDescription
                    ? tooltipDescription[index]
                    : ''
                }
                key={`${index}-${chip}`}
              >
                <S.Chip
                  label={
                    chip.endsWith('*') || chip.endsWith('?')
                      ? chip.slice(0, -1)
                      : chip
                  }
                  key={index}
                  icon={
                    chip.endsWith('*') ? <Favorite fontSize='small' /> : <></>
                  }
                  onDelete={() => {}}
                  deleteIcon={
                    chip.endsWith('?') ? (
                      <QuestionMark fontSize='small' />
                    ) : (
                      <></>
                    )
                  }
                />
              </S.Tooltip>
            ))}
          </S.ListItem>
        ) : (
          <S.Description
            variant='body1'
            component='p'
          >
            {description}
          </S.Description>
        )}
      </S.SubSectionColumn>
    </FadeTransition>
  </S.RightSectionItem>
)

export { Resume }

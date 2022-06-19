import GitHub from '@mui/icons-material/GitHub'
import { Fade, Slide, Zoom } from '@mui/material'
import React from 'react'
import * as S from './Projects.styled'
import { Link } from './shared/Link'
import { FadeTransition } from './shared/Transitions'

interface ProjectsProps {
  projectsCopy: {
    title: string
    projects: ProjectProps[]
  }
}

interface ProjectProps {
  id: string
  projectTitle: string
  description: string
  linkGithub: string
  imageSrc: string
}
function Projects({ projectsCopy: { title, projects } }: ProjectsProps) {
  return (
    <S.Box>
      <S.ProjectsSection>
        <FadeTransition>
          <S.Title variant='h3' component='h1'>
            {title}
          </S.Title>
        </FadeTransition>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </S.ProjectsSection>
    </S.Box>
  )
}

type RowProps = {
  project: ProjectProps
}
const Project = ({
  project: { id, projectTitle, description, linkGithub, imageSrc },
}: RowProps) => {
  const onImageClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(imageSrc, '_blank')
  }
  return (
    <S.ProjectRow>
      <FadeTransition>
        <S.LeftSection>
          <S.ProjectTitle variant='h5' component='h2'>
            {projectTitle}
          </S.ProjectTitle>
          <S.Description variant='body1' component='p'>
            {description}
          </S.Description>
          {linkGithub !== '' && (
            <S.LinkSection>
              <S.IconButton variant='text' href={linkGithub} target='_blank'>
                <GitHub
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                  }}
                />
              </S.IconButton>
            </S.LinkSection>
          )}
        </S.LeftSection>
      </FadeTransition>
      <FadeTransition>
        <S.RightSection>
          <S.Image src={imageSrc} onClick={onImageClick} />
        </S.RightSection>
      </FadeTransition>
    </S.ProjectRow>
  )
}

export { Projects }

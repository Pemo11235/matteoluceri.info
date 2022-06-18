import GitHub from '@mui/icons-material/GitHub'
import * as S from './Project.styled'
import { Link } from './shared/Link'

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
      <S.Title variant='h3' component='h1' className='moves'>
        {title}
      </S.Title>
      <S.ProjectsSection>
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
  return (
    <S.ProjectRow>
      <S.LeftSection className='moves'>
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
      <S.RightSection className='moves'>
        <S.Image src={imageSrc} />
      </S.RightSection>
    </S.ProjectRow>
  )
}

export { Projects }

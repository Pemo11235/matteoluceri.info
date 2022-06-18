import { Fade } from '@mui/material'

interface FadeProps {
  children: React.ReactElement
  timeout?: number
  inCondition?: boolean
}
const FadeTransition = ({ children, timeout, inCondition }: FadeProps) => {
  return (
    <Fade
      timeout={timeout || 2000}
      in={inCondition || true}
      mountOnEnter
      unmountOnExit>
      {children}
    </Fade>
  )
}

export { FadeTransition }

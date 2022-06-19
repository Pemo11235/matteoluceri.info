import { Fade, FadeProps } from '@mui/material'

interface FadeTransitionProps extends FadeProps {
  children: React.ReactElement
}
const FadeTransition = ({ children, ...props }: FadeTransitionProps) => {
  return (
    <Fade timeout={props.timeout || 2000} in={props.in || true} {...props}>
      {children}
    </Fade>
  )
}

export { FadeTransition }

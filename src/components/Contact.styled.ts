import {
  Box as BoxBase,
  Typography,
  Container,
  Button,
  Input as InputBase,
  TextField as TextFieldBase,
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
  font-weight: 700;
  text-align: left;
  width: 100%;
  padding: 0 0 0 20px;

  @media (max-width: 999px) {
    padding: 0;
  }
`

const Subtitle = styled(Typography)<ExtraProp>`
  font-weight: 700;
  width: 100%;
  margin: 0;
  text-align: center;
`
const ContactInfo = styled(Subtitle)`
  font-weight: 400;
  text-align: left;

  margin: 1rem;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`

const ContactSection = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 3% 0;
  width: 100%;
`

const ContentRow = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: min-content;
  margin: 1em 0 0 0;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`
const LeftSection = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0;
  padding: 0 10% 0 0;

  @media (max-width: 1300px) {
    padding: 0 5% 0 0;
    width: 30%;
  }

  @media (max-width: 999px) {
    flex-direction: row;
    width: 100%;
    padding: 0;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const RightSection = styled(LeftSection)`
  width: 60%;
  padding: 0;
  margin: 1em 0 0 0;

  @media (max-width: 999px) {
    width: 100%;
    align-items: center;
    margin: 2em 0;
  }
`

const FormSection = styled('form')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`

const FormRow = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: min-content;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`

const Form50Row = styled(FormRow)`
  width: 50%;
  margin: 0 1em;

  @media (max-width: 500px) {
    width: 100%;
    margin: 1em 0 0 0;
  }
`
const Form70Row = styled(FormRow)`
  width: 70%;
  margin: 0 1em;

  @media (max-width: 500px) {
    width: 100%;
  }
`
const Form30Row = styled(FormRow)`
  width: 30%;
  margin: 0 1em;

  @media (max-width: 500px) {
    width: 100%;
    margin: 1em 0 0 0;
    align-items: flex-end;
  }
`

const TextField = styled(TextFieldBase)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#80D8DA',
    textTransform: 'uppercase',
  },
  '& label.MuiFormLabel-filled': {
    color: '#80D8DA',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#80D8DA',
  },
  '& .MuiOutlinedInput-root': {
    '& input:valid + fieldset': {
      borderColor: '#80D8DA',
      borderWidth: 2,
    },
    '& input:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
      borderColor: '#80D8DA',
    },
    '& textarea:valid + fieldset': {
      outline: 'none',
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
      borderColor: '#80D8DA !important',
    },
    '&.Mui-completed ': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
      borderColor: '#80D8DA',
    },
    '& fieldset': {
      borderLeftWidth: 6,
    },
    '&:hover fieldset': {
      borderColor: '#80D8DA',
      borderLeftWidth: 6,
    },
    '&:visited fieldset': {
      borderColor: '#80D8DA',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#80D8DA',
    },
    '&.Mui-error fieldset ': {
      borderColor: 'red',
    },
  },
  '@media (max-width: 500px)': {
    margin: '10px 0 0 0',
  },
})

const TextArea = styled(TextField)`
  @media (max-width: 500px) {
    max-height: 100px;
  }
`
const Input = styled(InputBase)`
  width: 100%;
`
const ButtonCircle = styled(Button)`
  background-color: #80d8da;
  border: 1px solid #232323;
  color: #232323;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 30px;
  margin: 0 0 0 10px;
  text-transform: none;
  font-weight: 700;
  font-size: 1.2em;

  :hover {
    background-color: white;
  }

  @media (min-width: 0px) and (max-width: 449px) {
    width: 100px;
    height: 100px;
    font-size: 0.8em;
  }

  @media (min-width: 450px) and (max-width: 999px) {
    width: 120px;
    height: 120px;
  }
  @media (min-width: 1000px) {
    width: 130px;
    height: 130px;
  }
`

export {
  Box,
  Title,
  Subtitle,
  ContactInfo,
  ContactSection,
  ContentRow,
  LeftSection,
  RightSection,
  FormSection,
  FormRow,
  Form50Row,
  Form70Row,
  Form30Row,
  TextField,
  TextArea,
  Input,
  ButtonCircle,
}

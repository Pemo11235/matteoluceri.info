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
  text-align: left;
`
const ContactInfo = styled(Subtitle)`
  margin: 4em 0 0 0;
  font-weight: 400;
  text-align: left;
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
  margin: 4em 0 0 0;

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
    width: fit-content;
    padding: 0;
  }
`

const RightSection = styled(LeftSection)`
  width: 60%;
  padding: 0;

  @media (max-width: 999px) {
    width: 100%;
    align-items: center;
  }
`

const FormSection = styled(Container)`
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
`

const Form50Row = styled(FormRow)`
  width: 50%;
  margin: 0 1em;
`
const Form70Row = styled(FormRow)`
  width: 70%;
  margin: 0 1em;
`
const Form30Row = styled(FormRow)`
  width: 30%;
  margin: 0 1em;
`

const TextField = styled(TextFieldBase)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#80D8DA',
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
    '& input:invalid + fieldset': {},
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
  },
})

const TextArea = styled(TextField)`
  ${(props) =>
    props.value !== '' &&
    `
  `}
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
    width: 80px;
    height: 80px;
    font-size: 0.8em;
  }

  @media (min-width: 450px) and (max-width: 599px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 600px) and (max-width: 749px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 750px) and (max-width: 999px) {
    width: 100px;
    height: 100px;
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

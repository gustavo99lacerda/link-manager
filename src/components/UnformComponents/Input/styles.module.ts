import styled from 'styled-components'
import { Box, TextField, Typography } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

interface Props {
  margin?: string
  width?: string
}

export const Container = styled(Box) <Props>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};
`

export const ContainerErros = styled(Box)`
  display: flex;
  align-items: center;
`

export const TextoErro = styled(Typography)`
  &.MuiTypography-root {
    color: #BB0A30;
    margin: 0px 0px 0px 2px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    font-family: Poppins;
  }
`
export const IconeErro = styled(ErrorOutlineIcon)`
  &.MuiSvgIcon-root {
    color: #BB0A30;
    height: 20px;
    width: 20px;
  }
`
export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #4D5C6C;
    }
    &:hover fieldset {
      border-color: #4D5C6C;
    }
    &:focus-within fieldset {
      border-color: #043D94;
    }
    .MuiInputBase-input{
      color: #4D5C6C;
      font-size: 14px;
      font-weight: 300;
      height: 46px;
      padding: 0px 14px;
    }
  }

`

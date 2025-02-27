import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

export const ButtonAdicionar = styled(Button)`
  &.MuiButtonBase-root {
    color: #FFFFFF;
    background-color: #16825D;
    text-transform: none;
    height: 38px;
    width: 100%;
    margin: 32px 0px 0px 0px;
    border-radius: 4px;
  }
  &.Mui-disabled {
    background-color: #00BCF2;
    border: none;
  }
`

export const Topicos = styled.p`
  color: #35424F;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  margin: 24px auto 4px 0;
`

export const DialogTitle = styled.span<{ mediaquery: string }>`
  color: #16825D;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
`
export const DialogInfo = styled.span<{ mediaquery: string }>`
  color: #4D5C6C;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "16px" : "14px"};
  font-weight: ${props => props.mediaquery === "true" ? "500" : "300"};
  line-height: 120%;
  margin: ${props => props.mediaquery ==="true" ? "25px 0px 0px 0px" : "32px 0px 0px 0px"};
`

export const DivErro = styled.div`
  display: flex;
  width: 100%;
  color: #BB0A30;
  font-size: 12px;
  font-weight: 400;
  line-height: 120%;
  align-items: center;
`
export const IconeErro = styled(ErrorOutlineIcon)`
  &.MuiSvgIcon-root {
    color: #BB0A30;
    height: 20px;
    width: 20px;
  }
`
export const StyledInput = styled(TextField)`
  min-width: 100%;
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #4D5C6C;
    }
    &:hover fieldset {
      border-color: #4D5C6C;
    }
    &:focus-within fieldset {
      border-color: #16825D;
    }
  }
  .MuiInputBase-input{
    color: #4D5C6C;
    font-size: 14px;
    font-weight: 300;
    height: 46px;
    padding: 0px 14px;
  }
`

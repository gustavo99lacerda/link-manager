import { Button, Modal, TextField } from '@material-ui/core'
import styled from 'styled-components'
import { Form } from '@unform/web'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledForm = styled(Form) `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const Topicos = styled.p<{color: string}>`
  color: #35424F;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  margin: 24px auto 4px 0;
`

export const PreUrl = styled.p`
  color: #35424F;
  font-size: 16px;
  font-weight: 300;
  line-height: 120%;
  margin: 12px auto 4px 0;
  justify-content: space-between;
`
export const StyledInput = styled(TextField) <{mediaquery?: string, bordercolor?: string}> `
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${props => props.bordercolor};
    }
    &:focus-within fieldset {
      border-color: #16825D;
    }
    &:hover fieldset {
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
export const DivInputsUrl = styled.div<{mediaquery?: string}>`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const StyledButton = styled(Button)<{mediaquery?: string}> `
  &.MuiButton-root {
    background: transparent;
    padding: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #00BCF2;
  }
`
export const DialogTitle = styled.span<{mediaquery?: string}>`
  color: #16825D;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
`
export const DialogInfo = styled.span<{mediaquery?: string}>`
  color: #4D5C6C;
  text-align: center;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "16px" : "14px"};
  font-weight: ${props => props.mediaquery === "true" ? "500" : "300"};
  line-height: 120%;
  margin: ${props => props.mediaquery === "true" ? "25px 0px 0px 0px" : "32px 0px 0px 0px"};
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

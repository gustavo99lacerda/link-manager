import styled from 'styled-components'
import { Button, Modal } from '@material-ui/core'

export const StyledButton = styled(Button) <{ width?: string }>`
  &.MuiButton-root {
    min-width: ${props => props.width || "0"};
    background: transparent;
    padding: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #00BCF2;
  }
`
export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const QrRemoveTitle = styled.span<{ mediaquery: string }>`
  color: #043D94;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
`

export const QrRemoveInfo = styled.span<{ mediaquery: string }>`
  color: #4D5C6C;
  text-align: center;
  font-size:${props => props.mediaquery === "true" ? "16px" : "14px"};
  font-weight: ${props => props.mediaquery === "true" ? "500" : "300"};
  line-height: 120%;
  margin: ${props => props.mediaquery === "true" ? "25px 0px 42px 0px" : "32px 0px 32px 0px"};
`

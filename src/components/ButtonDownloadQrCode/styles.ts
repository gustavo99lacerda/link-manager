import styled from 'styled-components'
import { Button, Modal } from '@material-ui/core'

export const StyledButton = styled(Button) `
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
export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const QrCodeTitle = styled.span<{mediaquery: string}>`
  color: #043D94;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
`
export const QrCodeInfo = styled.span<{mediaquery: string}>`
  color: #4D5C6C;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "16px" : "14px"};
  font-weight: ${props => props.mediaquery === "true" ? "500" : "300"};
  line-height: 120%;
  margin: ${props => props.mediaquery === "true" ? "16px 0px 24px 0px" : "24px 0px 32px 0px"};
`
export const ImgBotaoQrCode = styled.img`
  margin: 0 8px 0 0;
`
export const DivQrCode = styled.div<{mediaquery: string}>`
  margin: ${props => props.mediaquery === "true" ? "0px 0px 40px 0px" : "0px 0px 32px 0px" };
`
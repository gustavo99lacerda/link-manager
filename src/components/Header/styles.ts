import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const HeaderComponent = styled.header<{mediaquery: string, pathname: string}>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: ${props => props.mediaquery === "true" ? "92px" : props.pathname === "/edicao-pagina" ? "68px" : "56px"};
  justify-content: space-between;
  padding: ${props => props.mediaquery === "true" ? "0px 86px 0px 86px" : "0rem 24px"};
  background: #FFFFFF;
  border-bottom: 1px solid ${props => props.pathname === "/" ? "transparent" : "#C6D9E3"};
`
export const StyledButton = styled(Button)`
  &.MuiButton-root {
    background: transparent;
    text-transform: none;
    min-width: 130px;
    min-height: 38px;
  }
`

export const StyledButtonLogo = styled(Button) <{ mediaquery: string }>`
  &.MuiButton-root {
    background: transparent;
    text-transform: none;
    width: ${props => props.mediaquery === "true" ? "150px" : "109px"};
  }
`
export const ButtonEntrar = styled(Button)`
  &.MuiButton-root {
    background: #043D94;
    border-radius: 4px;
    min-height: 38px;
    min-width: 78px;
    color: #FFFFFF;
    text-transform: none;
  }
`
export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 50px;
`
export const DivBotaoVoltar = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivComponente = styled.div<{ justifycontent: string }>`
  display: flex;
  width: auto;
  justify-content: ${props => props.justifycontent};`

export const Title = styled.span`
  color: #1F2933;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  `
export const BackButton = styled(Button)`
  &.MuiButton-root {
    justify-content: flex-start;
    padding: 6px 0;
  }
  .MuiSvgIcon-root {
    color: #1F2933;
  }
  .MuiButton-label{
    color:  #1F2933;
    font-size: 16px;
    font-weight: 500;
    text-transform: none;
  }
`

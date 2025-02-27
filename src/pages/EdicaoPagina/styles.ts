import { Button, Menu, Tab, Tabs } from '@material-ui/core'
import styled from 'styled-components'
import { Form } from '@unform/web'
import { ChromePicker } from 'react-color'

interface Props {
  desktopoumobile: "true" | "false" | string
  cordaborda?: string
  corbackground?: string
}

export const Body = styled.div<{ mediaquery: string }>`
  display: flex;
  flex-direction: ${props => props.mediaquery === "true" ? "row" : " column"};
  align-items:s center;
  width:100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
`

export const DivVoltar = styled.div`
  padding: 28px 24px 20px 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #C6D9E3;
  width: 100%;
`

export const BackButton = styled(Button)`
  .MuiButton-label{
    color:  #1F2933;
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
    text-transform: none;
  }
`
export const ButtonEstilo = styled(Button)`
  &.MuiButton-root{
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    min-width: 38px;
    margin-right: 8px;
  }
  &.MuiButton-root{
    width: min-content;
  }

`
export const NomePagina = styled.span<Props>`
  font-style: normal;
  font-weight: ${props => props.desktopoumobile === "true" ? "500" : "400"};
  font-size: ${props => props.desktopoumobile === "true" ? "1.25rem" : "1rem"};;
  line-height: 100%;
  color: #E86305;
  margin: 0 auto 0.5rem 0;
`

export const StyledTab = styled(Tab)`

  &.MuiTab-root[aria-selected="false"] {
    color: #1F2933;
    opacity: 1;
  }
  &.MuiTab-root[aria-selected="true"] {
    color: #16825D;
  }
  &.MuiTab-root{
    min-width: 50%;
  }
`

export const StyledTabs = styled(Tabs)`
  width: 100%;
  &.MuiTabs-root{
    margin-top: 14px;
    padding: 0px 24px;
  }
  .MuiTabs-indicator {
    background-color: #16825D;
  }
  &.MuiTab-root[aria-selected="true"] {
    color: #16825D;
  }
  &.MuiTab-root[aria-selected="false"] {
    color: #8794A5;
  }
`;

export const ContentLinksForm = styled.div<{ display: string }>`
  display: ${props => props.display};
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 24px;
`
export const ContentLinkslist = styled.div<{ display: string }>`
  display: ${props => props.display};
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0px 24px;
  `
export const ContentForm = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: min-content;
  overflow: auto;
`
export const TextoAviso = styled.span`
  color: #35424F;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 136%;
  margin: auto;
`
export const StyledForm = styled(Form) <{ display: string }>`
  display: ${props => props.display};
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 24px 0px 24px;
`
export const Topicos = styled.span<{ margin: string }>`
  color: #35424F;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  margin: ${props => props.margin};
`

export const DivInputs = styled.div<{ gap?: string, margin?: string }>`
  display: flex;
  width: 100%;
  height: auto;
  gap: ${props => props.gap};
  margin: ${props => props.margin};
`
export const ButtonPicker = styled(Button) <{ backgroundcolor: string }>`
  &.MuiButton-root{
    background-color: ${props => props.backgroundcolor};
    height: 46px;
    min-width: 46px;
    padding: 0px;
    border-radius: 4px;
    border: 1px solid #4D5C6C;
    margin-left: 8px;
  }
`
export const StyledMenu = styled(Menu)`
  .MuiList-padding{
    padding: 0px;
  }
`
export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  min-height: auto;
  gap: 8px;
  margin: 24px 0px 24px 0px;
`
export const StyledPicker = styled(ChromePicker)`
  .flexbox-fix{
    display: none;
  }
`
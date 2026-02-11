import { Button, IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div<{ mediaquery: string, backgroundcolor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.backgroundcolor};
  padding: ${props => props.mediaquery === "true" ? "28px 0px" : "24px 0px"};
  overflow: auto;
`

export const DivImage = styled.div<{ mediaquery: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  img {
    width: ${props => props.mediaquery === "true" ? "255px" : "185px"};
    height: ${props => props.mediaquery === "true" ? "255px" : "185px"};
    border-radius: 50%;
  }
`
export const SemFoto = styled.div<{ textcolor: string, background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  color: ${props => props.textcolor};

  span {
    font-size: 120px;
    font-weight: 500;
  }
`
export const BotaoVoltar = styled(IconButton)`
  &.MuiIconButton-root {
    padding: 0;
    background-color: #D9D9D9;
    height: 40px;
    width: 40px;
  }
  .MuiSvgIcon-root {
    color: #043D94;
  }
`
export const NomePagina = styled.h1<{ textcolor: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  color: ${props => props.textcolor};
  margin: 70px 0 80px 0;
`
export const ListaLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const ButtonsLinks = styled(Button) <{ textcolor: string, background: string, mediaquery: string }>`
  &.MuiButtonBase-root {
    border: 3px solid #000;
    background: ${props => props.background};
    color: #000;
    padding: 12px;
    box-shadow: 4px 4px 0 #000;
    transition: all 0.2s ease;
    width:  ${props => props.mediaquery === "true" ? "50%" : "80%"};
    height: 75px;
    margin-top: 25px;
    border-radius: 20px;
    color: ${props => props.textcolor};
    font-size: 20px;
  }
  &.MuiButtonBase-root:hover{
    box-shadow: 2px 2px 0 #000;
    transform: translate(0px, -10px);
    background: ${props => props.background};
  }
`

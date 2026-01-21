import { Button, IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div<{ mediaquery: string, backgroundcolor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.backgroundcolor};
  padding: ${props => props.mediaquery === "true" ? "28px 0px" : "24px 40px"};
`

export const DivImageButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  .espaco-branco {
    height: 100%;
    width: 30px;
  }

  img {
    width: 155px;
    height: 155px;
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
  overflow: auto;
`
export const ButtonsLinks = styled(Button) <{ textcolor: string, background: string }>`
  &.MuiButtonBase-root {
    border: 3px solid #000;
    background: #FFFFFF;
    color: #000;
    padding: 12px;
    box-shadow: 4px 4px 0 #000;
    transition: all 0.2s ease;
    width: 80%;
    height: 65px;
    margin-top: 25px;
    border-radius: 20px;
    color: ${props => props.textcolor};
    font-size: 20px;
  }
  &.MuiButtonBase-root:hover{
    box-shadow: 2px 2px 0 #000;
    transform: translate(5px, 5px);
    background: #FFFFFF;
  }
`

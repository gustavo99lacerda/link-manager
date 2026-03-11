import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div<{ mediaquery: string, backgroundcolor: string, background: string, orientacao?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  padding: ${props => props.mediaquery === "true" ? "28px 0px" : "24px 0px"};
  overflow: auto;

  &::before {
    content: '';        
    position: absolute; 
    background-image: url(${props => props.background});
    filter: blur(3px);
    inset: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${props => props.orientacao === 'retrato' ? 'cover' : 'contain'};
    z-index: 0;
   }

`

export const DivImage = styled.div<{ mediaquery: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: relative; 
  z-index: 1;  

  img {
    width: ${props => props.mediaquery === "true" ? "205px" : "205px"};
    height: ${props => props.mediaquery === "true" ? "205px" : "205px"};
    border-radius: 50%;
  }
`

export const NomePagina = styled.h1<{ textcolor: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  color: ${props => props.textcolor};
  margin: 70px 0 80px 0;
  position: relative; 
  z-index: 1;  
`
export const ListaLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative; 
  z-index: 1;  
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

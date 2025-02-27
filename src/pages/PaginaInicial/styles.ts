import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  overflow: auto;
`
export const DivItensConteudoUm = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: ${props => props.mediaquery === "true" ? "row" : "column"};
  align-items: center;
  width: 100%;
  padding: ${props => props.mediaquery === "true" ? "118px 127px 0px 112px" : "45px 24px 0 24px"};
`
export const DivItensConteudoDois = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const DivItensConteudoTres = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #FFEADB;
  padding: ${props => props.mediaquery === "true" ? "55px 113px 66px 113px" : "37px 24px"};
`
export const DivItensConteudoQuatro = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${props => props.mediaquery === "true" ? "115px 0px 120px 0px" : "40px 24px"};
`
export const DivTextosConteudoUm = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.mediaquery === "true" ? "flex-start" : "center"};
  width: 100%;
  text-align: ${props => props.mediaquery === "true" ? "flex-start" : "center"};

  h1 {
    color: #1F2933;
    font-size: 40px;
    font-weight: ${props => props.mediaquery === "true" ? "700" : "500"};
    line-height: 125%;
    letter-spacing: -0.4px;
    width: 100%;
    max-width: 488px;
    font-size: ${props => props.mediaquery === "true" ? "40px" : "20px"};
  }
  h2 {
    color: #35424F;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    max-width: 488px;
    width: 100%;
    margin: 26px 0px 32px 0px;
    font-size: ${props => props.mediaquery === "true" ? "24px" : "14px"};
  }

`
export const ButtonEntrar = styled(Button)<{mediaquery?: string}>`
  &.MuiButton-root {
    min-width: 93px;
    align-self: ${props => props.mediaquery === "true" ? "flex-start" : "center"};
    width: ${props => props.mediaquery === "true" ? "280px" : "183px"};
    text-transform: none;
    margin: 0px 0px 42px 0px;
  }
`
export const DivCelulares = styled.div<{mediaquery?: string}>`
  display: flex;
  align-items: center;
  gap: 31px;

  .celularMedio {
    margin: auto 0 0 0;
  }
`
export const TituloConteudoTres = styled.p<{mediaquery?: string}>`
  color: #1F2933;
  font-size: ${props => props.mediaquery === "true" ? "0 0 20px" : "0 0 28px"};
  font-weight: 500;
  line-height: 120%;
  margin: ${props => props.mediaquery === "true" ? "24px" : "20px"};
`
export const SubTituloConteudoTres = styled.h1<{mediaquery?: string}>`
  color: #1F2933;
  text-align: center;
  font-weight: 500;
  line-height: 120%;
  font-size: ${props => props.mediaquery === "true" ? "32px" : "16px"};
  margin: ${props => props.mediaquery === "true" ? "0 0 70px" : "0 0 40px"};
  width: ${props => props.mediaquery === "true" ? "50%" : "100%"};
`
export const ContentPassos = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: ${props => props.mediaquery === "true" ? "row" : "column"};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${props => props.mediaquery === "true" ? "94px" : "36px"};
`
export const DivPassos = styled.div<{mediaquery?: string}>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  .div-textos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    margin: 0 0 0 28px
  }

  .div-icones {
    min-width: 32.2px;
    min-height: 48px;
  }
`
export const TextoUmPassos = styled.p`
  color: #35424F;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 136%;
`
export const TextoDoisPassos = styled.p<{mediaquery?: string}>`
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  color: #1F2933;
  font-weight: 500;
  line-height: 120%;
  margin-top: 8px;
`
export const TextoTresPassos = styled.p`
  color: #1F2933;
  font-size: 14px;
  font-weight: 400;
  line-height: 136%;
  margin-top: 8px;
  font-size: 16px;
`
export const TextoConteudoQuatro = styled.h1<{mediaquery?: string}>`
  color: #1F2933;
  text-align: center;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "32px" : "20px"};
  width: ${props => props.mediaquery === "true" ? "42%" : "100%"};
`
export const ButtonEntrarConteudoQuatro = styled(Button)<{mediaquery?: string}>`
  &.MuiButton-root {
    min-width: 93px;
    align-self: center;
    width: ${props => props.mediaquery === "true" ? "280px" : "183px"};
    text-transform: none;
    margin: 25px 0px 0px 0px;
  }
`
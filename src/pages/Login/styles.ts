import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: "hidden";
  background: #FFFFFF;
  flex-direction: column;
`
export const Body = styled.div<{ mediaQuery: string }>`
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.mediaQuery === "true" ? "row" : "column-reverse"};
  padding: ${props => props.mediaQuery === "true" ? "0px" : "0px"};
`

export const BotaoVoltar = styled(IconButton) `
  &.MuiIconButton-root {
    margin: 2.0625rem auto auto 5.25rem;
  }
`
export const DivItens = styled.div<{mediaQuery: string}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${props => props.mediaQuery === "true" ? "" : "0px"};
  `
export const Title = styled.h1<{mediaQuery: string}>`
  color: #043D94;
  font-size: ${props => props.mediaQuery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
  margin: ${props => props.mediaQuery === "true" ? "80px 0px 32px 0px" : "26px 0px 24px 0px"};

`
export const SubTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 125%;
  color: #1F2933;
  margin: 16px 0 auto 0;
  a {
    color: #043D94;
    font-weight: 500;
    margin-left: 0.25rem;
  }
`
export const Img = styled.img`
  height: 100%;
  width: 100%;
`
export const BoxGoogleLogin = styled.div<{mediaQuery: string}> `
  display: flex;
  justify-content: center;
  width: ${props => props.mediaQuery === "true" ? "70%" : "100%"};

  .styledButton{
    display: flex;
    justify-content: center;
    max-height: ${props => props.mediaQuery === "true" ? "55px" : "37px"};
    font-family: Poppins;

    .styledButton:nth-last-child(1){
    width: 100%;
    height: 100%;
  }
  }
`
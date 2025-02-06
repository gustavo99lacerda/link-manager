import styled from 'styled-components'

export const Content = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: ${props => props.mediaquery === "true" ? "row" : "column"};
  align-items: center;
  width: 100%;
  height: 100%;
`
export const DivMinhasPaginas = styled.div<{mediaquery?: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.mediaquery === "true" ? "32px 0px" : "0px"};
`
export const TitlePage = styled.h1<{mediaquery?: string}>`
  color: #1F2933;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "20px"};
  font-weight: 500;
  line-height: 120%;
  text-align: left;
  width: 100%;
  padding: 0px 0px 24px 32px;
`
export const DivListaPaginas = styled.span<{mediaquery?: string}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #C6D9E3;
  padding: ${props => props.mediaquery === "true" ? "24px 30px 30px 30px" : "24px"};
`
export const TextoInformativo = styled.span<{mediaquery?: string}>`
  color: #1F2933;
  font-weight: 500;
  line-height: 136%;
  font-size: ${props => props.mediaquery === "true" ? "16px" : "14px"};
  text-align: left;
  margin: 0px 0px 48px 0px ;
`
export const ListaPaginaCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
  margin: 32px 0 0 0;
  ::-webkit-scrollbar {
    display: none;
  }
`
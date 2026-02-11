import styled from 'styled-components'

export const ContentMolde = styled.div<{ backgroundprevia?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 464px;
  border-left: 1px solid #C4C4C4;
  background-color: #FFFFFF;
  
  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 253px;
    max-width: 253px;
    min-height: 553px;
    max-height: 553px;
    border-radius: 40px;
    margin: auto;
    background: ${props => props.backgroundprevia};

    .previa-celular-svg {
      position: absolute;
    }

    img {
      border-radius: 50%;
      width: 111px;
      height: 111px;
      margin: 66px 0px 0px 0px;
    }
  }
`

export const Links = styled.div<{ backgroundcolor: string, color: string, textoBotao: string }>`
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textoBotao};
  background-color: ${(props) => props.backgroundcolor};
  display: flex;
  width: 209px;
  height: 45px;
  border-radius: 16px;
  position: relative;
  margin-bottom: 16px;
  border: 1px solid #000000;
`
export const Titulo = styled.p<{ color: string }>`
  margin: 10px 0px 40px 0px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color};
`
export const SemFoto = styled.div<{ width: string, height: string, margin: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  border-radius: 50%;
  background-color: gray;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 40px;
  text-transform: uppercase;
`
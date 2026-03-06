import styled from 'styled-components'

export const ContentMolde = styled.div<{ backgroundprevia?: string, background: string }>`
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
    position: relative;  
    overflow: hidden; 

    &::before {
      content: '';        
      position: absolute; 
      background-image: url(${props => props.background});
      filter: blur(2px);
      inset: 0;
      background-size: cover;
      background-position: center;
      z-index: 0;
   }

    .previa-celular-svg {
      position: absolute;
    }

    img {
      position: relative; 
      z-index: 1;          
      border-radius: 50%;
      width: 111px;
      height: 111px;
      margin: 66px 0px 0px 0px;
    }
  }
`

export const Links = styled.div<{ backgroundcolor: string, color: string, textoBotao: string }>`
  z-index: 1;   
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
  position: relative;  
  z-index: 1;        
  margin: 10px 0px 40px 0px;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.color};
`

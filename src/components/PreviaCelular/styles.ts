import styled from 'styled-components'

export const ContentMolde = styled.div<{ backgroundprevia?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 464px;
  border-left: 1px solid #C4C4C4;
  border: 1px solid red;
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
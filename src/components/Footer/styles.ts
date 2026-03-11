import styled from 'styled-components'

export const Footer = styled.footer<{ mediaquery: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #16825d;
  margin: auto 0px 0px 0px;
  padding: 0px 16px;
  min-height: ${props => props.mediaquery === "true" ? "92px" : "54px"};
  
  span {
    text-align: center;
    font-weight: 300;
    line-height: 136%;
    color: #FFFFFF;
    font-size: ${props => props.mediaquery === "true"? "16px" : "12px"};
  }
  `


import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.12);
  min-width: 256px;
  background: #FEFEFE;
  margin: 0 auto 0 0;
  padding: 26px 24px;
  z-index: 1;
`
export const StyledButton = styled(Button)`
  &.MuiButton-root {
    background: transparent;
    align-self: center;
    margin-bottom: 82px;
  }
`
export const ButtonsMenu = styled(Button)<{ colortext: string }>`
  &.MuiButton-root{
    height: 48px;
    width: 100%;
    justify-content: flex-start;
    text-transform: none;
    padding: 0px 0px 0px 15px;
    color: ${(props) => props.colortext};
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    svg{
      margin: 0px 22px 0px 0px
    }
    svg path{
      stroke: ${(props) => props.colortext};
    }
    :hover{
      background-color: transparent;
      color: #16825D;
      svg path{
         stroke: #16825D;
      }
    }
  }
`

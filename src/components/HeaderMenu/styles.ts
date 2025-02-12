import styled from "styled-components";
import { Button, Drawer, IconButton } from "@material-ui/core";


export const StyledButton = styled(Button)<{ width: string }>`
  &.MuiButton-root {
    min-width: ${props => props.width};
    background: transparent;
    padding: 0;
  }
`
export const DrawerStyled = styled(Drawer)`
  .MuiPaper-root{
    background-color: #AEC3D2;
    width: 100%;
    flex-direction: column;
    display: flex;
    padding: 16px 0px;
  }
`
export const BotaoFechar = styled(IconButton)`
  &.MuiIconButton-root{
    height: 25px;
    width: 25px;
    padding: 20px;
    margin: 0px 16px 3.5rem auto;
    color: #000000;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 125%;
  }
`
export const Botao = styled(Button)`
  &.MuiButton-root{
    border-bottom: 1px solid #C4C4C4;
    border-radius: 0px;
    height: 48px;
    width: 100%;
    justify-content: flex-start;
    text-transform: none;
    padding: 0px 0px 0px 15px;
    color: #35424F;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    svg{
      margin: 0px 22px 0px 0px
    }

    :hover{
      color: #043D94;
      svg path{
        stroke: #043D94;
      }
    }
  }
`

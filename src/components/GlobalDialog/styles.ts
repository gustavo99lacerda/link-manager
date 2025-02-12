import { Dialog, Drawer } from '@material-ui/core'
import { CSSProperties } from 'react'
import styled from 'styled-components'

interface Props extends CSSProperties {
  marginactions?: string
}

export const StyledDialog = styled(Dialog) <CSSProperties>`
  .MuiPaper-root {
    margin: auto;
    padding: 24px;
    min-width: 320px;
    border-radius: 8px;
    width: ${props => props.width};
  }

  .MuiIconButton-root {
    padding: 0;
    margin: 0px 0px 0px auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .space-actions-dialog {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: center;
    margin-top: 34px;
  }

  .MuiButton-colorInherit {
    color: #02226A;
    font-size: 14px;
    padding: 0;
  }
`
export const StyledModal = styled(Drawer) <Props>`
  .MuiPaper-root {
    display: flex;
    width: 100%;
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    padding: 16px;
    border-radius: 8px 8px 0 0;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .button-close {
    margin: 0 auto 16px auto;
    width: 56px;
    height: 5px;
    background-color: #C6D9E3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .space-actions-modal {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`

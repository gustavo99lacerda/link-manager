import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

interface PropsPrimeiraLinha {
  fontsizetitulo?: string
  fontsizeurl?: string
}

export const CardContainer = styled.div<{ bordercolor: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15.5008px;
  background: #FFFFFF;
  border-radius: 6px;
  margin: 0 0 10px 0;
  min-height: 103px;
  border: 2px solid ${props => props.bordercolor};
`
export const CardBody = styled.div<PropsPrimeiraLinha>`
  display: flex;
  justify-content: space-between;
  width: 100%;

`
export const PrimeiraLinha = styled.div<PropsPrimeiraLinha>`
    word-break: break-all;
    width: 100%;
    color: #1F2933;
    font-size: 16px;
    font-weight: 400;
    line-height: 136%;
`

export const SegundaLinha = styled.div<PropsPrimeiraLinha>`
  display: flex;
  color: #4D5C6C;
  font-weight: 300;
  line-height: 136%;
  font-size: 14px;
  word-break: break-all;
  margin-top: 10px;
`
export const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root{
    padding: 6px;
    margin: 0 0 auto 0;
  }
`

export const ClickArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  :hover{
    cursor: pointer;
  }
`

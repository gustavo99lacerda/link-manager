import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

export const DialogTitle = styled.span < { mediaquery: string } > `
  color: #16825D;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "24px" : "16px"};
  font-weight: 500;
  line-height: 120%;
`
export const DialogInfo = styled.span<{ mediaquery: string}>`
  color: #4D5C6C;
  text-align: center;
  font-size: ${props => props.mediaquery === "true" ? "16px" : "14px"};
  font-weight: ${props => props.mediaquery === "true" ? "500" : "300"};
  line-height: 120%;
  margin: ${props => props.mediaquery === "true" ? "25px 0px 42px 0px" : "32px 0px 32px 0px"};
`
export const BotaoExcluir = styled(IconButton)`
  margin: 0px 0px 0px auto;
`;

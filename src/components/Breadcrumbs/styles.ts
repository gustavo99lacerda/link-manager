import styled from 'styled-components'
import { Typography } from '@material-ui/core';

export const PaginaAnterior = styled(Typography) `
  color: #37474F;
  font-size: 12px;
  font-weight: 400;
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

export const PaginaAtual = styled(Typography) `
  color: #263238;
  font-size: 12px;
  font-weight: 500;
  align-items: center;
`

import { Grid } from '@mui/material'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: orange;
  }
`


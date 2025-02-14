import styled from 'styled-components'

export const InputStyled = styled.input<{ backgroundcolor: string }>`
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch{
    border: 0;
    border-radius: 0;
    background-color: ${props => props.backgroundcolor}!important;
  }
  ::-moz-color-swatch,
  ::-moz-focus-inner{
    border: 0;
  }
  ::-moz-focus-inner{
    padding: 0;
  }
  border-radius: 0.25rem;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 2.5625rem;
  height: 2.5625rem;
  margin-left: 0.75rem;
`

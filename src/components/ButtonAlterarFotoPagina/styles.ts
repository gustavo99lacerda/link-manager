import styled from 'styled-components'

export const DivContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
  justify-content: flex-start;
  margin: 0 auto 0 0;
`
export const SemFoto = styled.div<{ width: string, height: string, margin?: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  border-radius: 50%;
  background-color: gray;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 40px;
  text-transform: uppercase;
`
export const ComFoto = styled.img<{ width: string, height: string, margin?: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  margin: ${props => props.margin};
`

export const DialogTitle = styled.span<{ mediaquery: string }>`
  color: #043D94;
  text-align: center;
  font-size: ${props => props.mediaquery === 'true' ? '24px' : '16px'};
  font-weight: 500;
  line-height: 120%;
`
export const DialogInfo = styled.span<{ mediaquery: string }>`
  color: #4D5C6C;
  text-align: center;
  font-size: ${props => props.mediaquery === 'true' ? '16px' : '14px'};
  font-weight: ${props => props.mediaquery};
  line-height: 120%;
  margin: ${props => props.mediaquery === 'true' ? '25px 0px 42px 0px' : '32px 0px 32px 0px'};
`
export const DivBotoes = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: center;

`

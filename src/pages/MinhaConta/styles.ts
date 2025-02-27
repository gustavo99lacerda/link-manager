import styled from 'styled-components'
import { Form as Unform } from '@unform/web'
import { Button } from '@material-ui/core'

export const Content = styled.div<{mediaquery: string}>`
  display: flex;
  flex-direction: ${props => props.mediaquery === "true" ? "row" : "column"};
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #FFFFFF;
`

export const DivForm = styled.div<{ overflow?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: min-content;
  overflow: auto;
`
export const Form = styled(Unform) <{ mediaquery?: string }> `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: ${props => props.mediaquery === "true" ? "26px 48px 26px 48px" : "24px"};
`
export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const Title = styled.h1<{ mediaquery?: string }>`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
  margin:  ${props => props.mediaquery === "true" ? "0 auto 100px 0" : "0 auto 30px 0"};
  color: #000000;
`
export const Topicos = styled.span<{ margin?: string }>`
  margin: ${props => props.margin};
  color: #1F2933;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  word-break: break-all;
`

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 38px;
`
export const DivVoltar = styled.div`
  padding: 28px 24px 20px 24px;
  display: flex;
  border-bottom: 1px solid #C6D9E3;
  width: 100%;
`
export const BackButton = styled(Button)`
  .MuiButton-label{
    color:  #1F2933;
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
    text-transform: none;
  }
`
export const Info = styled.span`
  color: #001115;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 136%;
  margin: 36px 0px 16px 0px;
`

import { Switch } from '@material-ui/core';
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 16px 0px 16px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #16825D;
  margin-top: 16px;

`
export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const DivPrimeiraLinha = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 12px;
  min-height: 38px;
  word-break: break-all;

`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const IOSSwitch = styled(Switch)`
  .MuiSwitch-colorSecondary.Mui-checked {
    color: #16825D;
  }
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #00BCF266;
  }
`;

export const TituloCard = styled.span`
  font-size: 16px;
  color: #1F2933;
  font-weight: 400;
  line-height: 136%;
  width: 100%;
`
export const UrlCard = styled.span`
  color: #4D5C6C;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 136%;
  width: 100%;
  word-break: break-all;
`

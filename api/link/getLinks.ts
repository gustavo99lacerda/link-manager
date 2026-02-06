import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiGetLinks = (idConta: string, idPagina: string): AxiosPromise<Object> => {
  const url = `/users/${idConta}/paginas/${idPagina}/links`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
  }
  return api(parametros)
}

import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from './apiConfig';

export const apiGetPaginas = (idConta: string,): AxiosPromise<Object> => {
  const url = `/users/${idConta}/paginas`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
  }
  return api(parametros)
}

import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiGetLinks = (idPagina: string): AxiosPromise<Object> => {
  const url = `/paginas/${idPagina}/links`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
  }
  return api(parametros)
}

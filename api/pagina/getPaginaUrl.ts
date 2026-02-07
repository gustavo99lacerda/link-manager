import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiGetPaginaUrl = (urlPagina: string): AxiosPromise<Object> => {
  const url = `/paginas`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
    params: {
      url: urlPagina
    }
  }
  return api(parametros)
}
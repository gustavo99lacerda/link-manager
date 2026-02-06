import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiGetPagina = (idPagina: string): AxiosPromise<Object> => {
  const url = `/paginas/${idPagina}`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
  }
  return api(parametros)
}

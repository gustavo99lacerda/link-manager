import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiDeletePagina = (idPagina: string): AxiosPromise<Object> => {
  const url = `/paginas/${idPagina}`;
  const parametros: AxiosRequestConfig = {
    method: 'DELETE',
    url,
  }
  return api(parametros)
}

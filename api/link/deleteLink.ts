import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiDeleteLink = (idPagina: string, idLink: string): AxiosPromise<Object> => {
  const url = `/paginas/${idPagina}/links/${idLink}`;
  const parametros: AxiosRequestConfig = {
    method: 'DELETE',
    url,
  }
  return api(parametros)
}

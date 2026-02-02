import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from './apiConfig';

export const apiDeleteLink = (idConta: string, idPagina: string, idLink: string): AxiosPromise<Object> => {
  const url = `/users/${idConta}/paginas/${idPagina}/links/${idLink}`;
  const parametros: AxiosRequestConfig = {
    method: 'DELETE',
    url,
  }
  return api(parametros)
}

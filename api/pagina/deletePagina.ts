import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiDeletePagina = (idConta: string, idPagina: string): AxiosPromise<Object> => {
  const url = `/users/${idConta}/paginas/${idPagina}`;
  const parametros: AxiosRequestConfig = {
    method: 'DELETE',
    url,
  }
  return api(parametros)
}

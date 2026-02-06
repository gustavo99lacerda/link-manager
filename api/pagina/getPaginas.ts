import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiGetPaginas = (idConta: string): AxiosPromise<Object> => {
  const url = `/paginas`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url,
    params: {
      idConta: idConta
    }    
  }
  return api(parametros)
}

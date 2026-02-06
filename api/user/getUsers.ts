import { AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const getUsers = () => {
  const url = `/users`;
  const parametros: AxiosRequestConfig = {
    method: 'GET',
    url
  }
  return api(parametros)
}

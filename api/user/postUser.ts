import { AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const postUser = (email: string, nome: string, picture: string) => {
  const url = `/users`;
  const parametros: AxiosRequestConfig = {
    method: 'POST',
    url,
    data: {
      email,
      nome,
      picture
    }
  }
  return api(parametros)
}

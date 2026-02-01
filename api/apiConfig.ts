import axios, { AxiosResponse } from 'axios';

const obterEndpointApi = () => {
  if (!import.meta.env.VITE_MOCK_API_BASE_URL) {
    throw new Error('Não é possível realizar requisições. Endpoint da API não está configurado.');
  }

  return import.meta.env.VITE_MOCK_API_BASE_URL!;
};

const instanciaAxios = axios.create({
  baseURL: obterEndpointApi(),
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'X-Auth-Api': import.meta.env.VITE_MOCK_API_KEY!,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, HEAD, OPTIONS, DELETE',
  },
});

export type Response<D = undefined> = {
  code: number
  errors: Array<any> | null
  data: D | any
  status: number | string
}

export type IResponse<D = undefined> = AxiosResponse<Response<{
  code: number
  errors: Array<any> | null
  data: D | any
  status: number | string
}>>

export default instanciaAxios;

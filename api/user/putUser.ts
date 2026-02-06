import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPutUser = (idConta: string, foto: string, nome: string): AxiosPromise<Object> => {
    const url = `/users/${idConta}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            nome,
            picture: foto   
        }
    }
    return api(parametros)
}

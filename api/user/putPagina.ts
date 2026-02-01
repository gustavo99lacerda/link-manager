import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiEditaPagina = (titulo: string, idConta: string, urlPagina: string): AxiosPromise<Object> => {
    const url = `/users/${idConta}/paginas`;
    const parametros: AxiosRequestConfig = {
        method: 'POST',
        url,
        data: {
            idConta,
            titulo,
            ativo: true,
            url: urlPagina,
        }
    }
    return api(parametros)
}

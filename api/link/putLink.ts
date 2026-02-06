import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPutLink = (idConta: string,
    idPagina: string,
    idLink: string,
    descricao: string,
    urlLink: string): AxiosPromise<Object> => {
    const url = `users/${idConta}/paginas/${idPagina}/links/${idLink}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            descricao,
            url: urlLink,
        }
    }
    return api(parametros)
}
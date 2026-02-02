import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from './apiConfig';

export const apiPutLink = (idConta: string,
    idPagina: string,
    idLink: string,
    descricao: string,
    ordem: number,
    urlLink: string,
    ativo: boolean): AxiosPromise<Object> => {
    const url = `users/${idConta}/paginas/${idPagina}/links/${idLink}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            ordem,
            descricao,
            url: urlLink,
            ativo
        }
    }
    return api(parametros)
}
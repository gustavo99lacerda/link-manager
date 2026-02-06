import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPutAtivoLink = (idConta: string,
    idPagina: string,
    idLink: string,
    ativo: boolean): AxiosPromise<Object> => {
    const url = `users/${idConta}/paginas/${idPagina}/links/${idLink}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            ativo
        }
    }
    return api(parametros)
}
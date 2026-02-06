import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPutPagina = (
    idConta: string,
    idPagina: string,
    urlPagina?: string,
    foto?: string,
    botao?: string,
    texto?: string,
    fundo?: string,
    titulo?: string,
): AxiosPromise<Object> => {
    const url = `/users/${idConta}/paginas/${idPagina}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            titulo,
            aparencia: {
                foto,
                cor: {
                    botao,
                    texto,
                    fundo
                }
            },
            url: urlPagina,

        }
    }
    return api(parametros)
}

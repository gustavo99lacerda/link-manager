import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPutBackgroundPagina = (
    idPagina: string,
    background: string,
    foto: string,
    botao: string,
    texto: string,
    fundo: string,
    textoBotao: string

): AxiosPromise<Object> => {
    const url = `/paginas/${idPagina}`;
    const parametros: AxiosRequestConfig = {
        method: 'PUT',
        url,
        data: {
            aparencia: {
                foto,
                background,
                cor: {
                    botao,
                    texto,
                    textoBotao,
                    fundo
                }
            },
        }
    }
    return api(parametros)
}

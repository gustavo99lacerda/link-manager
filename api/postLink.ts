import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from './apiConfig';

export const apiAdicionarLink = (idConta: string, paginaId: string, ordem: number, descricao: string, urlLink: string, ativo: boolean): AxiosPromise<Object> => {
  const url = `/users/${idConta}/paginas/${paginaId}/links`;
    const parametros: AxiosRequestConfig = {
        method: 'POST',
        url,
        data: {
            paginaId,
            ordem,
            descricao,
            url: urlLink,
            ativo
        }
    }
    return api(parametros)
}

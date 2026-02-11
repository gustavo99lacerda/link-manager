import { AxiosPromise, AxiosRequestConfig } from 'axios';
import api from '../apiConfig';

export const apiPostPagina = (titulo: string, idConta: string, urlPagina: string, fotoPagina?: string): AxiosPromise<Object> => {
  const url = `/paginas`;
    const parametros: AxiosRequestConfig = {
        method: 'POST',
        url,
        data: {
            idConta,
            titulo,
            ativo: true,
            aparencia: {
                foto: fotoPagina,
                cor: {
                    botao: "#FFFFFF",
                    texto: "#FFFFFF",
                    textoBotao: "#000000",
                    fundo: "#16825d",
                }
            },
            url: urlPagina,
        }
    }
    return api(parametros)
}

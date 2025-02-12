import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPaginaCompleta {
  idPagina: string
  idConta: string
  titulo: string
  ativo: boolean
  aparencia: {
    foto: string
    bordaBotao: string,
    cor: {
      botao: string
      texto: string
      fundo: string
    }
  }
  links: Array<{
    idLink: string
    ordem: number
    descricao: string
    url: string
    ativo: boolean
  }>
  url: string
}

const initialState: IPaginaCompleta = {
  idPagina: "",
  idConta: "",
  titulo: "",
  ativo: false,
  aparencia: {
    foto: "",
    bordaBotao: "",
    cor: {
      botao: "",
      texto: "",
      fundo: ""
    }
  },
  links: [],
  url: ""
}

const paginaCompletaSlice = createSlice({
  name: "paginaCompleta",
  initialState,
  reducers: {
    setPaginaCompleta: (_state, action: PayloadAction<IPaginaCompleta>) => action.payload,
    adicionarLinks: (state, action: PayloadAction<{ idLink: string, ordem: number, descricao: string, url: string, ativo: boolean }>) => {
      state.links = state.links.concat(action.payload)

      return state
    },
    ativarOuDesativarLink: (state, action: PayloadAction<{ idLink: string, ativo: boolean }>) => {
      const objectIndex = state.links.findIndex((link) => link.idLink === action.payload.idLink);
      const updateObject = {
        ...state.links[objectIndex],
        ativo: action.payload.ativo
      }
      const arrayObject = [...state.links.slice(0, objectIndex), updateObject, ...state.links.slice(objectIndex + 1)]
      return {
        ...state,
        links: arrayObject
      }
    },
    removerLink: (state, action: PayloadAction<{ idLink: string }>) => {
      state.links = state.links.filter(item => item.idLink !== action.payload.idLink)

      return state
    },
    removerFotoPagina: (state) => {
      state.aparencia.foto = ""

      return state
    },
    adicionarFotoPagina: (state, action: PayloadAction<{ foto: string }>) => {
      state.aparencia.foto = action.payload.foto

      return state
    },
    trocarCorDeFundoPagina: (state, action: PayloadAction<string>) => {
      state.aparencia.cor.fundo = action.payload

      return state
    },
    trocarCorDoTextoPagina: (state, action: PayloadAction<string>) => {
      state.aparencia.cor.texto = action.payload

      return state
    },
    trocarCorDoBotaoPagina: (state, action: PayloadAction<string>) => {
      state.aparencia.cor.botao = action.payload

      return state
    },
    alteraOrdemDosLinks: (state, action: PayloadAction<{ idLinkOrigem: string, idLinkDestino: string, direcao: string }>) => {
      const idLinkOrigem = state.links.filter(link => link.idLink === action.payload.idLinkOrigem)
      const idLinkDestino = state.links.filter(link => link.idLink === action.payload.idLinkDestino)

      if (action.payload.direcao === 'cima') {
        idLinkOrigem[0].ordem = idLinkDestino[0].ordem
        idLinkDestino[0].ordem = (idLinkOrigem[0].ordem + 1)
      } else {
        idLinkOrigem[0].ordem = idLinkDestino[0].ordem
        idLinkDestino[0].ordem = (idLinkOrigem[0].ordem - 1)
      }

      state.links.sort((ordem1, ordem2) => (ordem1.ordem > ordem2.ordem ? 1 : -1))

      return state
    },
    trocarEstiloBotao: (state, action: PayloadAction<string>) => {
      state.aparencia.bordaBotao = action.payload
      return state
    },
    atualizaDadosPagina: (state, action: PayloadAction<{ titulo: string, url: string }>) => {
      state.titulo = action.payload.titulo
      state.url = action.payload.url
      return state
    },
    atualizaAparenciaPagina: (state, action: PayloadAction<{
      foto: string
      bordaBotao: string,
      cor: {
        botao: string
        texto: string
        fundo: string
      }
    }>) => {
      state.aparencia.cor.botao = action.payload.cor.botao
      state.aparencia.cor.fundo = action.payload.cor.fundo
      state.aparencia.cor.texto = action.payload.cor.texto
      state.aparencia.foto = action.payload.foto
      state.aparencia.bordaBotao = action.payload.bordaBotao
      return state
    },
    resetPaginaCompleta: () => initialState
  }
})

export const {
  setPaginaCompleta,
  adicionarLinks,
  ativarOuDesativarLink,
  removerLink,
  alteraOrdemDosLinks,
  resetPaginaCompleta,
  removerFotoPagina,
  adicionarFotoPagina,
  trocarCorDeFundoPagina,
  trocarCorDoTextoPagina,
  trocarCorDoBotaoPagina,
  trocarEstiloBotao,
  atualizaAparenciaPagina,
  atualizaDadosPagina
} = paginaCompletaSlice.actions

export default paginaCompletaSlice.reducer

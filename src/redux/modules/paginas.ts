import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPaginas {
  idPagina: string
  idConta: string
  titulo: string
  ativo: boolean
  aparencia: {
    foto: string
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

const initialState: Array<IPaginas> = []

const paginasSlice = createSlice({
  name: "paginas",
  initialState,
  reducers: {
    setPaginas: (_state, action: PayloadAction<Array<IPaginas>>) => action.payload,
    addPagina: (state, action: PayloadAction<IPaginas>) => {
      state = state.concat(action.payload)
      return state
    },
    removePagina: (state, action: PayloadAction<{ idPagina: string }>) => {
      state = state.filter(item => item.idPagina !== action.payload.idPagina)
      return state
    },
    updatePaginaNasPaginas: (state, action: PayloadAction<IPaginas>) => {
      const index = state.findIndex(pagina => pagina.idPagina === action.payload.idPagina)
      if (index !== -1) {
        state[index] = action.payload
      }
      return state
    },
    updateLinksPagina: (state, action: PayloadAction<{ idPagina: string, links: Array<{ idLink: string, ordem: number, descricao: string, url: string, ativo: boolean }> }>) => {
      const index = state.findIndex(pagina => pagina.idPagina === action.payload.idPagina)
      if (index !== -1) {
        state[index].links = action.payload.links
      }
      return state
    },
    resetPaginas: () => initialState
  }
})

export const {
  setPaginas,
  addPagina,
  removePagina,
  resetPaginas,
  updatePaginaNasPaginas,
  updateLinksPagina
} = paginasSlice.actions

export default paginasSlice.reducer

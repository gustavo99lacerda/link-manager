import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPaginas {
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
    resetPaginas: () => initialState
  }
})

export const {
  setPaginas,
  addPagina,
  removePagina,
  resetPaginas
} = paginasSlice.actions

export default paginasSlice.reducer

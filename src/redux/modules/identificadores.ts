import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IIdentificadores {
  linkPaginaSelecionada: string,
  idPaginaSendoEditada: string,
  abaLinksOuCustomizacao: "link" | "customizar"
  linkAdicionadoOuRemovido: boolean
  comoFuncionaAtivo: boolean
}

const initialState: IIdentificadores = {
  linkPaginaSelecionada: '',
  idPaginaSendoEditada: '',
  abaLinksOuCustomizacao: 'link',
  linkAdicionadoOuRemovido: false,
  comoFuncionaAtivo: false
}

const identificadoresSlice = createSlice({
  name: 'identificadores',
  initialState,
  reducers: {
    setLinkPaginaSelecionada: (state, action: PayloadAction<{ linkPaginaSelecionada: string }>) => {
      state.linkPaginaSelecionada = action.payload.linkPaginaSelecionada

      return state
    },

    setPaginaSendoEditada: (state, action: PayloadAction<{ idPaginaSendoEditada: string }>) => {
      state.idPaginaSendoEditada = action.payload.idPaginaSendoEditada

      return state
    },
    setAbaLinks: (state, action: PayloadAction<{ abaLinksOuCustomizacao: "link" | "customizar" }>) => {
      state.abaLinksOuCustomizacao = action.payload.abaLinksOuCustomizacao

      return state
    },
    setLinkAdicionadoOuRemovido: (state, action: PayloadAction<{ linkAdicionadoOuRemovido: boolean }>) => {
      state.linkAdicionadoOuRemovido = action.payload.linkAdicionadoOuRemovido

      return state
    },
    updateComoFunciona: (state, action: PayloadAction<boolean>) => {
      state.comoFuncionaAtivo = action.payload

      return state
    },
    resetIndentificadores: () => initialState
  }
})

export const {
  setAbaLinks,
  setLinkAdicionadoOuRemovido,
  setLinkPaginaSelecionada,
  setPaginaSendoEditada,
  resetIndentificadores
} = identificadoresSlice.actions

export default identificadoresSlice.reducer

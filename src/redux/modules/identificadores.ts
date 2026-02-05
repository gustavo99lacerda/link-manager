import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IIdentificadores {
  linkPaginaSelecionada: string,
  idPaginaSendoEditada: string,
  carregandoPrevia: boolean,
}

const initialState: IIdentificadores = {
  linkPaginaSelecionada: '',
  idPaginaSendoEditada: '',
  carregandoPrevia: false,
}

const identificadoresSlice = createSlice({
  name: 'identificadores',
  initialState,
  reducers: {

    setPaginaSendoEditada: (state, action: PayloadAction<{ idPaginaSendoEditada: string }>) => {
      state.idPaginaSendoEditada = action.payload.idPaginaSendoEditada

      return state
    },
    updateCarregandoPrevia: (state, action: PayloadAction<boolean>) => {
      state.carregandoPrevia = action.payload

      return state
    },
    resetIndentificadores: () => initialState
  }
})

export const {
  setPaginaSendoEditada,
  resetIndentificadores,
  updateCarregandoPrevia
} = identificadoresSlice.actions

export default identificadoresSlice.reducer

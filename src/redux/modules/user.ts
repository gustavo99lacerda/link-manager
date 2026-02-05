import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserInterface {
  idConta: string
  email: string
  nome: string
  foto: string
  token: string | number
}

const initialState: IUserInterface = {
  idConta: '',
  email: '',
  nome: '',
  foto: '',
  token: ''
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<IUserInterface>) => action.payload,
    removeFotoUsuario: (state) => {
      state.foto = ""

      return state
    },
    adicionaFotoUsuario: (state, action: PayloadAction<string>) => {
      state.foto = action.payload

      return state
    },
    resetUser: () => initialState
  }
})

export const {
  setUser,
  removeFotoUsuario,
  adicionaFotoUsuario
} = userSlice.actions

export default userSlice.reducer

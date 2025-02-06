import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  getStoredState,
  FLUSH,
  PAUSE,
  PERSIST,
  REHYDRATE,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from 'redux-persist/lib/storage'

import user from './modules/user'
import paginas from './modules/paginas'
import identificadores from './modules/identificadores'

const reducers = combineReducers({
  user,
  paginas,
  identificadores
})

const persistConfig = {
  key: 'project-link-manager',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: { trace: true },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER]
    }
  })
})
const persistor = persistStore(store)

function persistorInit() {
  getStoredState({
    storage,
    key: 'project-link-manager'
  })
}

persistorInit()

export type RootState = ReturnType<typeof store.getState>
export { store, persistor }

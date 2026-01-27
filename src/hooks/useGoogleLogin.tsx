import { useState } from 'react'
import axios from 'axios'
import { useGoogleLogin as useGL } from '@react-oauth/google'

interface IUseGoogleLogin {
  email: string
  nome?: string
  picture?: string
  error: boolean
  loading: boolean
}

export function useGoogleLogin() {

  const [useLogin, setUseLogin] = useState<IUseGoogleLogin>({
    email: '',
    nome: '',
    picture: '',
    error: false,
    loading: false
  })

  const loginGoogle = useGL({

    onSuccess: responseGoogle => {
      setUseLogin((state) => ({ ...state, inLoading: true }))
      axios.post('https://www.googleapis.com/oauth2/v3/userinfo', null, {
        params: {
          access_token: responseGoogle.access_token,
        },
      })
        .then((res) => {
          const { email, picture, name } = res.data
          setUseLogin((state) => ({ ...state, email, nome: name, picture: picture, loading: false }))
        })
        .catch(() => {
          setUseLogin((state) => ({ ...state, error: true, loading: false }))

        })
    },
    onError: () => {
      setUseLogin((state) => ({ ...state, error: true, loading: false }))

    },
    onNonOAuthError: () => {
      setUseLogin((state) => ({ ...state, error: true, loading: false }))
    }
  })

  const login = () => {
    setUseLogin(() => ({
      email: '',
      nome: '',
      picture: '',
      error: false,
      loading: true
    }))
    loginGoogle()
  }

  return { useLogin, login }
}

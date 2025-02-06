import { useHistory, useLocation, useParams } from 'react-router-dom'

export function useRouter() {

  const params: {
    [key: string]: string
  } = useParams()

  return {
    path: useLocation(),
    history: useHistory(),
    params
  }
}

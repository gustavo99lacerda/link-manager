import { useParams } from 'react-router-dom';

export const Pagina = () => {
  const { customUrl } = useParams<{ customUrl: string }>();

  return (
    <></>
  )
}
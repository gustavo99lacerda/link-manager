import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks'
import { ButtonAdicionarLink } from '../../components/ButtonAdicionarLink'
import { CardLinks } from '../../components/CardLinks'

interface Props {
  index: number;
  value: number;
}

export function ListaLinks({ value, index }: Props) {

  const { useAppSelect } = useRedux()
  const { translation } = useHooks()

  const { paginaCompleta } = useAppSelect


  return (
    <S.ContentLinkslist display={index === value ? "flex" : "none"} >
      <>
        <ButtonAdicionarLink />
        {paginaCompleta.links.length === 0 ?
          <S.TextoAviso>
            {translation("tela_editar.insira_seus_links")}
          </S.TextoAviso> :
          paginaCompleta.links.map((item) => (
            <CardLinks
              ativo={item.ativo}
              titulo={item.descricao}
              url={item.url}
              key={item.idLink}
            />
          ))
        }
      </>
    </S.ContentLinkslist>
  )
}

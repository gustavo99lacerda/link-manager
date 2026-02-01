import { useEffect } from 'react'
import { useRedux } from '../../hooks/useRedux'
import { ativarOuDesativarLink } from '../../redux/modules/paginaCompleta'
import { ButtonExcluirLink } from '../ButtonExcluirLink'
import * as S from './styles'


interface Props {
  titulo: string
  url: string
  ativo: boolean
  idLink: string
}

export function CardLinks({ url, ativo, titulo, idLink }: Props) {

  const { dispatch, useAppSelect } = useRedux()
  const { paginaCompleta } = useAppSelect
  
  useEffect(() => {
    //dispatch(updateLinksPagina({ idPagina: paginaCompleta.idPagina, links: paginaCompleta.links }))
  }, [paginaCompleta.links])


  const ativaOuDesativaLink = () => {
    dispatch(ativarOuDesativarLink({ idLink, ativo: !ativo }))
  }

  return (
    <S.CardContainer >
      <S.DivButtons>
      </S.DivButtons>
      <S.CardContent>
        <S.DivPrimeiraLinha>
          <S.TituloCard >{titulo}</S.TituloCard>
          <S.IOSSwitch checked={ativo}  onChange={ativaOuDesativaLink} />
        </S.DivPrimeiraLinha>
        <S.UrlCard>{url}</S.UrlCard>
      <ButtonExcluirLink idLink={idLink}/>
      </S.CardContent>
    </S.CardContainer>
  )
}

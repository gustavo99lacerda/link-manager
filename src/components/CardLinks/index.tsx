import { useState } from 'react'
import { useRedux } from '../../hooks/useRedux'
import { ativarOuDesativarLink } from '../../redux/modules/paginaCompleta'
import { ButtonExcluirLink } from '../ButtonExcluirLink'
import * as S from './styles'
import { CircularProgress } from '@material-ui/core'
import { useHooks } from '../../hooks/useHooks'
import { customSnackbar } from '../CustomSnackbar/customSnackbar'
import { apiPutAtivoLink } from '../../../api/putAtivoLink'


interface Props {
  titulo: string
  url: string
  ativo: boolean
  idLink: string
}

export function CardLinks({ url, ativo, titulo, idLink }: Props) {

  const { dispatch, useAppSelect } = useRedux()
  const { translation } = useHooks()
  const { paginaCompleta, user } = useAppSelect

  const [ativando, setAtivando] = useState(false)

  const ativaOuDesativaLink = () => {
    setAtivando(true)
    apiPutAtivoLink(user.idConta, paginaCompleta.idPagina, idLink, !ativo)
      .then(() => {
        setAtivando(false)
        customSnackbar(translation("snackbar.sucesso_ativardesativar_link"))
        dispatch(ativarOuDesativarLink({ idLink, ativo: !ativo }))
      })
      .catch((error) => {
        console.log(error)
        setAtivando(false)
      })
  }

  return (
    <S.CardContainer >
      <S.DivButtons>
      </S.DivButtons>
      <S.CardContent>
        <S.DivPrimeiraLinha>
          <S.TituloCard >{titulo}</S.TituloCard>
          {ativando
            ? <CircularProgress size={38} style={{ margin: "0 0 0 auto" }} />
            : <S.IOSSwitch checked={ativo} onChange={ativaOuDesativaLink} />}
        </S.DivPrimeiraLinha>
        <S.UrlCard>{url}</S.UrlCard>
        <ButtonExcluirLink idLink={idLink} />
      </S.CardContent>
    </S.CardContainer>
  )
}

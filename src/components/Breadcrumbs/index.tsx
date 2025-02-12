import { Breadcrumbs } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks';
import { useRouter } from '../../hooks/useRouter';

export function StyledBreadcrumbs() {

  const { translation } = useHooks()
  const { history } = useRouter()

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb">

      <S.PaginaAnterior onClick={() => history.push("/minhas-paginas")}>{translation("minhas_paginas")}</S.PaginaAnterior>
      <S.PaginaAtual>{translation("detalhes_pagina")}</S.PaginaAtual>
    </Breadcrumbs>
  )
}

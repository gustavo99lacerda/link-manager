
import { ButtonAdicionarPagina } from '../../components/ButtonAdicionarPagina'
import { CardPagina } from '../../components/CardPagina'
import { MenuLateral } from '../../components/MenuLateral'
import { PreviaCelular } from '../../components/PreviaCelular'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { Header } from '../../components/Header'
import { useEffect } from 'react'
import { apiGetPaginas } from '../../../api/user/getPaginas'
import { setPaginas } from '../../redux/modules/paginas'

export function MinhasPaginas() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginas, paginaCompleta, user } = useAppSelect

  useEffect(() => {
    apiGetPaginas(user.idConta)
      .then((response: any) => {
        dispatch(setPaginas(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  
  return (
    <S.Content mediaquery={mediaQuery} >
      {mediaQuery === "true" ? <MenuLateral /> : <Header />}
      <S.DivMinhasPaginas mediaquery={mediaQuery} >
        {mediaQuery === "true"
          ? <S.TitlePage mediaquery={mediaQuery}>
            {translation("minhas_paginas")}
          </S.TitlePage>
          : null}
        <S.DivListaPaginas mediaquery={mediaQuery}>
          {!paginas.length
            ? <S.TextoInformativo mediaquery={mediaQuery}>
              {translation("tela_minhas_paginas.nao_possui_pagina")}
            </S.TextoInformativo>
            : <S.TextoInformativo mediaquery={mediaQuery}>
              {translation("tela_minhas_paginas.clique_para_adicionar")}
            </S.TextoInformativo>}
          <ButtonAdicionarPagina />
          <S.ListaPaginaCards>
            {paginas.map(item => (
              <CardPagina
                selecionado={paginaCompleta.idPagina === item.idPagina}
                key={item.idPagina}
                titulo={item.titulo}
                url={item.url}
                idPagina={item.idPagina} />
            ))}
          </S.ListaPaginaCards>
        </S.DivListaPaginas>
      </S.DivMinhasPaginas>
      {mediaQuery === "true" ? <PreviaCelular /> : null}
    </S.Content>
  )
}

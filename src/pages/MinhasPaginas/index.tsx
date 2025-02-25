
import { ButtonAdicionarPagina } from '../../components/ButtonAdicionarPagina'
import { CardPagina } from '../../components/CardPagina'
import { MenuLateral } from '../../components/MenuLateral'
import { PreviaCelular } from '../../components/PreviaCelular'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { Header } from '../../components/Header'

export function MinhasPaginas() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect } = useRedux()

  const { paginas, paginaCompleta } = useAppSelect


  return (
    <S.Content mediaquery={mediaQuery} >
      {mediaQuery === "true" ? <MenuLateral /> :  <Header />}
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

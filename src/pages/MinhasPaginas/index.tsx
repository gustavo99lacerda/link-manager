
import { ButtonAdicionarPagina } from '../../components/ButtonAdicionarPagina'
import { CardPagina } from '../../components/CardPagina'
import { MenuLateral } from '../../components/MenuLateral'
import { PreviaCelular } from '../../components/PreviaCelular'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { apiGetPaginas } from '../../../api/pagina/getPaginas'
import { setPaginas } from '../../redux/modules/paginas'
import { CircularProgress } from '@material-ui/core'
import { resetPaginaCompleta } from '../../redux/modules/paginaCompleta'

interface IPaginas {
  idPagina: string
  titulo: string
  url: string
}

export function MinhasPaginas() {



  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginas, paginaCompleta, user } = useAppSelect

  const [carregandoPaginas, setCarregandoPaginas] = useState<boolean>(false)

  useEffect(() => {
    dispatch(resetPaginaCompleta())
    setCarregandoPaginas(true)
    apiGetPaginas(user.idConta)
      .then((response) => {
        const data = (response.data as Array<any>).map((item): IPaginas => ({
          idPagina: item.idPagina,
          titulo: item.titulo,
          url: item.url
        }))
        dispatch(setPaginas(data))
        setCarregandoPaginas(false)
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          dispatch(setPaginas([]))
        } else {
          setCarregandoPaginas(false)
          console.log(error)
        }
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
          {carregandoPaginas
            ? <CircularProgress color="primary" style={{ margin: "100px auto" }} />
            : <S.ListaPaginaCards>
              {paginas.map(item => (
                <CardPagina
                  selecionado={paginaCompleta.idPagina === item.idPagina}
                  key={item.idPagina}
                  titulo={item.titulo}
                  url={item.url}
                  idPagina={item.idPagina} />
              ))}
            </S.ListaPaginaCards>}
        </S.DivListaPaginas>
      </S.DivMinhasPaginas>
      {mediaQuery === "true" ? <PreviaCelular /> : null}
    </S.Content>
  )
}

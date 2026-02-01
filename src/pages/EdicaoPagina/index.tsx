import React, { useEffect, useState } from 'react'
import { useHooks } from '../../hooks/useHooks'
import * as S from './styles'
import { useRedux } from '../../hooks/useRedux'
import { ListaLinks } from './listaLinks'
import { FormCustomizacao } from './formCustomizacao'
import { ArrowBackIos } from '@material-ui/icons'
import { useRouter } from '../../hooks/useRouter'
import { Header } from '../../components/Header'
import { MenuLateral } from '../../components/MenuLateral'
import { StyledBreadcrumbs } from '../../components/Breadcrumbs'
import { PreviaCelular } from '../../components/PreviaCelular'
import { apiGetPagina } from '../../../api/getPagina'
import { setLinks, setPaginaCompleta } from '../../redux/modules/paginaCompleta'
import { apiGetLinks } from '../../../api/getLinks'
import { CircularProgress } from '@material-ui/core'


export function EdicaoPagina() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()
  const { history } = useRouter()

  const { paginaCompleta, user, identificadores } = useAppSelect
  const [aba, setAba] = useState(0)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    apiGetPagina(user.idConta, identificadores.idPaginaSendoEditada)
      .then((responsePagina: any) => {
        dispatch(setPaginaCompleta(responsePagina.data))

        apiGetLinks(user.idConta, identificadores.idPaginaSendoEditada)
          .then((responseLinks: any) => {
            dispatch(setLinks(responseLinks.data))
            setCarregando(false)

          })
          .catch((error) => {
            if (error.response?.status === 404) {
              dispatch(setLinks([]))
              setCarregando(false)
            } else {
              console.log(error)
              setCarregando(false)
            }
          })
      })
      .catch((error) => {
        console.log(error)
        setCarregando(false)
      })

  }, [])


  const mudaAba = (_event: React.ChangeEvent<{}>, newValue: number) => {
    //setAba(newValue)
  }

  return (
    <S.Body mediaquery={mediaQuery} >
      {mediaQuery === "true" ? <MenuLateral /> : <Header />}
      {carregando
        ? <CircularProgress color="primary" style={{ margin: "auto" }} />
        : <S.Content >
          {mediaQuery === "true"
            ? <S.DivVoltar>
              <S.BackButton
                onClick={() => history.push("/minhas-paginas")}>
                <ArrowBackIos />
                {paginaCompleta.titulo}
              </S.BackButton>
              <StyledBreadcrumbs />
            </S.DivVoltar>
            : null}
          <S.StyledTabs value={aba} onChange={mudaAba} aria-label="simple tabs example">
            <S.StyledTab label={translation("tela_editar.links")} />
            <S.StyledTab label={translation("tela_editar.customizar")} />
          </S.StyledTabs>
          <ListaLinks value={aba} index={0} />
          <FormCustomizacao value={aba} index={1} />
        </S.Content>}
      {mediaQuery === "true"
        ? <PreviaCelular />
        : null}
    </S.Body>
  )
}


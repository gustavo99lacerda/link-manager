import React from 'react'
import * as S from './styles'
import { Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { useHooks } from '../../hooks/useHooks'
import iconeCopiar from '../../assets/iconeCopiar.svg'
import { ButtonExcluirPagina } from '../ButtonExcluirPagina'
import iconeEditar from '../../assets/iconeEditar.svg'
import { ButtonDownloadQrCode } from '../ButtonDownloadQrCode'
import { useRedux } from '../../hooks/useRedux'
import { setLinks, setPaginaCompleta } from '../../redux/modules/paginaCompleta'
import { useRouter } from '../../hooks/useRouter'
import { customSnackbar } from '../CustomSnackbar/customSnackbar'
import { apiGetPagina } from '../../../api/pagina/getPagina'
import { setPaginaSendoEditada, updateCarregandoPrevia } from '../../redux/modules/identificadores'
import { apiGetLinks } from '../../../api/link/getLinks'

interface Props {
  titulo: string
  url: string
  idPagina: string
  selecionado: boolean,
}

export function CardPagina({ titulo, url, idPagina, selecionado }: Props) {

  const { translation } = useHooks()
  const { history } = useRouter()
  const { dispatch, useAppSelect } = useRedux()

  const { paginas, paginaCompleta } = useAppSelect
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const copiarLink = () => {
    navigator.clipboard.writeText(url)
    customSnackbar(translation("snackbar.sucesso_copiar"))
    setAnchorEl(null)
  }

  const irParaEdicao = () => {
    dispatch(setPaginaSendoEditada({ idPaginaSendoEditada: idPagina }))
    history.push(`/edicao-pagina`)
  }

  const selecionarPagina = () => {
    const paginaEncontrada = paginas.find(pagina => pagina.idPagina === idPagina)!
    if (paginaEncontrada.idPagina !== paginaCompleta.idPagina) {
      dispatch(updateCarregandoPrevia(true))
      apiGetPagina(paginaEncontrada.idPagina)
        .then((responsePagina: any) => {
          dispatch(setPaginaCompleta(responsePagina.data))

          apiGetLinks(paginaEncontrada.idPagina)
            .then((responseLinks: any) => {
              dispatch(setLinks(responseLinks.data))
            })
            .catch((error) => {
              if (error.response?.status === 404) {
                dispatch(setLinks([]))
              } else {
                console.log(error)
              }
            })
            .finally(() => {
              dispatch(updateCarregandoPrevia(false))
            })
        })
        .catch((error) => {
          console.log(error)
          dispatch(updateCarregandoPrevia(false))
        })
    }
  }

  return (
    <S.CardContainer
      bordercolor={selecionado ? "#16825D" : "#e5e7eb"}>
      <S.CardBody >
        <S.ClickArea onClick={() => selecionarPagina()}>
          <S.PrimeiraLinha >{titulo}</S.PrimeiraLinha>
          <S.SegundaLinha>{import.meta.env.VITE_BASE_URL + url}</S.SegundaLinha>
        </S.ClickArea>
        <S.StyledIconButton
          aria-controls={'basic-menu'}
          aria-haspopup="true"
          onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MoreVert style={{ color: "#16825D" }} />
        </S.StyledIconButton>
      </S.CardBody>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        container={() => document.body}
        MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
        <div>
          <MenuItem
            onClick={copiarLink}>
            <img src={iconeCopiar} alt="botao opcoes" style={{ margin: "0px 8px 0px 0px" }} />
            {String(translation("tela_minhas_paginas.copiar"))}
          </MenuItem>
          <MenuItem
            onClick={() => irParaEdicao()}>
            <img src={iconeEditar} alt="botao editar" style={{ margin: "0px 8px 0px 0px" }} />
            {String(translation("tela_minhas_paginas.customizar"))}
          </MenuItem>
          <ButtonDownloadQrCode url={url} onClose={() => setAnchorEl(null)} />
          <ButtonExcluirPagina idPagina={idPagina} onClose={() => setAnchorEl(null)} />
        </div>
      </Menu>
    </S.CardContainer>
  )
}

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
import { setPaginaCompleta } from '../../redux/modules/paginaCompleta'
import { useRouter } from '../../hooks/useRouter'

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

  const { paginas } = useAppSelect
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const copiarLink = () => {
    navigator.clipboard.writeText(url)
    // snackbar(translation("snackbar.sucesso_copiar"))
    setAnchorEl(null)
  }

  const irParaEdicao = () => {
    const paginaEncontrada = paginas.find(pagina => pagina.idPagina === idPagina)!
    dispatch(setPaginaCompleta(paginaEncontrada))
    history.push(`/edicao-pagina`)
  }

  const selecionarPagina = () => {
    const paginaEncontrada = paginas.find(pagina => pagina.idPagina === idPagina)!
    dispatch(setPaginaCompleta(paginaEncontrada))
  }

  return (
    <S.CardContainer
      bordercolor={selecionado ? "#32a6ff" : "#4D5C6C"}>
      <S.CardBody >
        <S.ClickArea onClick={() => selecionarPagina()}>
          <S.PrimeiraLinha >{titulo}</S.PrimeiraLinha>
          <S.SegundaLinha>{url}</S.SegundaLinha>
        </S.ClickArea>
        <S.StyledIconButton
          aria-controls={'basic-menu'}
          aria-haspopup="true"
          onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MoreVert style={{ color: "#043d94" }} />
        </S.StyledIconButton>
      </S.CardBody>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        closeAfterTransition
        onClose={() => setAnchorEl(null)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
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
            {String(translation("tela_minhas_paginas.editar"))}
          </MenuItem>
          <ButtonDownloadQrCode url={url} onClose={() => setAnchorEl(null)} />
          <ButtonExcluirPagina idPagina={idPagina} onClose={() => setAnchorEl(null)} />
        </div>
      </Menu>
    </S.CardContainer>
  )
}

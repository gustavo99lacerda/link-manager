import React from 'react'
import * as S from './styles'
import { Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { useHooks } from '../../hooks/useHooks'
import iconeCopiar from '../../assets/iconeCopiar.svg'
import { ButtonExcluirPagina } from '../ButtonExcluirPagina'
import iconeEditar from '../../assets/iconeEditar.svg'
import { ButtonDownloadQrCode } from '../ButtonDownloadQrCode'

interface Props {
  titulo: string
  url: string
  idPagina: string
  selecionado: boolean,
}

export function CardPagina({ titulo, url, idPagina, selecionado }: Props) {

  const { mediaQuery, translation } = useHooks()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const copiarLink = () => {
    navigator.clipboard.writeText(url)
    // snackbar(translation("snackbar.sucesso_copiar"))
    setAnchorEl(null)
  }
  
  const irParaEdicao = () => {
    // dispatch(setPaginaSendoEditada({ idPaginaSendoEditada: idPagina }))
    // history.push("/edicao-pagina")
  }

  return (
    <S.CardContainer
      bordercolor={selecionado ? "#043D94" : "#4D5C6C"}>
      <S.PrimeiraLinha
        fontsizetitulo={mediaQuery ? "20px" : "18px"}
        fontsizeurl={mediaQuery ? "16px" : "14px"}  >
        <span className="titulo" onClick={() => irParaEdicao()}>{titulo}</span>
        <S.StyledIconButton
          aria-controls={'basic-menu'}
          aria-haspopup="true"
          onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MoreVert style={{ color: "#043d94" }} />
        </S.StyledIconButton>
      </S.PrimeiraLinha>
      <S.SegundaLinha>{url}</S.SegundaLinha>
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
            onClick={copiarLink}>
            <img src={iconeEditar} alt="botao editar" style={{ margin: "0px 8px 0px 0px" }} />
            {String(translation("tela_minhas_paginas.editar"))}
          </MenuItem>
          <ButtonDownloadQrCode url={url} onClose={() => setAnchorEl(null)}/>
          <ButtonExcluirPagina idPagina={idPagina} onClose={() => setAnchorEl(null)} />
        </div>
      </Menu>
    </S.CardContainer>
  )
}

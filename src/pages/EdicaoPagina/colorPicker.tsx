import React from 'react'
import * as S from './styles'
import { useRedux } from '../../hooks/useRedux'
import { trocarCorDeFundoPagina, trocarCorDoBotaoPagina, trocarCorDoTextoPagina } from '../../redux/modules/paginaCompleta'

interface Props {
  parte: string
  backgroundcolor: string
}

export function ButtonPicker({ backgroundcolor,  parte}: Props) {

  const { dispatch } = useRedux()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const trocaCor = (cor: string, parte: string) => {
    switch (parte) {
      case "cor-fundo":
        dispatch(trocarCorDeFundoPagina(cor))
        break;
      case "cor-texto":
        dispatch(trocarCorDoTextoPagina(cor))
        break;
      case "cor-botao":
        dispatch(trocarCorDoBotaoPagina(cor))
        break;
    }
  }

  return (
    <>
      <S.ButtonPicker
        backgroundcolor={backgroundcolor}
        aria-controls={'basic-menu'}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}>
      </S.ButtonPicker>
      <S.StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        style={{ padding: "0px" }}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
        <S.StyledPicker disableAlpha onChangeComplete={(event) => trocaCor(event.hex, parte)} color={backgroundcolor} />
      </S.StyledMenu>
    </>
  )
}


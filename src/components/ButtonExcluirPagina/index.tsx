import { useState } from "react"
import iconeTrash from "../../assets/iconeTrash.svg"
import { useHooks } from "../../hooks/useHooks"
import { useRedux } from "../../hooks/useRedux"
import { removePagina } from "../../redux/modules/paginas"
import { MenuItem } from "@material-ui/core"
import { GlobalDialog } from "../GlobalDialog"
import * as S from './styles'


interface Props {
  idPagina: string
  onClose: () => void
}

export function ButtonExcluirPagina({ idPagina, onClose }: Props) {

  const { mediaQuery, translation } = useHooks()
  const { dispatch } = useRedux()

  const [openDialog, setOpenDialog] = useState(false)

  const fechaDialog = () => {
    setOpenDialog(false)
    if (onClose) onClose()
  }

  const excluirPagina = () => {
    dispatch(removePagina({ idPagina }))
  }

  return (
    <>
      <MenuItem onClick={() => setOpenDialog(true)}>
        <img src={iconeTrash} alt="botao excluir pagina" style={{ margin: "0px 8px 0px 0px" }} />
        {String(translation("excluir"))}
      </MenuItem>
      <GlobalDialog
        open={openDialog}
        onClose={fechaDialog}
        funcaoConfirmar={excluirPagina}
        funcaoCancelar={fechaDialog}
        textoCancelar={translation("cancelar")}
        textoConfirmar={translation("excluir")}>
        <S.QrRemoveTitle mediaquery={mediaQuery}>
          {translation("dialog_excluir_pagina.excluir_pagina")}
        </S.QrRemoveTitle>
        <S.QrRemoveInfo mediaquery={mediaQuery}>
          {translation("dialog_excluir_pagina.informacao")}
        </S.QrRemoveInfo>
      </GlobalDialog>
    </>
  )
}

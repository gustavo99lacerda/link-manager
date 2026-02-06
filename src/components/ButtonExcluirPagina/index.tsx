import { useState } from "react"
import iconeTrash from "../../assets/iconeTrash.svg"
import { useHooks } from "../../hooks/useHooks"
import { useRedux } from "../../hooks/useRedux"
import { removePagina } from "../../redux/modules/paginas"
import { MenuItem } from "@material-ui/core"
import { GlobalDialog } from "../GlobalDialog"
import * as S from './styles'
import { resetPaginaCompleta } from "../../redux/modules/paginaCompleta"
import { customSnackbar } from "../CustomSnackbar/customSnackbar"
import { apiDeletePagina } from "../../../api/pagina/deletePagina"


interface Props {
  idPagina: string
  onClose: () => void
}

export function ButtonExcluirPagina({ idPagina, onClose }: Props) {

  const { mediaQuery, translation } = useHooks()
  const { dispatch, useAppSelect } = useRedux()
  const { user } = useAppSelect

  const [openDialog, setOpenDialog] = useState(false)
  const [carregando, setCarregando] = useState(false)

  const fechaDialog = () => {
    setOpenDialog(false)
    if (onClose) onClose()
  }

  const excluirPagina = () => {
    setCarregando(true)
    apiDeletePagina(user.idConta, idPagina)
      .then(() => {
        dispatch(resetPaginaCompleta())
        dispatch(removePagina({ idPagina }))
        customSnackbar(translation("snackbar.sucesso_excluir_pagina"))
        setCarregando(false)
        fechaDialog
      })
      .catch((error) => {
        console.log(error)
        setCarregando(false)
      })

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
        inLoading={carregando}
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

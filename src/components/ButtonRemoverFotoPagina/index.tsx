import { useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog';
import { useHooks } from '../../hooks/useHooks';
import { useRedux } from '../../hooks/useRedux';
import { removerFotoPagina } from '../../redux/modules/paginaCompleta';
import { Button } from '@material-ui/core';
import { customSnackbar } from '../CustomSnackbar/customSnackbar';
import { apiPutFotoPagina } from '../../../api/pagina/putFotoPagina';

export function ButtonRemoverFotoPagina() {

  const { mediaQuery, translation } = useHooks()
  const { dispatch, useAppSelect } = useRedux()

  const [openDialog, setOpenDialog] = useState(false)

  const removerFoto = () => {
    apiPutFotoPagina(
      useAppSelect.paginaCompleta.idPagina,
      useAppSelect.paginaCompleta.aparencia.background,
      "",
      useAppSelect.paginaCompleta.aparencia.cor.botao,
      useAppSelect.paginaCompleta.aparencia.cor.texto,
      useAppSelect.paginaCompleta.aparencia.cor.fundo,
      useAppSelect.paginaCompleta.aparencia.cor.textoBotao
    ).then(() => {
      dispatch(removerFotoPagina())
      customSnackbar(translation("snackbar.remover_foto_sucesso"))
    }).catch((error) => {
      console.log(error)
    })
    setOpenDialog(false)
  }

  return (
    <>
      <Button variant='outlined' fullWidth color='primary' onClick={() => setOpenDialog(true)}>
        {translation("remover_foto")}
      </Button>
      <GlobalDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        funcaoConfirmar={removerFoto}
        funcaoCancelar={() => setOpenDialog(false)}
        textoCancelar={translation("cancelar")}
        textoConfirmar={translation("remover_foto")}>
        <S.DialogTitle mediaquery={mediaQuery}>
          {translation("dialog_foto_pagina.remover_foto_pagina")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_foto_pagina.remover_aviso")}
        </S.DialogInfo>
      </GlobalDialog>
    </>
  )
}


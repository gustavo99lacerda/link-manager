import { useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog';
import { useHooks } from '../../hooks/useHooks';
import { useRedux } from '../../hooks/useRedux';
import { Button } from '@material-ui/core';
import { removeFotoUsuario } from '../../redux/modules/user';
import { customSnackbar } from '../CustomSnackbar/customSnackbar';

export function ButtonRemoverFotoPerfil() {

  const { mediaQuery, translation } = useHooks()
  const { dispatch } = useRedux()

  const [openDialog, setOpenDialog] = useState(false)

  const removerFoto = () => {
    dispatch(removeFotoUsuario())
    customSnackbar(translation("snackbar.remover_foto_sucesso"))
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
          {translation("dialog_foto_conta.remover_foto_perfil")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_foto_conta.remover_aviso")}
        </S.DialogInfo>
      </GlobalDialog>
    </>
  )
}


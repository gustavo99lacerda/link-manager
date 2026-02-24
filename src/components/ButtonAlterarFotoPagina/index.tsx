import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog'
import { Button } from '@material-ui/core'
import { useRedux } from '../../hooks/useRedux'
import { useHooks } from '../../hooks/useHooks'
import { adicionarFotoPagina } from '../../redux/modules/paginaCompleta'
import { ButtonRemoverFotoPagina } from '../ButtonRemoverFotoPagina'
import imageCompression from 'browser-image-compression';
import { customSnackbar } from '../CustomSnackbar/customSnackbar'
import defaultUser from '../../assets/defaultUser.jpg'

export function ButtonAlterarFotoPagina() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginaCompleta } = useAppSelect

  const [openDialog, setOpenDialog] = useState(false)

  const uploadFoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const options = {
      maxSizeMB: 0.065,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    try {
      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onload = () => {
        dispatch(adicionarFotoPagina({ foto: reader.result!.toString() }))
        customSnackbar(translation("snackbar.alteracao_foto_sucesso"))

      }
    } catch (error) {
      console.error(error);
    }
    setOpenDialog(false);

  }

  return (
    <S.DivContent>
      <S.ComFoto src={paginaCompleta.aparencia.foto ? paginaCompleta.aparencia.foto : defaultUser} alt='foto pagina' width='115px' height='115px' />
      <Button variant='contained' color='primary' onClick={() => setOpenDialog(true)}>
        {translation("alterar_foto")}
      </Button>
      <GlobalDialog
        open={openDialog}
        actions={false}
        onClose={() => setOpenDialog(false)}>
        <S.DialogTitle mediaquery={mediaQuery} >
          {translation("dialog_foto_pagina.alterar_foto_pagina")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_foto_pagina.informacao")}
        </S.DialogInfo>
        <S.ComFoto src={paginaCompleta.aparencia.foto ? paginaCompleta.aparencia.foto : defaultUser} width='162px' height='162px' margin='0px 0px 32px 0px' />
        <S.DivBotoes>
          <ButtonRemoverFotoPagina />
          <input
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            id="contained-button-file"
            type="file"
            onChange={(event) => uploadFoto(event)}
          />
          <label style={{ width: "100%" }} htmlFor="contained-button-file">
            <Button
              fullWidth
              color="primary"
              variant="contained"
              component="span" >
              {translation("alterar_foto")}
            </Button>
          </label>
        </S.DivBotoes>
      </GlobalDialog>
    </S.DivContent>
  )
}

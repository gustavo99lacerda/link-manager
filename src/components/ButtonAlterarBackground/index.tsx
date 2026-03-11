import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog'
import { Button } from '@material-ui/core'
import { useRedux } from '../../hooks/useRedux'
import { useHooks } from '../../hooks/useHooks'
import { trocarBackgroundPagina } from '../../redux/modules/paginaCompleta'
import imageCompression from 'browser-image-compression';
import { customSnackbar } from '../CustomSnackbar/customSnackbar'
import { ButtonRemoverBackground } from '../ButtonRemoverBackground'
import { apiPutBackgroundPagina } from '../../../api/pagina/putBackgroundPagina'

export function ButtonAlterarFotoBackground() {

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
        apiPutBackgroundPagina(
          paginaCompleta.idPagina,
          reader.result!.toString(),
          paginaCompleta.aparencia.foto,
          paginaCompleta.aparencia.cor.botao,
          paginaCompleta.aparencia.cor.texto,
          paginaCompleta.aparencia.cor.fundo,
          paginaCompleta.aparencia.cor.textoBotao
        ).then(() => {
          dispatch(trocarBackgroundPagina(reader.result!.toString()))
          customSnackbar(translation("snackbar.alteracao_foto_sucesso"))
        }).catch((error) => {
          console.log(error)
        })
      }
    } catch (error) {
      console.error(error);
    }
    setOpenDialog(false);

  }

  return (
    <S.DivContent>
      <Button variant='outlined' color='primary' onClick={() => setOpenDialog(true)}>
        {translation("alterar_foto")}
      </Button>
      <GlobalDialog
        open={openDialog}
        actions={false}
        onClose={() => setOpenDialog(false)}>
        <S.DialogTitle mediaquery={mediaQuery} >
          {translation("dialog_background.alterar_background_pagina")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_background.informacao")}
        </S.DialogInfo>
        {paginaCompleta.aparencia.background && (
          <S.ComFoto src={paginaCompleta.aparencia.background} alt='foto-background' width='162px' height='162px' margin='0px 0px 32px 0px' />
        )}
        <S.DivBotoes>
          <ButtonRemoverBackground />
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

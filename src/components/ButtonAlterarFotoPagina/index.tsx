import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog'
import { Button } from '@material-ui/core'
import { useRedux } from '../../hooks/useRedux'
import { useHooks } from '../../hooks/useHooks'
import { adicionarFotoPagina } from '../../redux/modules/paginaCompleta'
import { ButtonRemoverFotoPagina } from '../ButtonRemoverFotoPagina'

export function ButtonAlterarFotoPagina() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginaCompleta } = useAppSelect

  const [openDialog, setOpenDialog] = useState(false)

  const fecharDialog = () => {
    setOpenDialog(false)
  }

  const uploadFoto = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files![0])
    reader.onload = () => {
      dispatch(adicionarFotoPagina({ foto: reader.result!.toString() }))
    }
    fecharDialog()
  }

  return (
    <S.DivContent>
      {paginaCompleta.aparencia.foto
        ? <S.ComFoto src={paginaCompleta.aparencia.foto} width='115px' height='115px' />
        : <S.SemFoto width='115px' height='115px'>{paginaCompleta.titulo.slice(0, 1)}</S.SemFoto>}
      <Button onClick={() => setOpenDialog(true)}>
        {translation("alterar_foto")}
      </Button>
      <GlobalDialog
        open={openDialog}
        onClose={fecharDialog}>
        <S.DialogTitle mediaquery={mediaQuery} >
          {translation("dialog_foto_pagina.alterar_foto_pagina")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_foto_pagina.informacao")}
        </S.DialogInfo>
        {paginaCompleta.aparencia.foto
          ? <S.ComFoto src={paginaCompleta.aparencia.foto} width='162px' height='162px' margin='0px 0px 32px 0px' />
          : <S.SemFoto width='162px' height='162px' margin='0px 0px 32px 0px'>{paginaCompleta.titulo.slice(0, 1)}</S.SemFoto>}
        <S.DivBotoes>
        <ButtonRemoverFotoPagina />
          <input
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            id="contained-button-file"
            type="file"
            onChange={(event) => uploadFoto(event)}
          />
          <label style={{ width: "50%" }} htmlFor="contained-button-file">
            <Button
              style={{ padding: "5px 15px" }}
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

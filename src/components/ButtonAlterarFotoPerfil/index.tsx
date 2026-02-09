import { ChangeEvent, useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog'
import { Button } from '@material-ui/core'
import { useHooks } from '../../hooks/useHooks'
import { ButtonRemoverFotoPerfil } from '../ButtonRemoverFotoPerfil'
import { useRedux } from '../../hooks/useRedux'
import { adicionaFotoUsuario } from '../../redux/modules/user'
import imageCompression from 'browser-image-compression';
import { customSnackbar } from '../CustomSnackbar/customSnackbar'

interface Props {
  onFotoChange: (newFoto: string) => void;
  foto: string
  nome: string
}

export function ButtonAlterarFotoPerfil({ foto, onFotoChange, nome }: Props) {

  const { mediaQuery, translation } = useHooks()
  const { dispatch } = useRedux()

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
        dispatch(adicionaFotoUsuario(reader.result!.toString()));
        onFotoChange(reader.result!.toString());
        customSnackbar(translation("snackbar.alteracao_foto_sucesso"))

      }
    } catch (error) {
      console.error(error);
    }
    setOpenDialog(false);

  }

  return (
    <S.DivContent>
      {foto
        ? <S.ComFoto src={foto} width='115px' height='115px' />
        : <S.SemFoto width='115px' height='115px'>{nome.slice(0, 1)}</S.SemFoto>}
      <Button color='primary' variant='contained' onClick={() => setOpenDialog(true)}>
        {translation("alterar_foto")}
      </Button>
      <GlobalDialog
        open={openDialog}
        actions={false}
        onClose={() => setOpenDialog(false)}  >
        <S.DialogTitle mediaquery={mediaQuery}>
          {translation("dialog_foto_conta.alterar_foto_perfil")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_foto_conta.informacao")}
        </S.DialogInfo>
        {foto
          ? <S.ComFoto src={foto} width='162px' height='162px' margin='0px 0px 32px 0px' />
          : <S.SemFoto width='162px' height='162px' margin='0px 0px 32px 0px'>{nome.slice(0, 1)}</S.SemFoto>}
        <S.DivBotoes>
          <ButtonRemoverFotoPerfil />
          <> <input
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            id="contained-button-file"
            type="file"
            onChange={(event) => uploadFoto(event)} />
            <label style={{ width: "100%" }} htmlFor="contained-button-file">
              <Button color="primary" variant="contained" fullWidth component="span" >
                {translation("alterar_foto")}
              </Button>
            </label>
          </>
        </S.DivBotoes>
      </GlobalDialog>
    </S.DivContent>
  )
}

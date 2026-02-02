import { useState } from 'react'
import iconeTrash from '../../assets/iconeTrash.svg';
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog';
import { useHooks } from '../../hooks/useHooks';
import { useRedux } from '../../hooks/useRedux';
import { removerLink } from '../../redux/modules/paginaCompleta';
import { customSnackbar } from '../CustomSnackbar/customSnackbar';
import { apiDeleteLink } from '../../../api/deleteLink';

export function ButtonExcluirLink({ idLink }: { idLink: string }) {

  const { mediaQuery, translation } = useHooks()
  const { dispatch, useAppSelect } = useRedux()

  const { user, identificadores } = useAppSelect

  const [openDialog, setOpenDialog] = useState(false)
  const [deletandoLink, setDeletandoLink] = useState(false)

  const excluirLink = () => {
    setDeletandoLink(true)
    apiDeleteLink(user.idConta, identificadores.idPaginaSendoEditada, idLink)
      .then(() => {
        dispatch(removerLink({ idLink }))
        customSnackbar(translation("snackbar.sucesso_excluir_link"))
        setDeletandoLink(false)
      })
      .catch((error) => {
        setDeletandoLink(false)
        console.log(error)
      })
  }

  return (
    <>
      <div style={{ minHeight: "44px", marginLeft: "auto" }}>
        <S.BotaoExcluir className="botao-excluir" onClick={() => setOpenDialog(true)}>
          <img src={iconeTrash} alt="botao lixeira" />
        </S.BotaoExcluir>
      </div>
      <GlobalDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        funcaoConfirmar={excluirLink}
        inLoading={deletandoLink}
        funcaoCancelar={() => setOpenDialog(false)}
        textoCancelar={translation("cancelar")}
        textoConfirmar={translation("excluir")}>
        <S.DialogTitle mediaquery={mediaQuery}>
          {translation("dialog_excluir_link.excluir_link")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_excluir_link.informacao")}
        </S.DialogInfo>
      </GlobalDialog>
    </>
  )
}

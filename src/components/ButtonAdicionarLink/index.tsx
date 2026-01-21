import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { GlobalDialog } from '../GlobalDialog'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import { adicionarLinks } from '../../redux/modules/paginaCompleta'
import { updateLinksPagina } from '../../redux/modules/paginas'
import { customSnackbar } from '../CustomSnackbar/customSnackbar'

export function ButtonAdicionarLink() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginaCompleta } = useAppSelect

  const [openModal, setOpenModal] = useState(false)
  const [dadosLink, setDadosLink] = React.useState<{ titulo: string, url: string }>({ url: '', titulo: '' })

  useEffect(() => {
    dispatch(updateLinksPagina({ idPagina: paginaCompleta.idPagina, links: paginaCompleta.links }))
  }, [paginaCompleta.links])

  const criarLink = () => {
    dispatch(adicionarLinks({
      idLink: (Math.random() + 1).toString(36).substring(2),
      ativo: true,
      descricao: dadosLink.titulo,
      url: dadosLink.url,
      ordem: paginaCompleta.links.length
    }))
    customSnackbar(translation("snackbar.sucesso_criar_link"))
    onClose()
  }

  const onOpen = () => {
    setDadosLink({ titulo: "", url: "" })
    setOpenModal(true)
  }

  const onClose = () => {
    setDadosLink({ titulo: "", url: "" })
    setOpenModal(false)
  }

  return (
    <>
      <S.ButtonAdicionar color='primary' variant='contained' onClick={onOpen}>
        {translation("tela_editar.adicionar_link")}
      </S.ButtonAdicionar>
      <GlobalDialog
        onClose={onClose}
        open={openModal}
        funcaoConfirmar={criarLink}
        funcaoCancelar={onClose}
        textoCancelar={translation("cancelar")}
        textoConfirmar={translation("dialog_criar_link.criar_link")}
        disabledConfirmation={!dadosLink.url || !dadosLink.titulo} >
        <S.DialogTitle mediaquery={mediaQuery}>
          {translation("dialog_criar_link.criar_link")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_criar_link.informacao")}
        </S.DialogInfo>
        <S.Topicos color='#35424F'>
          {translation("dialog_criar_link.titulo")}
        </S.Topicos>
        <S.StyledInput
        fullWidth
          placeholder={translation("dialog_criar_link.insira_titulo")}
          name="titulo"
          variant="outlined"
          defaultValue={dadosLink.titulo}
          onChange={(event) => setDadosLink({ titulo: event?.target.value, url: dadosLink.url })} />
        <S.Topicos >{translation("url")}</S.Topicos>
        <S.StyledInput
          fullWidth
          placeholder={translation("dialog_criar_link.insira_url")}
          name="url"
          variant="outlined"
          defaultValue={dadosLink.url}
          onChange={(event) => setDadosLink({ titulo: dadosLink.titulo, url: event?.target.value })} />
        <div style={{ height: `${mediaQuery === "true" ?  "32px" : "36px"}` }} />
      </GlobalDialog>
    </>
  )
}

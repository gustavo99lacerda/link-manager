import { Button } from "@material-ui/core"
import { useHooks } from "../../hooks/useHooks"
import { GlobalDialog } from "../GlobalDialog"
import React, { useState } from "react"
import * as S from './styles'
import { useRedux } from "../../hooks/useRedux"
import { addPagina } from "../../redux/modules/paginas"
import { customSnackbar } from "../CustomSnackbar/customSnackbar"
import { apiAdicionarPagina } from "../../../api/postPagina"

interface DadosPagina {
  url: string;
  titulo: string;
}

export function ButtonAdicionarPagina() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { user, paginas } = useAppSelect

  const [openModal, setOpenModal] = useState(false)
  const [criandoPagina, setCriandoPagina] = useState(false)
  const [dadosPagina, setDadosPagina] = React.useState<Partial<DadosPagina>>({ url: '', titulo: '' })
  const [erro, setErro] = React.useState(false)


  const onOpen = () => {
    setDadosPagina({ titulo: "", url: "" })
    setOpenModal(true)
    setErro(false)

  }
  const onClose = () => {
    setDadosPagina({ titulo: "", url: "" })
    setOpenModal(false)
    setErro(false)

  }

  const criarNovaPagina = () => {

    if (paginas.filter(pagina => pagina.url === dadosPagina.url).length > 0) {
      setErro(true)
    } else {
      setCriandoPagina(true)
      const url = dadosPagina.url!.replace(/ /g, "")
      apiAdicionarPagina(dadosPagina.titulo!, user.idConta, url, user.foto)
        .then((response: any) => {
          dispatch(addPagina({
            idPagina: response.data.idPagina,
            url: url,
            titulo: dadosPagina.titulo!,
          }))
          customSnackbar(translation("snackbar.sucesso_criar_pagina"))
          setDadosPagina({ titulo: "", url: "" })
          setCriandoPagina(false)
          onClose()
        })
        .catch((error) => {
          console.log(error)
          setCriandoPagina(false)
        })
    }
  }

  return (
    <>
      <Button color="primary" variant="contained" onClick={onOpen}>
        {translation("tela_minhas_paginas.adicionar")}
      </Button>
      <GlobalDialog
        onClose={onClose}
        open={openModal}
        inLoading={criandoPagina}
        funcaoConfirmar={criarNovaPagina}
        textoCancelar='Cancelar'
        textoConfirmar='Criar página'
        disabledConfirmation={!dadosPagina.url || !dadosPagina.titulo}>
        <S.DialogTitle mediaquery={mediaQuery} >
          {translation("dialog_criar_pagina.criar_pagina")}
        </S.DialogTitle>
        <S.DialogInfo mediaquery={mediaQuery}>
          {translation("dialog_criar_pagina.informacao")}
        </S.DialogInfo>
        <S.Topicos color="#35424F">{translation("dialog_criar_pagina.titulo")}</S.Topicos>
        <S.StyledInput
          bordercolor={erro ? "#BB0A30" : "#4D5C6C"}
          fullWidth
          name="titulo"
          variant="outlined"
          defaultValue={dadosPagina.titulo}
          placeholder={translation("dialog_criar_pagina.titulo")}
          onChange={(event) => setDadosPagina({ titulo: event?.target.value, url: dadosPagina.url })} />
        <S.Topicos color={erro ? "#BB0A30" : "#35424F"}>{translation("url")}</S.Topicos>
        <S.StyledInput
          bordercolor={erro ? "#BB0A30" : "#4D5C6C"}
          fullWidth
          name="url"
          variant="outlined"
          placeholder={translation("url")}
          defaultValue={dadosPagina.url}
          onChange={(event) => setDadosPagina({ url: event?.target.value, titulo: dadosPagina.titulo })} />
        {erro ? <S.DivErro><S.IconeErro /><span>{translation("dialog_criar_pagina.erro")}</span></S.DivErro> : null}
        <div style={{ height: `${mediaQuery ? "32px" : "36px"}` }} />
      </GlobalDialog>
    </>
  )
}

import { Button } from "@material-ui/core"
import { useHooks } from "../../hooks/useHooks"
import { GlobalDialog } from "../GlobalDialog"
import React, { useState } from "react"
import * as S from './styles'
import { useRedux } from "../../hooks/useRedux"
import { addPagina } from "../../redux/modules/paginas"
import { customSnackbar } from "../CustomSnackbar/customSnackbar"

interface DadosPagina {
  url: string;
  titulo: string;
}

export function ButtonAdicionarPagina() {

  const { mediaQuery, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { idConta } = useAppSelect.user

  const [openModal, setOpenModal] = useState(false)
  const [dadosPagina, setDadosPagina] = React.useState<Partial<DadosPagina>>({ url: '', titulo: '' })

  const onOpen = () => {
    setDadosPagina({ titulo: "", url: "" })
    setOpenModal(true)
  }
  const onClose = () => {
    setDadosPagina({ titulo: "", url: "" })
    setOpenModal(false)
  }

  const criarNovaPagina = () => {
    const url = dadosPagina.url!.replace(/ /g, "")
    dispatch(addPagina({
      idPagina: (Math.random() + 1).toString(36).substring(2),
      idConta: idConta,
      titulo: dadosPagina.titulo!,
      ativo: true,
      aparencia: {
        foto: "",
        cor: {
          botao: "#FFFFFF",
          texto: "#000000",
          fundo: "#FFFFFF"
        }
      },
      links: [],
      url: url
    }))
    customSnackbar(translation("snackbar.sucesso_criar_pagina"))
    onClose()
  }

  return (
    <>
      <Button color="primary" variant="contained" onClick={onOpen}>
        {translation("tela_minhas_paginas.adicionar")}
      </Button>
      <GlobalDialog
        onClose={onClose}
        open={openModal}
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
        <S.Topicos>{translation("dialog_criar_pagina.titulo")}</S.Topicos>
        <S.StyledInput
          fullWidth
          name="titulo"
          variant="outlined"
          defaultValue={dadosPagina.titulo}
          placeholder={translation("dialog_criar_pagina.titulo")}
          onChange={(event) => setDadosPagina({ titulo: event?.target.value, url: dadosPagina.url })} />
        <S.Topicos>{translation("url")}</S.Topicos>
        <S.StyledInput
          fullWidth
          name="url"
          variant="outlined"
          placeholder={translation("url")}
          defaultValue={dadosPagina.url}
          onChange={(event) => setDadosPagina({ url: event?.target.value, titulo: dadosPagina.titulo })} />
      </GlobalDialog>
    </>
  )
}

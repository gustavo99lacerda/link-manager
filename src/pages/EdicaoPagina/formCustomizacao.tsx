import React, { useState } from 'react'
import * as Yup from 'yup'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { useRouter } from '../../hooks/useRouter'
import botaoRedondo from '../../assets/botaoRedonda.svg'
import botaoReto from '../../assets/botaoReta.svg'
import botaoSemiredondo from '../../assets/botaoSemirendonda.svg'
import { atualizaAparenciaPagina, atualizaDadosPagina, trocarEstiloBotao } from '../../redux/modules/paginaCompleta'

interface Props {
  index: number;
  value: number;
}
export function FormCustomizacao({  }: Props) {

  // useUnload((e: { preventDefault: () => void; returnValue: string }) => {
  //   e.preventDefault();
  //   e.returnValue = '';
  // })

  // const { mediaQuery, formRef, snackbar, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()
  const { history } = useRouter()

  const { titulo, url, aparencia } = useAppSelect.paginaCompleta
  const { idPaginaSendoEditada } = useAppSelect.identificadores

  const [carregando, setCarregando] = useState(false)
  const [fotoInicial] = useState(aparencia.foto)

  const validacaoFormulario = Yup.object().shape({
    // titulo: Yup.string().required(translation("formulario_customizacao.informe_titulo")),
    // url: Yup.string().required(translation("formulario_customizacao.informe_url")),
  })

  const salvarAparencia = async (dadosForm: { titulo: string, preurl: string, url: string, fundo: string, texto: string, botao: string }) => {
    // formRef.current?.setErrors({})
    // setCarregando(true)

    // try {
    //   await validacaoFormulario.validate(dadosForm, { abortEarly: false })

    //   if (dadosForm.titulo !== titulo || dadosForm.url !== url) {
    //     apiAlterarTituloUrl(idPaginaSendoEditada,
    //       dadosForm.titulo,
    //       dadosForm.url !== url ? dadosForm.url.replace(/ /g, "") : null)
    //       .then(() => {
    //         dispatch(atualizaDadosPagina({ titulo: dadosForm.titulo, url: dadosForm.url.replace(/ /g, "") }))
    //         apiAlteraAparencia(idPaginaSendoEditada,
    //           dadosForm.botao,
    //           dadosForm.texto,
    //           dadosForm.fundo,
    //           aparencia.foto !== fotoInicial && aparencia.foto !== "" ? aparencia.foto : "",
    //           aparencia.bordaBotao)
    //           .then((_response) => {
    //             setCarregando(false)
    //             dispatch(atualizaAparenciaPagina({ bordaBotao: aparencia.bordaBotao, foto: aparencia.foto, cor: { botao: dadosForm.botao, fundo: dadosForm.fundo, texto: dadosForm.texto } }))
    //             snackbar(translation("snackbar.sucesso_alteracoes"))
    //           })
    //           .catch((error) => {
    //             const { errors } = error.response.data
    //             snackbar(error.response.data.errors[0].mensagemUsuario)
    //             notificaAirbrake(`Erro ao alterar a aparencia da página. Erros: ${errors[0].mensagemDesenvolvedor}`)
    //             setCarregando(false)
    //           })
    //       })
    //       .catch((error) => {
    //         const { errors } = error.response.data
    //         snackbar(error.response.data.errors[0].mensagemUsuario)
    //         notificaAirbrake(`Erro ao alterar titulo ou url da página. Erros: ${errors[0].mensagemDesenvolvedor}`)
    //         setCarregando(false)
    //       })
    //   } else {
    //     apiAlteraAparencia(idPaginaSendoEditada,
    //       dadosForm.botao,
    //       dadosForm.texto,
    //       dadosForm.fundo,
    //       aparencia.foto !== fotoInicial && aparencia.foto !== "" ? aparencia.foto : "",
    //       aparencia.bordaBotao)
    //       .then((_response) => {
    //         setCarregando(false)
    //         dispatch(atualizaAparenciaPagina({ bordaBotao: aparencia.bordaBotao, foto: aparencia.foto, cor: { botao: dadosForm.botao, fundo: dadosForm.fundo, texto: dadosForm.texto } }))
    //         snackbar(translation("snackbar.sucesso_alteracoes"))
    //       })
    //       .catch((error) => {
    //         const { errors } = error.response.data
    //         snackbar(error.response.data.errors[0].mensagemUsuario)
    //         notificaAirbrake(`Erro ao alterar a aparencia da página. Erros: ${errors[0].mensagemDesenvolvedor}`)
    //         setCarregando(false)
    //       })
    //   }

    // } catch (error) {
    //   setCarregando(false)
    //   if (error instanceof Yup.ValidationError) {
    //     const message: Record<string, string> = {}
    //     error.inner.forEach((err) => {
    //       message[err.path!] = err.message
    //     })
    //     formRef.current!.setErrors(message)
    //   }
    // }
  }


  return (
    <></>
    // <S.ContentForm overflow='auto'>

    //   <S.StyledForm display={index === value ? "flex" : "none"} ref={formRef} onSubmit={salvarAparencia}>
    //     <S.ContentForm overflow='auto'>
    //       <ButtonAlterarFotoPagina />
    //       <S.Topicos margin="1rem auto 0.5rem 0" desktopoumobile={mediaQuery}>{translation("formulario_customizacao.titulo")}</S.Topicos>
    //       <S.StyledInput
    //         defaultValue={titulo}
    //         name="titulo"
    //         variant="outlined"
    //       />
    //       <S.Topicos margin="1rem auto 0.5rem 0" desktopoumobile={mediaQuery}>{translation("url")}</S.Topicos>
    //       <S.DivInputs>
    //         <S.StyledInput
    //           width={retornaTamanhoCampo()}
    //           value={process.env.REACT_APP_PRE_URL}
    //           radius="0.25rem 0rem 0rem 0.25rem"
    //           name="preurl"
    //           variant="outlined"
    //         />
    //         <S.StyledInput
    //           defaultValue={url}
    //           width="100%"
    //           radius="0rem 0.25rem 0.25rem 0rem"
    //           name="url"
    //           variant="outlined"
    //         />
    //       </S.DivInputs>
    //       <S.Topicos desktopoumobile={mediaQuery} margin="1.5rem auto 0.5rem 0">{translation("formulario_customizacao.cor_fundo")}</S.Topicos>
    //       <S.DivInputs>
    //         <S.StyledInput
    //           value={aparencia.cor.fundo ? aparencia.cor.fundo : "#FFFFFF"}
    //           width="100%"
    //           name="fundo"
    //           variant="outlined"
    //         />
    //         <ButtonPicker parte='cor-fundo' backgroundcolor={aparencia.cor.fundo} />
    //       </S.DivInputs>
    //       <S.Topicos desktopoumobile={mediaQuery} margin="1.5rem auto 0.5rem 0">{translation("formulario_customizacao.cor_texto")}</S.Topicos>
    //       <S.DivInputs>
    //         <S.StyledInput
    //           value={aparencia.cor.texto}
    //           width="100%"
    //           name="texto"
    //           variant="outlined"
    //         />
    //         <ButtonPicker parte='cor-texto' backgroundcolor={aparencia.cor.texto} />
    //       </S.DivInputs>
    //       <S.Topicos desktopoumobile={mediaQuery} margin="1.5rem auto 0.5rem 0">{translation("formulario_customizacao.cor_botao")}</S.Topicos>
    //       <S.DivInputs>
    //         <S.StyledInput
    //           value={aparencia.cor.botao}
    //           width="100%"
    //           name="botao"
    //           variant="outlined"
    //         />
    //         <ButtonPicker parte='cor-botao' backgroundcolor={aparencia.cor.botao} />
    //       </S.DivInputs>
    //       <S.Topicos desktopoumobile={mediaQuery} margin="1.5rem auto 0.5rem 0">  {translation("formulario_customizacao.estilo_botoes")}</S.Topicos>
    //       <S.DivInputs>
    //         <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("RETA"))}><img src={botaoReto} alt='estilo-botao-reto' /></S.ButtonEstilo>
    //         <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("SEMIREDONDA"))}><img src={botaoSemiredondo} alt='estilo-botao-semirendondo' /></S.ButtonEstilo>
    //         <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("REDONDA"))}><img src={botaoRedondo} alt='estilo-botao-redondo' /></S.ButtonEstilo>
    //       </S.DivInputs>
    //     </S.ContentForm>
    //     <S.DivButtons>
    //       {carregando
    //         ? <SG.Loader margin="auto" />
    //         : <>
    //           <SG.ButtonTransparent type="button" width='100%' height='38px' onClick={() => history.push("/pre-visualizacao")}>
    //             {translation("formulario_customizacao.visualizar")}
    //           </SG.ButtonTransparent>
    //           <SG.ButtonBlue type="submit" width='100%' height='38px'>
    //             {translation("formulario_customizacao.salvar")}
    //           </SG.ButtonBlue>
    //         </>}
    //     </S.DivButtons>
    //   </S.StyledForm>
    // </S.ContentForm>
  )
}

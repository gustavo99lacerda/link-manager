import * as Yup from 'yup'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { ButtonPicker } from './colorPicker'
import Input from '../../components/UnformComponents/Input'
import { ButtonAlterarFotoPagina } from '../../components/ButtonAlterarFotoPagina'
import { Button, CircularProgress } from '@material-ui/core'
import { apiPutPagina } from '../../../api/pagina/putPagina'
import { customSnackbar } from '../../components/CustomSnackbar/customSnackbar'
import { useState } from 'react'
import { setPaginaCompleta } from '../../redux/modules/paginaCompleta'
import { apiGetPaginaUrl } from '../../../api/pagina/getPaginaUrl'

interface Props {
  index: number;
  value: number;
}
export function FormCustomizacao({ index, value }: Props) {

  const { formRef, translation } = useHooks()
  const { useAppSelect, dispatch } = useRedux()

  const { paginaCompleta } = useAppSelect

  const [carregando, setCarregando] = useState(false)

  const validacaoFormulario = Yup.object().shape({
    titulo: Yup.string().required(translation("formulario_customizacao.informe_titulo")),
    url: Yup.string().required(translation("formulario_customizacao.informe_url")),
  })

  const salvarAparencia = async (dadosForm: { titulo: string, url: string, fundo: string, texto: string, botao: string, textoBotao: string }) => {
    formRef.current?.setErrors({})
    setCarregando(true)

    try {
      await validacaoFormulario.validate(dadosForm, { abortEarly: false })

      apiGetPaginaUrl(dadosForm.url)
        .then((responsePagina: any) => {
          const dataPagina = responsePagina.data[0]
          if (dataPagina && dataPagina.idPagina !== paginaCompleta.idPagina) {
            customSnackbar(translation("snackbar.pagina_existente"))
            setCarregando(false)
            return
          } else {
            requisicaoApiPostPagina(dadosForm)
          }

        })
        .catch((error) => {
          if (error.response?.status === 404) {
            requisicaoApiPostPagina(dadosForm)
          } else {
            console.log(error)
            setCarregando(false)
          }
        })

    } catch (error) {
      setCarregando(false)

      if (error instanceof Yup.ValidationError) {
        const message: Record<string, string> = {}
        error.inner.forEach((err) => {
          message[err.path!] = err.message
        })
        formRef.current!.setErrors(message)
      }
    }
  }

  const requisicaoApiPostPagina = (dadosForm: { titulo: string, url: string, fundo: string, texto: string, botao: string, textoBotao: string }) => {
    apiPutPagina(
      paginaCompleta.idPagina,
      dadosForm.url,
      paginaCompleta.aparencia.foto,
      dadosForm.botao,
      dadosForm.texto,
      dadosForm.fundo,
      dadosForm.textoBotao,
      dadosForm.titulo
    ).then(() => {
      setCarregando(false)
      dispatch(setPaginaCompleta({
        ...paginaCompleta,
        titulo: dadosForm.titulo,
        url: dadosForm.url,
        aparencia: {
          ...paginaCompleta.aparencia,
          cor: {
            ...paginaCompleta.aparencia.cor,
            fundo: dadosForm.fundo,
            texto: dadosForm.texto,
            botao: dadosForm.botao,
            textoBotao: dadosForm.textoBotao
          }
        }
      }))
      customSnackbar(translation("snackbar.sucesso_alteracoes"))
      setCarregando(false)
    }).catch((error) => {
      setCarregando(false)
      console.log(error)
    })
  }

  return (
    <S.ContentForm >
      <S.StyledForm
        display={index === value ? "flex" : "none"}
        ref={formRef}
        onSubmit={salvarAparencia} >
        <S.ContentForm>
          <ButtonAlterarFotoPagina />
          <S.Topicos margin="16px auto 8px 0" >{translation("formulario_customizacao.titulo")}</S.Topicos>
          <Input
            defaultValue={paginaCompleta.titulo}
            name="titulo"
            variant="outlined" />
          <S.Topicos margin="16px auto 8px 0">{translation("url")}</S.Topicos>
          <Input
            defaultValue={paginaCompleta.url}
            name="url"
            variant="outlined" />
          <S.Topicos margin="24px auto 8px 0">{translation("formulario_customizacao.cor_fundo")}</S.Topicos>
          <S.DivInputs>
            <Input
              value={paginaCompleta.aparencia.cor.fundo ? paginaCompleta.aparencia.cor.fundo : "#FFFFFF"}
              width="100%"
              name="fundo"
              variant="outlined" />
            <ButtonPicker parte='cor-fundo' backgroundcolor={paginaCompleta.aparencia.cor.fundo} />
          </S.DivInputs>

          <S.Topicos margin="24px auto 8px 0">{translation("formulario_customizacao.cor_texto")}</S.Topicos>
          <S.DivInputs>
            <Input
              value={paginaCompleta.aparencia.cor.texto}
              width="100%"
              name="texto"
              variant="outlined" />
            <ButtonPicker parte='cor-texto' backgroundcolor={paginaCompleta.aparencia.cor.texto} />
          </S.DivInputs>

          <S.Topicos margin="24px auto 8px 0">{translation("formulario_customizacao.cor_texto_botao")}</S.Topicos>
          <S.DivInputs>
            <Input
              value={paginaCompleta.aparencia.cor.textoBotao}
              width="100%"
              name="textoBotao"
              variant="outlined" />
            <ButtonPicker parte='cor-texto-botao' backgroundcolor={paginaCompleta.aparencia.cor.textoBotao} />
          </S.DivInputs>

          <S.Topicos margin="24px auto 8px 0">{translation("formulario_customizacao.cor_botao")}</S.Topicos>
          <S.DivInputs>
            <Input
              value={paginaCompleta.aparencia.cor.botao}
              width="100%"
              name="botao"
              variant="outlined" />
            <ButtonPicker parte='cor-botao' backgroundcolor={paginaCompleta.aparencia.cor.botao} />
          </S.DivInputs>
        </S.ContentForm>
        <S.DivButtons>
          {carregando
            ? <CircularProgress color="primary" style={{ margin: "auto" }} />
            : <> <Button onClick={() => window.open(`${import.meta.env.VITE_BASE_URL}#/${paginaCompleta.url}`, '_blank')} variant='outlined' color='primary' fullWidth >
              {translation("formulario_customizacao.acessar")}
            </Button>
              <Button type="submit" variant='contained' color='primary' fullWidth >
                {translation("formulario_customizacao.salvar")}
              </Button></>}
        </S.DivButtons>
      </S.StyledForm>
    </S.ContentForm>
  )
}

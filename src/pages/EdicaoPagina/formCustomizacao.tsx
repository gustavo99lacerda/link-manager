import * as Yup from 'yup'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import { ButtonPicker } from './colorPicker'
import Input from '../../components/UnformComponents/Input'
import { ButtonAlterarFotoPagina } from '../../components/ButtonAlterarFotoPagina'
import { Button, CircularProgress } from '@material-ui/core'
import { useRouter } from '../../hooks/useRouter'
import { apiPutPagina } from '../../../api/pagina/putPagina'
import { customSnackbar } from '../../components/CustomSnackbar/customSnackbar'
import { useState } from 'react'

interface Props {
  index: number;
  value: number;
}
export function FormCustomizacao({ index, value }: Props) {

  const { formRef, translation } = useHooks()
  const { history } = useRouter()
  const { useAppSelect} = useRedux()

  const { paginaCompleta } = useAppSelect

  const [carregando, setCarregando] = useState(false)

  const validacaoFormulario = Yup.object().shape({
    titulo: Yup.string().required(translation("formulario_customizacao.informe_titulo")),
    url: Yup.string().required(translation("formulario_customizacao.informe_url")),
  })

  const salvarAparencia = async (dadosForm: { titulo: string, url: string, fundo: string, texto: string, botao: string }) => {
    formRef.current?.setErrors({})
    setCarregando(true)

    try {
      await validacaoFormulario.validate(dadosForm, { abortEarly: false })
      apiPutPagina(
        paginaCompleta.idPagina,
        dadosForm.url,
        paginaCompleta.aparencia.foto,
        dadosForm.botao,
        dadosForm.texto,
        dadosForm.fundo,
        dadosForm.titulo
      ).then(() => {
        setCarregando(false)

        customSnackbar(translation("snackbar.sucesso_alteracoes"))

      }).catch((error) => {
        setCarregando(false)

        console.log(error)
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
            : <> <Button onClick={() => history.push("/visualizacao")} variant='outlined' color='primary' fullWidth >
              {translation("formulario_customizacao.visualizar")}
            </Button>
              <Button type="submit" variant='contained' color='primary' fullWidth >
                {translation("formulario_customizacao.salvar")}
              </Button></>}
        </S.DivButtons>
      </S.StyledForm>
    </S.ContentForm>
  )
}

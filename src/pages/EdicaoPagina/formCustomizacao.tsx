import * as Yup from 'yup'
import { useHooks } from '../../hooks/useHooks'
import { useRedux } from '../../hooks/useRedux'
import * as S from './styles'
import botaoRedondo from '../../assets/botaoRedonda.svg'
import botaoReto from '../../assets/botaoReta.svg'
import botaoSemiredondo from '../../assets/botaoSemirendonda.svg'
import { trocarEstiloBotao } from '../../redux/modules/paginaCompleta'
import { ButtonPicker } from './colorPicker'
import Input from '../../components/UnformComponents/Input'
import { ButtonAlterarFotoPagina } from '../../components/ButtonAlterarFotoPagina'
import { Button } from '@material-ui/core'
import { updatePaginaNasPaginas } from '../../redux/modules/paginas'

interface Props {
  index: number;
  value: number;
}
export function FormCustomizacao({ index, value }: Props) {

  const { formRef, translation } = useHooks()
  const { useAppSelect, dispatch, } = useRedux()

  const { paginaCompleta } = useAppSelect

  const validacaoFormulario = Yup.object().shape({
    titulo: Yup.string().required(translation("formulario_customizacao.informe_titulo")),
    url: Yup.string().required(translation("formulario_customizacao.informe_url")),
  })

  const salvarAparencia = async (dadosForm: { titulo: string, url: string, fundo: string, texto: string, botao: string }) => {
    console.log("entrou")
    formRef.current?.setErrors({})
    try {
      console.log("entrou2")
      console.log(dadosForm)
      await validacaoFormulario.validate(dadosForm, { abortEarly: false })
      console.log("entrou3")
      dispatch(updatePaginaNasPaginas({
        ...paginaCompleta,
        titulo: dadosForm.titulo,
        url: dadosForm.url,
        aparencia: {
          ...paginaCompleta.aparencia,
          cor: {
            fundo: dadosForm.fundo,
            texto: dadosForm.texto,
            botao: dadosForm.botao
          }
        }
      }))
      console.log("Salvo com sucesso")
    } catch (error) {
      console.log("errou1")

      if (error instanceof Yup.ValidationError) {
        console.log("errou2")
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
          <S.Topicos margin="24px auto 8px 0">  {translation("formulario_customizacao.estilo_botoes")}</S.Topicos>
          <S.DivInputs>
            <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("0px"))}><img src={botaoReto} alt='estilo-botao-reto' /></S.ButtonEstilo>
            <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("14px"))}><img src={botaoSemiredondo} alt='estilo-botao-semirendondo' /></S.ButtonEstilo>
            <S.ButtonEstilo onClick={() => dispatch(trocarEstiloBotao("20px"))}><img src={botaoRedondo} alt='estilo-botao-redondo' /></S.ButtonEstilo>
          </S.DivInputs>
        </S.ContentForm>
        <S.DivButtons>
          <Button type="submit" fullWidth >
            {translation("formulario_customizacao.salvar")}
          </Button>
        </S.DivButtons>
      </S.StyledForm>
    </S.ContentForm>
  )
}

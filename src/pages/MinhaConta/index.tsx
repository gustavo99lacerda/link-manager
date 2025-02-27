import { useEffect, useState } from 'react'
import { useHooks } from '../../hooks/useHooks'
import * as Yup from 'yup'
import imagemMinhaConta from '../../assets/minhaConta.svg'
import * as S from './styles'
import { useRedux } from '../../hooks/useRedux'
import { Button } from '@material-ui/core';
import { MenuLateral } from '../../components/MenuLateral'
import { Header } from '../../components/Header'
import Input from '../../components/UnformComponents/Input'
import { ButtonAlterarFotoPerfil } from '../../components/ButtonAlterarFotoPerfil'
import { setUser } from '../../redux/modules/user'
import { customSnackbar } from '../../components/CustomSnackbar/customSnackbar'

export function MinhaConta() {

  const { mediaQuery, translation, formRef } = useHooks()
  const { useAppSelect, dispatch } = useRedux()
  const { user } = useAppSelect

  const [dadosConta, setDadosConta] = useState<typeof user>({ ...user })

  useEffect(() => {
    setDadosConta({ ...user })
  }, [user])

  const validaFormulario = Yup.object().shape({
    nome: Yup.string().required(translation("tela_conta.nome_vazio"))
  })

  const salvarFormulario = async (dadosForm: { nome: string }) => {
    formRef.current?.setErrors({})
    try {
      await validaFormulario.validate(dadosForm, { abortEarly: false })
      dispatch(setUser({ ...dadosConta, nome: dadosForm.nome, foto: dadosConta.foto }))
      customSnackbar(translation("snackbar.sucesso_alteracoes"))

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const message: Record<string, string> = {}
        error.inner.forEach((err: Yup.ValidationError) => {
          message[err.path!] = err.message
        })
        formRef.current!.setErrors(message)
      }
    }
  }
  const trocaFoto = (novaFoto: string) => {
    setDadosConta((prevDadosConta) => ({ ...prevDadosConta, foto: novaFoto }))
  }

  return (
    <S.Content mediaquery={mediaQuery}>
      {mediaQuery === "true" ? <MenuLateral /> : <Header />}
      <S.DivForm overflow='auto'>
        <S.Form ref={formRef} onSubmit={salvarFormulario} mediaquery={mediaQuery}>
          <S.DivForm>
            <S.Title mediaquery={mediaQuery}>{translation("minha_conta")}</S.Title>
            <ButtonAlterarFotoPerfil foto={dadosConta.foto} nome={dadosConta.nome} onFotoChange={trocaFoto} />
            <S.Topicos
              margin={mediaQuery === "true" ? "50px auto 8px 0" : "16px auto 8px 0"}>
              {translation("tela_conta.nome")}
            </S.Topicos>
            <Input
              width="100%"
              variant="outlined"
              name="nome"
              defaultValue={dadosConta.nome}
              size="small" />
            <S.Topicos
              margin={mediaQuery === "true" ? "16px auto 8px 0" : "16px auto 8px 0"}>
              {translation("tela_conta.email")}
            </S.Topicos>
            <Input
              disabled
              width="100%"
              variant="outlined"
              name='email'
              value={dadosConta.email}
              size="small"
              margin='0px 0px 48px 0px' />
          </S.DivForm>
          <S.DivButtons>
            <Button color='primary' variant='contained' type='submit' fullWidth>
              {translation("tela_conta.salvar")}
            </Button>
          </S.DivButtons>
        </S.Form>
      </S.DivForm>
      {mediaQuery === "true"
        ? <S.DivImage>
          <img src={imagemMinhaConta} alt="imagem minha conta" />
        </S.DivImage>
        : null}
    </S.Content>
  )
}

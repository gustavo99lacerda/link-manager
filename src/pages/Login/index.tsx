import imagemLogin from '../../assets/imagemLogin.svg'
import imagemLoginMobile from '../../assets/imagemLoginMobile.svg'
import { useHooks } from '../../hooks/useHooks';
import * as S from './styles'
import { ArrowBackIos } from '@material-ui/icons';
import { Header } from '../../components/Header';
import { useRouter } from '../../hooks/useRouter';
import { useGoogleLogin } from '../../hooks/useGoogleLogin';
import { CircularProgress } from '@material-ui/core';
import { ButtonGoogle } from '../../components/ButtonGoogle';
import { useEffect, useState } from 'react';

export function Login() {

  const { mediaQuery, translation } = useHooks()
  const { useLogin, login } = useGoogleLogin()
  const { history } = useRouter()
  const [loading, setLoading] = useState(false)

    useEffect(() => {

    if (useLogin.email) {
      setLoading(false)
      console.log("Login bem sucedido:", useLogin)
    }

  }, [useLogin])


  return (
    <S.Content>
      {mediaQuery ? null : <Header />}
      <S.Body mediaQuery={mediaQuery}  >
        <S.DivItens mediaQuery={mediaQuery}>
          {mediaQuery === "true" ?
            <S.BotaoVoltar onClick={() => history.push("/")}>
              <ArrowBackIos fontSize="small" style={{ color: "#1F2933" }} />
            </S.BotaoVoltar>
            : null}
          <S.Title mediaQuery={mediaQuery} >{translation("tela_login.acesse_conta")}</S.Title>
          <S.BoxGoogleLogin mediaQuery={mediaQuery} >
            {useLogin.loading || loading
              ? <CircularProgress />
              : <ButtonGoogle texto={translation("tela_cadastro.entrar_google")} onClick={login} />}
          </S.BoxGoogleLogin>
        </S.DivItens>
        <S.DivItens mediaQuery={mediaQuery}>
          <S.Img src={mediaQuery === "true" ? imagemLogin : imagemLoginMobile} alt="Imagem ilustrativa login" />
        </S.DivItens>
      </S.Body>
    </S.Content>
  )
}

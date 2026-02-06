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
import { postUser } from '../../../api/postUser';
import { getUsers } from '../../../api/getUsers';
import { useRedux } from '../../hooks/useRedux';
import { setUser } from '../../redux/modules/user';
import { customSnackbar } from '../../components/CustomSnackbar/customSnackbar';

export function Login() {

  const { mediaQuery, translation } = useHooks()
  const { dispatch } = useRedux()
  const { useLogin, login } = useGoogleLogin()
  const { history } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (useLogin.email) {
      setLoading(true)
      const time = new Date();
      const outraData = new Date().setDate(time.getDate() + 1);
      getUsers()
        .then((response) => {
          const users = response.data;
          const userFound = users.filter((user: any) => user.email === useLogin.email);
          if (userFound.length > 0) {
            dispatch(setUser({
              email: useLogin.email!,
              idConta: userFound[0].id!,
              nome: useLogin.nome!,
              foto: useLogin.picture!,
              token: new Date(outraData).getTime(),
            }))
            history.push('/minhas-paginas')
          } else {
            postUser(useLogin.email, useLogin.nome!, useLogin.picture!)
              .then((response) => {
                dispatch(setUser({
                  email: response.data.email,
                  idConta: response.data.id!,
                  nome: response.data.nome,
                  foto: response.data.picture,
                  token: new Date(outraData).getTime(),

                }))
                history.push('/minhas-paginas')
              })
              .catch(() => {
                customSnackbar(translation("snackbar.erro_cadastrar_usuario"))
              })
              .finally(() => {
                setLoading(false)
              })
          }
        })
        .catch(() => {
          customSnackbar(translation("snackbar.erro_recuperar_usuarios"))
        }).finally(() => {
          setLoading(false)
        })

    }
  }, [useLogin])

  return (
    <S.Content>
      {mediaQuery === "true" ? null : <Header />}
      <S.Body mediaQuery={mediaQuery}  >
        <S.DivItens mediaQuery={mediaQuery} padding={mediaQuery === "true" ? "" : "12px 24px"}>
          {mediaQuery === "true" ?
            <S.BotaoVoltar onClick={() => history.push("/")}>
              <ArrowBackIos fontSize="small" style={{ color: "#1F2933" }} />
            </S.BotaoVoltar>
            : null}
          <S.Title mediaQuery={mediaQuery} >{translation("tela_login.acesse_conta")}</S.Title>
          <S.BoxGoogleLogin mediaQuery={mediaQuery} >
            {useLogin.loading || loading
              ? <CircularProgress />
              : <ButtonGoogle texto={translation("tela_login.entrar_google")} onClick={login} />}
          </S.BoxGoogleLogin>
          <S.SubTitle>{translation("tela_login.nao_possui_conta")}
          </S.SubTitle>
        </S.DivItens>
        <S.DivItens mediaQuery={mediaQuery}>
          <S.Img src={mediaQuery === "true" ? imagemLogin : imagemLoginMobile} alt="Imagem ilustrativa login" />
        </S.DivItens>
      </S.Body>
    </S.Content>
  )
}

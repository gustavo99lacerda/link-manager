import imagemLogin from '../../assets/imagemLogin.svg'
import imagemLoginMobile from '../../assets/imagemLoginMobile.svg'
import { useHooks } from '../../hooks/useHooks';
import * as S from './styles'
import { ArrowBackIos } from '@material-ui/icons';
import { Header } from '../../components/Header';
import { useRouter } from '../../hooks/useRouter';

export function Login() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()

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
          <S.SubTitle>{translation("tela_login.nao_possui_conta")} <a href="/cadastro">{translation("cadastre_se")}</a></S.SubTitle>
        </S.DivItens>
        <S.DivItens mediaQuery={mediaQuery}>
          <S.Img src={mediaQuery === "true" ? imagemLogin : imagemLoginMobile} alt="Imagem ilustrativa login" />
        </S.DivItens>
      </S.Body>
    </S.Content>
  )
}

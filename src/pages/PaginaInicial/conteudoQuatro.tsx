import { useHooks } from '../../hooks/useHooks';
import { useRedux } from '../../hooks/useRedux';
import { useRouter } from '../../hooks/useRouter';
import { setUser } from '../../redux/modules/user';
import * as S from './styles'

export function ConteudoQuatro() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()
  const { dispatch } = useRedux()

  const entrar = () => {
    dispatch(setUser({
      idConta: 'projectlinksmanager',
      email: 'gustavodasilvalacerda1999@gmail.com',
      nome: 'Gustavo da Silva Lacerda',
      foto: 'https://lh3.googleusercontent.com/a/ACg8ocJSbEJykoilFN04eroRkf2UmtWU_nL4LzbSA14fGgsKBamnlgKY=s360-c-no'
    }))
    history.push("/minhas-paginas")
  }

  return (
    <S.DivItensConteudoQuatro mediaquery={mediaQuery}>
      <S.TextoConteudoQuatro mediaquery={mediaQuery}>
        {translation("tela_inicial.junte_todos")}
      </S.TextoConteudoQuatro>
      <S.ButtonEntrarConteudoQuatro color='primary' variant='contained' mediaquery={mediaQuery}
        onClick={entrar} >
        {translation("entrar")}
      </S.ButtonEntrarConteudoQuatro>
    </S.DivItensConteudoQuatro>
  )
}

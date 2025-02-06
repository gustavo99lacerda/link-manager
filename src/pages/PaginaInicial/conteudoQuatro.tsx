import { useHooks } from '../../hooks/useHooks';
import { useRouter } from '../../hooks/useRouter';
import * as S from './styles'

export function ConteudoQuatro() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()

  return (
    <S.DivItensConteudoQuatro mediaquery={mediaQuery}>
      <S.TextoConteudoQuatro mediaquery={mediaQuery}>
        {translation("tela_inicial.junte_todos")}
      </S.TextoConteudoQuatro>
      <S.ButtonEntrarConteudoQuatro  mediaquery={mediaQuery}
        onClick={() => history.push("/minhas-paginas")} >
        {translation("tela_inicial.acessar_conta")}
      </S.ButtonEntrarConteudoQuatro>
    </S.DivItensConteudoQuatro>
  )
}

import { useHooks } from '../../hooks/useHooks';
import * as S from './styles.module'

export function ConteudoQuatro() {

  const { mediaQuery, translation } = useHooks()
  //const { history } = useRouter()

  return (
    <S.DivItensConteudoQuatro mediaquery={mediaQuery}>
      <S.TextoConteudoQuatro mediaquery={mediaQuery}>
        {translation("tela_inicial.junte_todos")}
      </S.TextoConteudoQuatro>
      <S.ButtonEntrarConteudoQuatro  mediaquery={mediaQuery}
        onClick={() => {}}>
        {translation("tela_inicial.acessar_conta")}
      </S.ButtonEntrarConteudoQuatro>
    </S.DivItensConteudoQuatro>
  )
}

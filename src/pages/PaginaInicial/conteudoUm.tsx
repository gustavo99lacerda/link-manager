import { useHooks } from '../../hooks/useHooks'
import imagemInicioMB from '../../assets/imagemInicioMB.svg'
import imagemInicioDK from '../../assets/imagemInicioDK.svg'
import * as S from './styles'
import { useRouter } from '../../hooks/useRouter'

export function ConteudoUm() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()

  return (
    <S.DivItensConteudoUm mediaquery={mediaQuery}>
      <S.DivTextosConteudoUm mediaquery={mediaQuery}>
        <h1>{translation("tela_inicial.todos_os_links")}</h1>
        <h2>{translation("tela_inicial.crie_sua_pagina")}</h2>
        <S.ButtonEntrar color='primary' variant='contained' mediaquery={mediaQuery}
          onClick={() => history.push("/login")}>
          {translation("entrar")}
        </S.ButtonEntrar>
      </S.DivTextosConteudoUm>
      <img src={mediaQuery === 'true' ? imagemInicioDK : imagemInicioMB} alt="imagem personagens" />
    </S.DivItensConteudoUm>
  )
}

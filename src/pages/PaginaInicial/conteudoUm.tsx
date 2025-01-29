import { useHooks } from '../../hooks/useHooks'
import imagemInicioMB from '../../assets/imagemInicioMB.svg'
import imagemInicioDK from '../../assets/imagemInicioDK.svg'
import * as S from './styles.module'

export function ConteudoUm() {

  const { mediaQuery, translation } = useHooks()

  return (
    <S.DivItensConteudoUm mediaquery={mediaQuery}>
      <S.DivTextosConteudoUm mediaquery={mediaQuery}>
        <h1>{translation("tela_inicial.todos_os_links")}</h1>
        <h2>{translation("tela_inicial.crie_sua_pagina")}</h2>
        <S.ButtonEntrar mediaquery={mediaQuery}
          onClick={() => { }}>
          {translation("tela_inicial.acessar_conta")}
        </S.ButtonEntrar>
      </S.DivTextosConteudoUm>
      <img src={mediaQuery ? imagemInicioDK : imagemInicioMB} alt="imagem personagens" />
    </S.DivItensConteudoUm>
  )
}

import { useHooks } from '../../hooks/useHooks'
import { IconePasso1, IconePasso2, IconePasso3 } from '../../assets/imgComponents'
import * as S from './styles.module'

export function ConteudoTres() {

  const { mediaQuery, translation } = useHooks()

  const dadosPassoAPasso = [
    {
      icon: <IconePasso1 />,
      texto: translation("tela_inicial.passo_1"),
      texto2: translation("tela_inicial.crie_sua_conta"),
      texto3: translation("tela_inicial.apos_efetuar_cadastro")
    },
    {
      icon: <IconePasso2 />,
      texto: translation("tela_inicial.passo_2"),
      texto2: translation("tela_inicial.insira_seus_links"),
      texto3: translation("tela_inicial.crie_uma_lista")
    },
    {
      icon: <IconePasso3 />,
      texto: translation("tela_inicial.passo_3"),
      texto2: translation("tela_inicial.compartilhe_sua_pagina"),
      texto3: translation("tela_inicial.divulgue")
    }
  ]

  return (
    <S.DivItensConteudoTres
      mediaquery={mediaQuery}
      id="como-funciona" >
      <S.TituloConteudoTres mediaquery={mediaQuery}>
        {translation("como_funciona")}
      </S.TituloConteudoTres>
      <S.SubTituloConteudoTres mediaquery={mediaQuery}>
        {translation("tela_inicial.seus_links")}
      </S.SubTituloConteudoTres>
      <S.ContentPassos mediaquery={mediaQuery}>
        {dadosPassoAPasso.map((item) => (
          <S.DivPassos key={item.texto}>
            <div className='div-icones'>{item.icon}</div>
            <div className="div-textos">
              <S.TextoUmPassos>{item.texto}</S.TextoUmPassos >
              <S.TextoDoisPassos mediaquery={mediaQuery}>{item.texto2}</S.TextoDoisPassos>
              <S.TextoTresPassos>{item.texto3}</S.TextoTresPassos>
            </div>
          </S.DivPassos>
        ))}
      </S.ContentPassos>
    </S.DivItensConteudoTres>
  )
}

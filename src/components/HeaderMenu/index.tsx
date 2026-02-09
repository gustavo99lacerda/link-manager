import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks';
import { useRouter } from '../../hooks/useRouter';
import { IconeLogout, IconeMinhaConta, IconeMinhasPaginas } from '../../assets/imgComponents';
import br from '../../assets/flags/br.svg';
import en from '../../assets/flags/en.svg';
import es from '../../assets/flags/es.svg';
import { useTranslation } from 'react-i18next';

export function HeaderMenu() {

  const { translation } = useHooks()
  const { history, path } = useRouter()
  const { i18n } = useTranslation()

  const [abrirMenu, setAbrirMenu] = useState(false)

    const listLanguages = [
    { img: br, language: "pt" },
    { img: en, language: "en" },
    { img: es, language: "es" },
  ]

  const rotasPublicas = [
    { onClick: () => history.push("/login"), texto: translation("entrar"), }
  ]

  const rotasPrivadas = [
    {
      onClick: () => history.push("/minhas-paginas"),
      icon: <IconeMinhasPaginas />,
      texto: translation("minhas_paginas")
    },
    {
      onClick: () => history.push("/minha-conta"),
      icon: <IconeMinhaConta />,
      texto: translation("minha_conta"),
    },
    {
      onClick: () => { localStorage.clear(); history.push("/") },
      icon: <IconeLogout />,
      texto: translation("sair")
    }
  ]

    const mudarLinguagem = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <S.StyledButton onClick={() => setAbrirMenu(true)}>
        <MenuIcon />
      </S.StyledButton>
      <S.DrawerStyled
        open={abrirMenu}
        onClose={() => setAbrirMenu(false)} >
        <S.BotaoFechar onClick={() => setAbrirMenu(false)}>
          <CloseIcon />
        </S.BotaoFechar>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#C4C4C4" }} />
        {path.pathname === "/" || path.pathname === "/login" || path.pathname === "/cadastro"
          ? <>
            {rotasPublicas.map((item) => (
              <S.Botao key={item.texto} onClick={item.onClick}>
                {item.texto}
              </S.Botao>
            ))}
          </>
          : <>
            {rotasPrivadas.map((item) => (
              <S.Botao key={item.texto} onClick={item.onClick}>
                {item.icon}
                {item.texto}
              </S.Botao>
            ))}
          </>
        }
        <S.LanguageText>{translation("selecionar_idioma")}</S.LanguageText>
        <S.DivFlags>
          {listLanguages.map((language) => (
            <S.ImgFlags key={language.language} src={language.img} onClick={() => mudarLinguagem(language.language)} />
          ))}
        </S.DivFlags>
      </S.DrawerStyled>
    </>
  )
}

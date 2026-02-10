import * as S from './styles'
import { useRouter } from '../../hooks/useRouter'
import { useHooks } from '../../hooks/useHooks'
import { IconeMinhaConta, IconeMinhasPaginas, IconeLogout } from '../../assets/imgComponents'
import br from '../../assets/flags/br.svg';
import en from '../../assets/flags/en.svg';
import es from '../../assets/flags/es.svg';
import { useTranslation } from 'react-i18next';

export function MenuLateral() {

  const { path, history } = useRouter()
  const { translation, mediaQuery } = useHooks()
  const { i18n } = useTranslation()

  const listLanguages = [
    { img: br, language: "pt" },
    { img: en, language: "en" },
    { img: es, language: "es" },
  ]

  const mudarLinguagem = (language: string) => {
    i18n.changeLanguage(language)
  }
  
  const sair = () => {
    localStorage.clear()
    sessionStorage.clear()
    history.push("/")
  }

  return (
    <S.Menu>
      <S.LogoText>LINKS MANAGER</S.LogoText>
      <S.ButtonsMenu
        colortext={(path.pathname === "/minhas-paginas" || path.pathname === "/edicao-pagina")
          ? "#16825d"
          : "#000000"}
        onClick={() => history.push("/minhas-paginas")}  >
        <IconeMinhasPaginas />
        {translation("minhas_paginas")}
      </S.ButtonsMenu>
      <S.ButtonsMenu
        onClick={() => history.push("/minha-conta")}
        colortext={path.pathname === "/minha-conta"
          ? "#16825d"
          : "#000000"}>
        <IconeMinhaConta />
        {translation("minha_conta")}
      </S.ButtonsMenu>
      <S.ButtonsMenu
        colortext="#000000"
        onClick={sair} >
        <IconeLogout />
        {translation("sair")}
      </S.ButtonsMenu>
      <S.LanguageText>{translation("selecionar_idioma")}</S.LanguageText>
      <S.DivFlags mediaquery={mediaQuery}>
        {listLanguages.map((language) => (
          <S.ImgFlags key={language.language} src={language.img} onClick={() => mudarLinguagem(language.language)} />
        ))}
      </S.DivFlags>
    </S.Menu>
  )
}

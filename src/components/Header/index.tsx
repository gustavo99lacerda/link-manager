import logo from '../../assets/Logo.svg'
import logoMobile from '../../assets/LogoMobile.svg'
import { useHooks } from '../../hooks/useHooks'
import * as S from './styles'
import { useRouter } from '../../hooks/useRouter';
import { useLocation } from 'react-router-dom';
import { ArrowBackIos } from '@material-ui/icons';
import { useRedux } from '../../hooks/useRedux'
import { HeaderMenu } from '../HeaderMenu'
import { StyledBreadcrumbs } from '../Breadcrumbs'

export function Header() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()
  const { pathname } = useLocation()
  const { useAppSelect } = useRedux()

  const { paginaCompleta } = useAppSelect

  const dataButtons = [
    { name: translation("como_funciona"), onClick: () => document.getElementById('como-funciona')?.scrollIntoView({ behavior: "smooth" }) },
    { name: translation("cadastre_se"), onClick: () => history.push("/cadastro") }
  ]

  const renderizaBotaoVoltar = (url: string, texto?: string) => {
    return <S.DivBotaoVoltar >
      <S.BackButton onClick={() => history.push(url)}>
        <ArrowBackIos fontSize="small" />
        {texto}
      </S.BackButton>
      {pathname === "/edicao-pagina" ? <StyledBreadcrumbs /> : null}
    </S.DivBotaoVoltar >
  }

  const renderizaBotaoLogo = () => {
    return <S.StyledButtonLogo mediaquery={mediaQuery}>
      <img src={mediaQuery === "true" ? logo : logoMobile} alt="Logo" />
    </S.StyledButtonLogo>
  }

  const renderizaBotoesTelaInicial = () => {
    return <S.DivButtons>
      {/* {mediaQuery ? (
        <>
          {dataButtons.map((button) => (
            <S.StyledButton key={button.name} onClick={button.onClick}>
              {button.name}
            </S.StyledButton>
          ))}
          <S.ButtonEntrar onClick={() => history.push("/login")}>
            {translation("entrar")}
          </S.ButtonEntrar>
        </>
      ) : null} */}
    </S.DivButtons>
  }

  const renderizaComponenteEsquerdo: Record<string, any> = {
    "/": mediaQuery === "true" ? renderizaBotaoLogo() : null,
    // "/cadastro": mediaQuery === "true" ? null : renderizaBotaoVoltar("/"),
    // "/login": mediaQuery === "true" ? null : renderizaBotaoVoltar("/"),
    "/minhas-paginas": <S.Title>{translation("minhas_paginas")}</S.Title>,
    "/edicao-pagina": renderizaBotaoVoltar("/minhas-paginas", paginaCompleta.titulo),
    "/minha-conta": renderizaBotaoVoltar("/minhas-paginas", "Minha conta")
  }

  const renderizaComponenteCentral: Record<string, any> = {
    "/": mediaQuery === "true" ? null : renderizaBotaoLogo(),
    // "/cadastro": mediaQuery === "true" ? null : renderizaBotaoLogo(),
    // "/login": mediaQuery === "true" ? null : renderizaBotaoLogo(),

  }
  const renderizaComponenteDireito: Record<string, any> = {
    "/": mediaQuery === "true" ? renderizaBotoesTelaInicial() : <HeaderMenu />,
    // "/cadastro": mediaQuery === "true" ? null : <HeaderMenu />,
    // "/login": mediaQuery === "true" ? null : <HeaderMenu />,
    "/minhas-paginas": <HeaderMenu />,
  }

  return (
    <S.HeaderComponent mediaquery={mediaQuery} pathname={pathname}>
      <S.DivComponente justifycontent='flex-start'>{renderizaComponenteEsquerdo[pathname]}</S.DivComponente>
      <S.DivComponente justifycontent='center'>{renderizaComponenteCentral[pathname]}</S.DivComponente>
      <S.DivComponente justifycontent='flex-end'>{renderizaComponenteDireito[pathname]}</S.DivComponente>
    </S.HeaderComponent>
  )
}

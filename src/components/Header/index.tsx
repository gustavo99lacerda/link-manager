import { useHooks } from '../../hooks/useHooks'
import * as S from './styles'
import react from '../../assets/react.svg'
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
    return <S.StyledButtonLogo mediaquery={mediaQuery} onClick={() => history.push("/login")}>
      <img src={mediaQuery === "true" ? react : react} alt="Logo" />
    </S.StyledButtonLogo>
  }

  const renderizaComponenteEsquerdo: Record<string, any> = {
    "/": mediaQuery === "true" ? renderizaBotaoLogo() : null,
    "/minhas-paginas": <S.Title>{translation("minhas_paginas")}</S.Title>,
    "/edicao-pagina": renderizaBotaoVoltar("/minhas-paginas", paginaCompleta.titulo),
    "/minha-conta": renderizaBotaoVoltar("/minhas-paginas", "Minha conta")
  }

  const renderizaComponenteCentral: Record<string, any> = {
    "/": mediaQuery === "true" ? null : renderizaBotaoLogo(),

  }
  const renderizaComponenteDireito: Record<string, any> = {
    "/": mediaQuery === "true" ? null : <HeaderMenu />,
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

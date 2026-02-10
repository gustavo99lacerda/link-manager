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

  const renderizaBotaoVoltar = (url: string, texto?: string) => {
    return <S.DivBotaoVoltar >
      <S.BackButton onClick={() => history.push(url)}>
        <ArrowBackIos fontSize="small" />
        {texto}
      </S.BackButton>
      {pathname === "/edicao-pagina" && mediaQuery === "true" ? <StyledBreadcrumbs /> : null}
    </S.DivBotaoVoltar >
  }

  const renderizaComponenteEsquerdo: Record<string, any> = {
    "/": <HeaderMenu />,
    "/login": mediaQuery === "true" ? null : renderizaBotaoVoltar("/"),
    "/minhas-paginas": <S.Title>{translation("minhas_paginas")}</S.Title>,
    "/edicao-pagina": renderizaBotaoVoltar("/minhas-paginas", paginaCompleta.titulo),
    "/minha-conta": renderizaBotaoVoltar("/minhas-paginas", "Minha conta")
  }

  const renderizaComponenteCentral: Record<string, any> = {
    "/": <S.LogoText>LINKS MANAGER</S.LogoText>,
    "/login": mediaQuery === "true" ? null : <S.LogoText>LINKS MANAGER</S.LogoText>
  }
  const renderizaComponenteDireito: Record<string, any> = {
    "/login": <HeaderMenu />,
    "/minhas-paginas": <HeaderMenu />,
    "/edicao-pagina": <HeaderMenu />,
    "/minha-conta": <HeaderMenu />,

  }

  return (
    <S.HeaderComponent mediaquery={mediaQuery} pathname={pathname}>
      <S.DivComponente justifycontent='flex-start'>{renderizaComponenteEsquerdo[pathname]}</S.DivComponente>
      <S.DivComponente justifycontent='center'>{renderizaComponenteCentral[pathname]}</S.DivComponente>
      <S.DivComponente justifycontent='flex-end'>{renderizaComponenteDireito[pathname]}</S.DivComponente>
    </S.HeaderComponent>
  )
}

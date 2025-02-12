import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks';
import { useRouter } from '../../hooks/useRouter';
import { IconeLogout, IconeMinhaConta, IconeMinhasPaginas } from '../../assets/imgComponents';

export function HeaderMenu() {

  const { translation, } = useHooks()
  const { history, path } = useRouter()

  const [abrirMenu, setAbrirMenu] = useState(false)

  const comoFunciona = () => {
    const element = document.getElementById('como-funciona')
    element?.scrollIntoView()
    if (path.pathname !== "/") {
      localStorage.setItem("como-funciona", "true")
      history.push("/")
    }
    setAbrirMenu(false)
  }

  const rotasPublicas = [
    { onClick: () => comoFunciona(), texto: translation("como_funciona"), },
    { onClick: () => history.push("/cadastro"), texto: translation("cadastre_se"), },
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
  return (
    <>
      <S.StyledButton width='1.875rem' onClick={() => setAbrirMenu(true)}>
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
      </S.DrawerStyled>
    </>
  )
}

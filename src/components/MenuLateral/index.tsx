import * as S from './styles'
import { useRouter } from '../../hooks/useRouter'
import { useHooks } from '../../hooks/useHooks'
import { IconeMinhaConta, IconeMinhasPaginas, IconeLogout } from '../../assets/imgComponents'

export function MenuLateral() {

  const { path, history } = useRouter()
  const { translation } = useHooks()

  const sair = () => {
    localStorage.clear()
    sessionStorage.clear()
    history.push("/")
  }

  return (
    <S.Menu>
      <S.StyledButton>
        Logo
      </S.StyledButton>
      <S.ButtonsMenu
        colortext={(path.pathname === "/minhas-paginas" || path.pathname === "/edicao-pagina")
          ? "#16825d"
          : "#000000"}
        onClick={() => history.push("/minhas-paginas")}  >
        <IconeMinhasPaginas />
        {translation("minhas_paginas")}
      </S.ButtonsMenu>
      <S.ButtonsMenu
        onClick={() => {}}
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
    </S.Menu>
  )
}

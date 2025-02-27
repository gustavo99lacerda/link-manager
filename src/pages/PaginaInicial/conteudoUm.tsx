import { useHooks } from '../../hooks/useHooks'
import imagemInicioMB from '../../assets/imagemInicioMB.svg'
import imagemInicioDK from '../../assets/imagemInicioDK.svg'
import * as S from './styles'
import { useRouter } from '../../hooks/useRouter'
import { useRedux } from '../../hooks/useRedux'
import { setUser } from '../../redux/modules/user'

export function ConteudoUm() {

  const { mediaQuery, translation } = useHooks()
  const { history } = useRouter()
  const { dispatch } = useRedux()

  const entrar = () => {
    dispatch(setUser({
      idConta: 'projectlinksmanager',
      email: 'gustavodasilvalacerda1999@gmail.com',
      nome: 'Gustavo da Silva Lacerda',
      foto: 'https://lh3.googleusercontent.com/a/ACg8ocJSbEJykoilFN04eroRkf2UmtWU_nL4LzbSA14fGgsKBamnlgKY=s360-c-no'
    }))
    history.push("/minhas-paginas")
  }

  return (
    <S.DivItensConteudoUm mediaquery={mediaQuery}>
      <S.DivTextosConteudoUm mediaquery={mediaQuery}>
        <h1>{translation("tela_inicial.todos_os_links")}</h1>
        <h2>{translation("tela_inicial.crie_sua_pagina")}</h2>
        <S.ButtonEntrar color='primary' variant='contained' mediaquery={mediaQuery}
          onClick={entrar}>
          {translation("entrar")}
        </S.ButtonEntrar>
      </S.DivTextosConteudoUm>
      <img src={mediaQuery ? imagemInicioDK : imagemInicioMB} alt="imagem personagens" />
    </S.DivItensConteudoUm>
  )
}

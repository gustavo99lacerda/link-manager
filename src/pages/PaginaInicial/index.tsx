import { useEffect } from 'react';
import * as S from './styles'
import { ConteudoUm } from './conteudoUm';
import { ConteudoDois } from './conteudoDois';
import { ConteudoTres } from './conteudoTres';
import { ConteudoQuatro } from './conteudoQuatro';
import { Header } from '../../components/Header';

export function PaginaInicial() {

  const irParaComoUsar = localStorage.getItem("como-funciona")

  useEffect(() => {
    if (irParaComoUsar === "true") {
      const element = document.getElementById('como-funciona')
      element?.scrollIntoView()
    }
    localStorage.removeItem('como-funciona')
  }, [])

  return (
    <S.Body>
      <Header />
      <ConteudoUm />
      <ConteudoDois />
      <ConteudoTres />
      <ConteudoQuatro />
    </S.Body>
  )
}

export default PaginaInicial

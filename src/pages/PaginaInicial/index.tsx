import { useEffect } from 'react';
import * as S from './styles'
import { ConteudoUm } from './conteudoUm';
import { ConteudoDois } from './conteudoDois';
import { ConteudoTres } from './conteudoTres';
import { ConteudoQuatro } from './conteudoQuatro';
import { Header } from '../../components/Header';

export function PaginaInicial() {


  useEffect(() => {
    localStorage.clear()
    sessionStorage.clear()
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

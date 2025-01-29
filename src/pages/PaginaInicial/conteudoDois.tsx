import { ImagemCelularPequeno, ImagemCelularGrande, ImagemCelularMedio1, ImagemCelularMedio2, RedesSociais } from '../../assets/imgComponents'
import { useHooks } from '../../hooks/useHooks'
import * as S from './styles.module'

export function ConteudoDois() {

  const { mediaQuery } = useHooks()

  return (
    <S.DivItensConteudoDois mediaquery={mediaQuery} >
      {mediaQuery === "true" ? <RedesSociais /> : null}
      {mediaQuery === "true"
        ? <S.DivCelulares mediaquery={mediaQuery} >
          <ImagemCelularMedio1 />
          <ImagemCelularGrande />
          <ImagemCelularMedio2 />
        </S.DivCelulares>
        : <ImagemCelularPequeno />}
    </S.DivItensConteudoDois>
  )
}

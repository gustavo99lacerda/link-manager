import * as S from './styles'


interface Props {
  titulo: string
  url: string
  ativo: boolean
}

export function CardLinks({ url, ativo, titulo }: Props) {

  const ativaOuDesativaLink = () => {
    console.log('ativando ou desativando link')
  }

  return (
    <S.CardContainer >
      <S.DivButtons>
      </S.DivButtons>
      <S.CardContent>
        <S.DivPrimeiraLinha>
          <S.TituloCard >{titulo}</S.TituloCard>
          <S.IOSSwitch checked={ativo} onChange={ativaOuDesativaLink} />
        </S.DivPrimeiraLinha>
        <S.UrlCard>{url}</S.UrlCard>
      </S.CardContent>
    </S.CardContainer>
  )
}

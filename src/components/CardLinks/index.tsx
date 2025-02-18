import { ButtonExcluirLink } from '../ButtonExcluirLink'
import * as S from './styles'


interface Props {
  titulo: string
  url: string
  ativo: boolean
  idLink: string
}

export function CardLinks({ url, ativo, titulo, idLink }: Props) {

  const ativaOuDesativaLink = () => {
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
      <ButtonExcluirLink idLink={idLink}/>
      </S.CardContent>
    </S.CardContainer>
  )
}

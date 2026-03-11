import { useHooks } from '../../hooks/useHooks'
import * as S from './styles'

export function FooterComponent() {

  const { mediaQuery, translation } = useHooks()

  return (
    <S.Footer mediaquery={mediaQuery}>
      <span>{translation("footer.disclaimer")}</span>
    </S.Footer>
  )
}

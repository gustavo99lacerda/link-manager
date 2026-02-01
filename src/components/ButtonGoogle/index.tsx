import { ButtonStyled } from "./styles";
import googleIcon from '../../assets/googleIcon.svg'

interface Props {
  texto: string
  onClick: () => void
}

export function ButtonGoogle({ texto, onClick }: Props) {

  return (
    <ButtonStyled
      onClick={onClick}
      startIcon={<img src={googleIcon} alt="icone do google" />}>
      {texto}
    </ButtonStyled>
  );
}

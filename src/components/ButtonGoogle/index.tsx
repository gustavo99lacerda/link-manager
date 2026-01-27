import { ButtonStyled } from "./styles";

interface Props {
  texto: string
  onClick: () => void
}

export function ButtonGoogle({ texto, onClick }: Props) {

  return (
    <ButtonStyled
      onClick={onClick}>
      {texto}
    </ButtonStyled>
  );
}

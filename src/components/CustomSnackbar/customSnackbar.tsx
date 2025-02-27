import React, { useState } from 'react';
import * as S from './styles';

let mostrarSnackbar: ((mensagem: string) => void) | null = null;

export const CustomSnackbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mensagem, setMessage] = useState('');

  React.useEffect(() => {
    mostrarSnackbar = (txt: string) => {
      setMessage(txt);
      setOpen(true);
    };
  }, []);

  const fecharSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <S.StyledSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={fecharSnackbar}
      message={mensagem}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
  );
};

export const customSnackbar = (mensagem: string) => {
  if (mostrarSnackbar) {
    mostrarSnackbar(mensagem);
  } else {
    console.warn('Snackbar ainda não inicializada');
  }
};
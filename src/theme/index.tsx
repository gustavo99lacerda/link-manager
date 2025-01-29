import React from 'react';
import tokens from './tokens.json';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';


const style = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '8px'
      },
      containedSecondary: {
        color: tokens['token-verde-padrao'],
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 64px',
        '& .MuiButton-fullWidth': {
          padding: '20px 0',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "black"
        }
      }
    },
  },
});

interface Props {
  children: React.ReactNode;
}

const Theme = (props: Props) => {
  const { children } = props
  return (
    <MuiThemeProvider theme={style}>
      {children}
    </MuiThemeProvider>
  );
};

export default Theme;

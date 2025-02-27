import React from 'react';
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
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    primary: {
      light: '#16825d',
      main: '#16825d',
      dark: '#16825d'
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        borderRadius: '4px',
        color: "#FFFFFF",
        background: "#16825d",
        backgroundColor: "#16825d",
        minHeight: "38px",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "100%",
        textTransform: "none",
        "&$focusVisible": {
          background: "#16825d",
          accentColor: "#16825d"
        },
        "&:hover": {
          backgroundColor: "#16825d",
        },
        "&:disabled": {
          backgroundColor: "#AEC3D2",
          color: "#4D5C6C"
        }
      },
      outlinedPrimary: {
        borderRadius: '4px',
        color: "#16825d",
        background: "#FFFFFF",
        width: "100%",
        minHeight: "38px",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "100%",
        textTransform: "none",
        border: `1px solid #16825d`
      },
      colorInherit: {
        color: "#FFFFFF"
      }
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

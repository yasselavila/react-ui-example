import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import React, { ReactElement, ReactNode } from 'react';

const defaultTheme: Theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#F2F3F4',
      paper: '#FFFFFF'
    },
    primary: {
      main: '#AB61E5'
    },
    text: {
      primary: '#031323',
      secondary: '#59636E'
    }
  }
});

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />

      {children}
    </MuiThemeProvider>
  );
}

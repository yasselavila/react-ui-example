import React, { ReactElement, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './core/components/layout';
import { ThemeProvider } from './core/components/theme-provider/theme-provider';
import { AuthProvider } from './core/context/auth';
import { AppRoutes, AuthRoutes } from './routes/routes';
import './styles.scss';

export function App(): ReactElement {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <Layout authRoutes={AuthRoutes} appRoutes={AppRoutes} />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

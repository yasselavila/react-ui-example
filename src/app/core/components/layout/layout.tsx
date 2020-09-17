import React, { FC, lazy, ReactElement, Suspense } from 'react';
import { useAuth } from '../../context/auth';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';

const AuthLayout = lazy(() => import('./auth-layout/auth-layout'));
const AppShell = lazy(() => import('./app-shell/app-shell'));

export interface LayoutProps {
  authRoutes: FC;
  appRoutes: FC;
}

export function Layout({ authRoutes, appRoutes }: LayoutProps): ReactElement {
  const { isAuthenticated } = useAuth();

  const routes = React.createElement(isAuthenticated ? appRoutes : authRoutes);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      {isAuthenticated ? <AppShell children={routes} /> : <AuthLayout children={routes} />}
    </Suspense>
  );
}

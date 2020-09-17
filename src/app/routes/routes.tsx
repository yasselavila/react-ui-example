import React, { lazy, ReactElement, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoadingIndicator } from '../core/components/loading-indicator/loading-indicator';

const Login = lazy(() => import('../pages/auth/login/login'));
const Logout = lazy(() => import('../pages/auth/logout/logout'));

const ShareFeedback = lazy(() => import('../pages/share-feedback/share-feedback'));
const MyFeedback = lazy(() => import('../pages/my-feedback/my-feedback'));
const NotFound = lazy(() => import('../pages/not-found/not-found'));

export function AuthRoutes(): ReactElement {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="**">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Suspense>
  );
}

export function AppRoutes(): ReactElement {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/share-feedback" component={ShareFeedback} />
        <Route path="/my-feedback" component={MyFeedback} />
        <Route path="/404" component={NotFound} />

        <Route path="**">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Suspense>
  );
}

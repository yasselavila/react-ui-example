import React, { lazy, ReactElement, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoadingIndicator } from '../../../core/components/loading-indicator/loading-indicator';

const UsersList = lazy(() => import('../pages/users-list/users-list'));
const ProvideFeedback = lazy(() => import('../pages/provide-feedback/provide-feedback'));

export function ShareFeedbackRoutes(): ReactElement {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/share-feedback/:userId" component={ProvideFeedback} />
        <Route path="/share-feedback" component={UsersList} />

        <Route path="**">
          <Redirect to="/share-feedback" />
        </Route>
      </Switch>
    </Suspense>
  );
}

import React, { lazy, ReactElement, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoadingIndicator } from '../../../core/components/loading-indicator/loading-indicator';

const Feedback = lazy(() => import('../pages/feedback/feedback'));
const UserFeedback = lazy(() => import('../pages/user-feedback/user-feedback'));

export function MyFeedbackRoutes(): ReactElement {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/my-feedback/:userId" component={UserFeedback} />
        <Route path="/my-feedback" component={Feedback} />

        <Route path="**">
          <Redirect to="/my-feedback" />
        </Route>
      </Switch>
    </Suspense>
  );
}

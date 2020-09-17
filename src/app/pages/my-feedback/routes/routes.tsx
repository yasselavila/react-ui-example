import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserFeedback from '../pages/user-feedback/user-feedback';

export function MyFeedbackRoutes(): ReactElement {
  return (
    <Switch>
      <Route path="/my-feedback/:userId" component={UserFeedback} />

      <Route path="**">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

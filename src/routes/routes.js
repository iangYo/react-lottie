import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import * as Pages from './';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login" component={Pages.LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

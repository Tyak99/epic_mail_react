import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Home from '../views/home';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

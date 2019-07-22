import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Home from '../views/Homepage/Homepage';
import Sent from '../views/Sent/Sent';
import Inbox from '../views/Inbox/Inbox';

const Routes = () => (

  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/inbox" exact component={Inbox} />
    <Route path="/sent" exact component={Sent} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

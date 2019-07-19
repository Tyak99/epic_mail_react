import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Home from '../views/Homepage/Homepage';
import Sent from '../views/Sent';
import Inbox from '../views/Inbox/Inbox';

const Routes = () => (

  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sent" exact component={Sent} />
    <Route path="/inbox" exact component={Inbox} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

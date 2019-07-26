import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Home from '../views/Homepage/Homepage';
import Sent from '../views/Sent/Sent';
import Inbox from '../views/Inbox/Inbox';
import Compose from '../views/Compose/Compose';
import Register from '../views/Register/Register';
import SingleMessage from '../components/SingleMessage/SingleMessage';
import PrivateRoutes from '../components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from '../components/PublicRoutes/PublicRoutes';

const Routes = () => (

  <Switch>
    <PublicRoutes path="/" exact component={Home} />
    <PublicRoutes path="/register" component={Register} />
    <PrivateRoutes path="/inbox" component={Inbox} />
    <PrivateRoutes path="/sent" component={Sent} />
    <PrivateRoutes path="/compose" exact component={Compose} />
    <PrivateRoutes path="/view/:id" component={SingleMessage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

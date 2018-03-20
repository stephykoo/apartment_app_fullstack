import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Apartments from './Apartments';
import NewApartment from './NewApartment';
import Login from './Login';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Apartments} />
    <Route exact path="/apartments" component={Apartments} />
    <Route exact path="/new_apartment" component={NewApartment} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Content;

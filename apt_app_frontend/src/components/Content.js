import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Apartments from './Apartments';
import NewApartment from './NewApartment';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Apartments} />
    <Route exact path='/register' component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/apartments" component={Apartments} />
    <Route exact path="/new_apartment" component={NewApartment} />
  </Switch>
);

export default Content;

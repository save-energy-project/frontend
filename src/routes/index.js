import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Home } from '../containers';

const Routes = () => (
  <Router>
    <Route path='/' component={Home} />
  </Router>
);


export default Routes;

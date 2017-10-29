import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Home } from '../containers';
import Login from './../components/Login';

const Routes = () => (
  <Router>
  	<Switch>
    	<Route path='/' exact component={Home} />
    	<Route path='/login' component={Login} />
    </Switch>
  </Router>
);


export default Routes;

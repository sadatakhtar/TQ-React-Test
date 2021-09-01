import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Companies from './Companies';
import CreateCompany from './CreateCompany';
import Employees from './Employees';

import Home from './Home';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path='/create' component={CreateCompany} />
       <Route path='/companies' component={Companies} />
       <Route path='/employees' component={Employees} />
      <Route path='/' exact component={Home} />
      <Route path='/' component={NotFound} />
    </Switch>
  );
};

export default Routes;

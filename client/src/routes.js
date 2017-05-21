import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Add, Home, Recipes } from './components';

// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Recipes} />
      <Route path="/add" component={Add} />
    </Route>
  </Router>
);

export default routes;
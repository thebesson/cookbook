import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Add, Home, RecipesList } from './components';
import {RecipesContainer} from './containers';

// Use hashHistory for easier development
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={RecipesContainer} />
      <Route path="/add" component={Add} />
    </Route>
  </Router>
);

export default routes;
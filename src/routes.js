import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './Component/HomePage/HomePage.jsx';
import App from './Component/App/App.jsx';


module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);

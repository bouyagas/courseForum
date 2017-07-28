/* eslint-disable import/no-extraneous-dependencies,no-undef,react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import 'whatwg-fetch';
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root-container'),
);

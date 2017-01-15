import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import ReactWelcome from './ReactWelcome/ReactWelcome';

let mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ReactWelcome}>
    </Route>
  </Router>),
mountPoint);

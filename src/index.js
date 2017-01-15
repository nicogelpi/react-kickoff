import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import ReactWelcome from './ReactWelcome/ReactWelcome';

let mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

ReactDOM.render((
  <Router history={browserHistory}>
    {ReactWelcome}
  </Router>),
mountPoint);

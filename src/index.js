import './index.scss' 
import React from 'react'
import store from './store'
import ReactDOM from 'react-dom'
import cacheWorker from 'offline-plugin/runtime'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Start from './Components/Start/Start'
const __store = store()

if (process.env.NODE_ENV !== 'development') {
  cacheWorker.install()
}

ReactDOM.render((
  <Provider store={__store}>
    <Router history={syncHistoryWithStore(browserHistory, __store)}>
      <Route path='/' component={Start} />
    </Router>
  </Provider>),
  document.body.appendChild(document.createElement('div'))
)
import './index.scss'
import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import reducers from './Reducers'
import { Provider } from 'react-redux'
import List from './Components/List/List'
import Start from './Components/Start/Start'
import compose from './Helpers/ReduxDevtools'
import cacheWorker from 'offline-plugin/runtime'
import { Router, browserHistory } from 'react-router'
import LocalStorageMiddleware from './Middlewares/LocalStorage'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

const localState = new LocalStorageMiddleware('data', ['List'])

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  localState.InitialState(),
  compose(applyMiddleware(thunk, localState.MiddleWare()))
)

if (process.env.NODE_ENV !== 'development') {
  cacheWorker.install()
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      {Start}
      {List}
    </Router>
  </Provider>), document.body.appendChild(document.createElement('div'))
)

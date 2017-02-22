import './index.scss'
import cacheWorker from 'offline-plugin/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import LocalStorageMiddleware from './Middlewares/LocalStorage'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './Reducers'
import Start from './Components/Start/Start'
import List from './Components/List/List'

const localState = new LocalStorageMiddleware('data', ['List'])
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(thunk, localState.MiddleWare())
  )
)

if (process.env.NODE_ENV !== 'development') {
  cacheWorker.install()
}

let mountPoint = document.createElement('div')
document.body.appendChild(mountPoint)

ReactDOM.render((
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      {Start}
      {List}
    </Router>
  </Provider>), mountPoint
)

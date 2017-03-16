import Reducers from './Reducers'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhanced = process.env.NODE_ENV === 'development' && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose

export default () => {
  const store = createStore(
    Reducers,
    composeEnhanced(
      applyMiddleware(
        routerMiddleware(browserHistory)
      )
    )
  )

  return store
}
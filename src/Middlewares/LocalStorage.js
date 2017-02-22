export default class LocalStorageMan {
  constructor(keyName = 'localMiddleware', reducerNames = []) {
    this.keyName = keyName
    this.reducerNames = reducerNames
  }

  MiddleWare() {
    return store => next => action => {
      // First, we run the action
      next(action)

      // Save his state
      let originalState = store.getState()
      let state = Object.keys(originalState)
        .filter(key => this.reducerNames.includes(key))
        .reduce((prev, item) => {
          prev[item] = originalState[item]
          return prev
        }, {})

      window.localStorage.setItem(this.keyName, JSON.stringify(state))
    }
  }

  InitialState() {
    try { 
      return JSON.parse(window.localStorage.getItem(this.keyName))
    }
    catch (e) {
      return {}
    }
  }
}
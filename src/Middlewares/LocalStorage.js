export default class LocalStorageMan {
  constructor(keyName = 'localMiddleware', reducerNames = []) {
    this.keyName = keyName
    this.reducerNames = reducerNames
  }

  MiddleWare() {
    return store => next => action => {
      let originalState = store.getState()
      let state = Object.keys(originalState)
        .filter(key => this.reducerNames.includes(key))
        .reduce((prev, item) => {
          return prev[item] = originalState[item]
        }, {})
        
      console.log(state)

      next(action)
      //window.localStorage.setItem(this.keyName, )
    }
  }

  InitialState() {
    
  }
}
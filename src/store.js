import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducers'

const logger = () => next => action => {
  console.log("logged:", action)
  return next(action)
}

const middleware = [logger, reduxPromise]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducer)
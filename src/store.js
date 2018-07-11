import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducers'


const logger = () => {
  return next => action => {
    console.log("logged", action)
  }
}

const middleware = [logger, reduxPromise, logger]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);



export default createStoreWithMiddleware(reducer)
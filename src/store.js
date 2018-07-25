import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from './reducers'

const middleware = [reduxPromise]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(reducer)
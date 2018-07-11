import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(reducer)
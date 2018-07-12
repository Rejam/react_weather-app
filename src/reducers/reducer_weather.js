import { FETCH_WEATHER } from '../actions/types'
import uuid from 'uuid'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER: 
      action.payload.data.id = uuid()
      return [action.payload.data, ...state]
    default:
      return state
  }
}
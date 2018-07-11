import { FETCH_WEATHER } from './types'
import api from '../api'

const fetch_weather = city => {
  return {
    type: FETCH_WEATHER,
    payload: api(city)
  }
}

export { fetch_weather }
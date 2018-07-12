import { FETCH_WEATHER } from './types'
import weatherApi from '../api'

const fetch_weather = city => ({
  type: FETCH_WEATHER,
  payload: weatherApi(city)
})

export { fetch_weather }
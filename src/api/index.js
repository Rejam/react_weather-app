import axios from 'axios'
import { API_KEY } from './config'

const ROOT = `https://api.openweathermap.org/data/2.5/forecast`
const UNIT = "units=metric"
const PARTIAL = `${ROOT}?appid=${API_KEY}&${UNIT}`

export default function(city) {
  const url = `${PARTIAL}&q=${city}`
  return axios.get(url)
}

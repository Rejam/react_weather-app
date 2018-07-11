import axios from 'axios'
import { API_KEY } from './config'

const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export default function(city) {
  const url = `${rootUrl}&q=${city},gb`
  return axios.get(url)
}
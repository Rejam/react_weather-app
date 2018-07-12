import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends React.Component {

  extractData = data =>
    data.list.reduce((acc, weather) => {
      const { temp, humidity, pressure } = weather.main
      return {
        temp:   [...acc.temp, temp],
        humid:  [...acc.humid, humidity],
        press:  [...acc.press, pressure],
      }
    }, {temp: [], humid: [], press: []})

  renderWeather = cityData => {
    const { name } = cityData.city
    const cityData = this.extractData(cityData)

    return (
      <tr key={ cityData.id }>
        <td>{ name }</td>
        <td>
          <Chart data={ cityData.temp } color="orange" />
        </td>
        <td>
          <Chart data={ cityData.humid } color="blue" />
        </td>
        <td>
          <Chart data={ cityData.press } color="red" /> 
        </td>
      </tr>
    )
  }

  render() {
    const WeatherChartsForEachCity = () => this.props.weather.map(this.renderWeather)

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
          <tbody>
            <WeatherChartsForEachCity />
          </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
})

export default connect(mapStateToProps)(WeatherList)
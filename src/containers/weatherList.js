import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import Map from '../components/map'

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
    const { lat, lon } = cityData.city.coord
    const city = this.extractData(cityData)

    return (
      <tr key={ cityData.id }>
        <td>
          <Map lat={ lat } lon={ lon }/>
        </td>
        <td>
          <Chart
            data={ city.temp } 
            color="red"
            unit="&deg;C" />
        </td>
        <td>
          <Chart 
            data={ city.press } 
            color="black"
            unit="hpa"
            /> 
        </td>
        <td>
          <Chart 
            data={ city.humid } 
            color="orange"
            unit="%"
            />
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
            <th>Temperature (&deg;C)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
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
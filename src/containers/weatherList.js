import React from 'react'
import { connect } from 'react-redux'
import City from '../components/city'

class WeatherResults extends React.Component {

  render() {
    const Cities = ({ weather }) => 
      !weather ? null : weather.map( data =>
        <City key={data.id} data={ data } />
      )

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
            <Cities weather={ this.props.weather } />
          </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
})

export default connect(mapStateToProps)(WeatherResults)
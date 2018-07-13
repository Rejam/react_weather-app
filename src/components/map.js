import React from 'react'

class Map extends React.Component {

  componentDidMount() {
    console.log("map", this.props, this.refs.map)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render(){
    return (
      <div className="map" ref="map" />
    )
  }
}

export default Map
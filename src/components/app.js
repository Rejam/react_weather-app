import React, { Component } from 'react';
import Searchbar from '../containers/searchbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <Searchbar />
      </div>
    );
  }
}

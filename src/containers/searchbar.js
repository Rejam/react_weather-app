import React from 'react'
import { connect } from 'react-redux'
import { fetch_weather } from '../actions/'

class Searchbar extends React.Component {

  onSubmitSearch = e => {
    e.preventDefault()
    const { value: userInput } = e.target.elements.search
    // TODO: validate input

    this.props.fetch_weather(userInput)
    e.target.elements.search.value = ""
  }

  render() {
    return (
      <form className="input-group" onSubmit={ this.onSubmitSearch }>
        <input 
          type="text"
          name="search"
          className="form-control"
          placeholder="Get a 5-day forecast in your favourite cities"
        />
        <div className="input-group-append">
          <button className="btn btn-primary">Search</button>     
        </div>
      </form>
    )
  }
}

export default connect(null, { fetch_weather })(Searchbar)

import React, { Component } from 'react';
import yelpApi from '../api/Yelp'

class Search extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let inputLocation = this.refs.location.value;
    let inputTerm = this.refs.type.value || ""
    this.props.check(inputLocation, inputTerm);
  }

  render() {
    return (
      <form >
          <label>
            Type:
            <input type="text" ref="type"/>
          </label>
          <label>
            Location:
            <input type="text" ref="location"/>
          </label>
          <input type="submit" value="Pick4Me" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default Search;

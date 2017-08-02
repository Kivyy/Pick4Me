import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      fireRedirect: false
    }

  }

  submitForm = (e) => {
  e.preventDefault()
  this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <div>
        <form onSubmit={this.submitForm}>
          <button type="submit">Submit</button>
        </form>
        {fireRedirect && (
          <Redirect to='/result'/>
        )}
      </div>
    );
  }
}

export default Search;

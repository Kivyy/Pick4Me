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
        <form onSubmit={this.submitForm} className="text-center">
          <button className="btn-lg btn-all"> Start </button>
        </form>
        {fireRedirect && (
          <Redirect to='/result'/>
        )}
      </div>
    );
  }
}

export default Search;

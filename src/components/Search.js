import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form >
          <label>
            Type:
            <input type="text" />
          </label>
          <label>
            Location:
            <input type="text" />
          </label>
          <input type="submit" value="Pick4Me" />
      </form>
    );
  }
}

export default Search;

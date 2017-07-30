import React, { Component } from 'react';
import Search from './components/Search'
import './css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      destination: "",
      term: "",
      location: ""
    }
  }

  render() {
    return (
      <div>
        <h1 className="title"> Pick4Me </h1>
        <Search />
      </div>
    );
  }
}

export default App;

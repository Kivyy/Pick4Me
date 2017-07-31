import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter, Route} from 'react-router-dom'
import Search from './components/Search'
import './css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      destination: "",
      term: "",
      location: "",
      businesses: []
    },

    this.updateAppState = this.updateAppState.bind(this);
  }

  updateAppState(local,category) {
    this.setState({destination: local, term: category});
  }

  render() {
    return (
      <div>
        <h1 className="title"> Pick4Me </h1>
        <Search check={this.updateAppState}/>
        <Route>

        </Route>
      </div>
    );
  }
}

export default App;

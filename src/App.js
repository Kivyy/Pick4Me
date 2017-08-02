import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import BusinessCard from './components/BusinessCard'
import './css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      businesses: []
    }
  }

  updateAppState(local,category) {
    this.setState({destination: local, term: category})
  }

  componentDidMount () {
    fetch("http://localhost:3000/").then((response) => {
      response.json().then((json)=> {
        this.setState({businesses: json});
      })
    })
  }

  render() {
    return (
      <div>
        <h1 className="title"> Pick4Me </h1>
      <BrowserRouter>
        <div>
        <Route exact path={"/"} component={() => <Search check={this.updateAppState}/>} />
        <Route path='/result' component={BusinessCard}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

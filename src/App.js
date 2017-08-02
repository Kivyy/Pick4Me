import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import lodash from 'lodash';
import BusinessCard from './components/BusinessCard'
import './css/App.css';

const _ = lodash;

class App extends Component {
  constructor() {
    super()

    this.state = {
      businesses: [],
      selectedBusiness: []
    },

    this.updateAppState = this.updateAppState.bind(this);
  }

  updateAppState(local,category) {
    this.setState({destination: local, term: category})
  }

  componentWillMount () {
    fetch("http://localhost:3000/").then((response) => {
      response.json().then((data)=> {
        this.setState({businesses: data});
        this.setState({selectedBusiness: _.sample(this.state.businesses)});
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

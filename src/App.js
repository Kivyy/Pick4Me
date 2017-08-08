import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { BrowserRouter, Route , Link} from 'react-router-dom'
import Search from './components/Search'
import lodash from 'lodash';
import BusinessCard from './components/BusinessCard';
import SelectedBar from './components/SelectedBar';
import './css/App.css';


const _ = lodash;

class App extends Component {
  constructor() {
    super()

    this.state = {
      businesses: [],
      selectedBusiness: []
    },

    this.handleChangeBusiness = this.handleChangeBusiness.bind(this);
  }

  componentWillMount () {
    fetch("http://localhost:3000/").then((response) => {
      response.json().then((data)=> {
        this.setState({businesses: data});
        this.setState({selectedBusiness: _.sample(this.state.businesses)});
      })
    })
  }

  handleChangeBusiness(){
      this.setState({selectedBusiness: _.sample(this.state.businesses)});
  }

  render() {
    return (
      <div className="container text-center">
        <a href='/' className="title text-center"> BarTindr </a>
      <BrowserRouter>
        <div>
        <Route exact path={"/"} component={Search} />
        <Route path='/result' component={() => <BusinessCard selectedBar={this.state.selectedBusiness} newCard={this.handleChangeBusiness}/>}/>
        <Route path='/selectedbar' component={() => <SelectedBar barLocation={this.state.selectedBusiness.coordinates}/>}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

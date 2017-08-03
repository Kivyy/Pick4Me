import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';
import GoogleMapContainer from './Map';

class BusinessCard extends Component {
  constructor () {
    super()
    this.state = {
      map: false
    }
    this.renderMap = this.renderMap.bind(this)
  }

  renderMap(){
    const bar = this.props.selectedBar
    this.setState({map: !this.state.map})
  }
  render() {
    const newCard = this.props.newCard
    const bar = this.props.selectedBar

    if(bar.coordinates){
      return (
        <div>
          <h2>{bar.name}</h2>
          <h4>Phone Number: {bar.display_phone}</h4>
          <img src={bar.image_url} />
          <button onClick={this.renderMap}> Yes </button>
          <button onClick={newCard}> No </button>
          {this.state.map ? <GoogleMapContainer barLat={bar.coordinates.latitude} barLong={bar.coordinates.longitude} /> : ""}
        </div>
      )

    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
}

export default BusinessCard;

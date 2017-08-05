import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';
import GoogleMapContainer from './Map';
import UserLocation from './Geolocation';
import DirectionsExample from './NewMap';

class BusinessCard extends Component {
  constructor () {
    super()
    this.state = {
      map: false,
      userLocation: ''
    }
    this.renderMap = this.renderMap.bind(this)
    this.handleUserLocation = this.handleUserLocation.bind(this);
  }

  renderMap(){
    const bar = this.props.selectedBar
    this.setState({map: !this.state.map})
  }

  handleUserLocation(location){
    this.setState({userLocation: location});
  }
  render() {
    const newCard = this.props.newCard
    const bar = this.props.selectedBar

    if(bar.coordinates){
      return (
        <div>
          <DirectionsExample/>
          <h2>{bar.name}</h2>
          <h4>Phone Number: {bar.display_phone}</h4>
          <img src={bar.image_url} />
          <button onClick={this.renderMap}> Yes </button>
          <button onClick={newCard}> No </button>

          <UserLocation submitLocation={this.handleUserLocation}/>
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

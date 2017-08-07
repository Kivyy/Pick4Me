import React, { Component } from 'react';
import DirectionsExample from './NewMap';
import UserLocation from './Geolocation';


class SelectedBar extends Component {
  constructor (){
    super();
    this.state = {
      userLocation: '',
      locationLocked: false
    }
    this.handleUserLocation = this.handleUserLocation.bind(this);
  }

  handleUserLocation(location){
    this.setState({userLocation: location, locationLocked: true});
  }


  render(){
    console.log(this.props.barLocation);
    const barDirection = this.props.barLocation

    if (barDirection && this.state.locationLocked){
      return(
        <div>
        <DirectionsExample barPostion={barDirection} userPosition={this.state.userLocation}/>
        </div>
      )
    } else if(barDirection) {
      return (
        <div>
          <UserLocation submitLocation={this.handleUserLocation}/>
        </div>
      )
    } else {
        return(
          <div>
          Loading...
          </div>
        )
    }
  }
}


export default SelectedBar;

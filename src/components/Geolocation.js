import React from 'react';
import {geolocated} from 'react-geolocated';

class UserLocation extends React.Component {

  constructor(){
    super()

    this.getUserLocation = this.getUserLocation.bind(this);
  }

  getUserLocation(e){
    e.preventDefault();
    const userLocation = {
      lat: this.props.coords.latitude,
      lng: this.props.coords.longitude
    }
    this.props.submitLocation(userLocation);
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>: !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <button onClick={this.getUserLocation}>Current Location</button>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(UserLocation);

import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'



class GoogleMapContainer extends React.Component {
    render() {
        let barLat = this.props.barLat;
        let barLong = this.props.barLong;
        let barPosition = {
          lat: barLat,
          lng: barLong
        }
        if(barPosition){
          return(
            <Map google={this.props.google}
            style={{width: '50%', height: '50%', position: 'relative'}}
            className={'map'}
            zoom={14}
            initialCenter={barPosition}>
            <Marker
            name={'Wall Street'}
            position={barPosition} />
            </Map>

          )
        } else {
          return(
            <div>Loading...</div>
          )
        }
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAaHyms3oihd-LVDKLr8PL5KU1Z6BNXi4o'
})(GoogleMapContainer)

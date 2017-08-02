import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'



class GoogleMapContainer extends React.Component {
    render() {
        return(
            <Map google={this.props.google}
                style={{width: '50%', height: '50%', position: 'relative'}}
                className={'map'}
                zoom={14}
                initialCenter={{
                lat: 40.706567,
                lng: -74.009042
              }}>
              <Marker
                name={'Wall Street'}
                position={{lat: 40.706567, lng: -74.009042}} />
            </Map>

        )
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAaHyms3oihd-LVDKLr8PL5KU1Z6BNXi4o'
})(GoogleMapContainer)

import React, { Component } from 'react';
import DirectionsExample from './NewMap';
import UserLocation from './Geolocation';


class SelectedBar extends Component {
  constructor (){
    super()
  }

  render(){
    console.log(this.props.barLocation);
    return(
      <div>
        Hello this is selected bar section
      </div>
    )
  }
}


export default SelectedBar;

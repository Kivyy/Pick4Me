/* eslint-disable no-undef */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default class DirectionsExample extends Component {
  constructor(){
    super()
    this.state = {
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      directions: null,

    }
  }
  componentWillMount(){
    const bar = this.props.barPostion;
    const user = this.props.userPosition;
    if(bar && user) {
      console.log("hit")
      this.setState({origin: new google.maps.LatLng(bar.latitude, bar.longitude), destination: new google.maps.LatLng(user.lat, user.lng)})
    }
  }
  
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.WALKING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    console.log(this.props)
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: `500px` }} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    );
  }
}

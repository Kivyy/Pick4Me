import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';
import GoogleMapContainer from './Map';

class BusinessCard extends Component {
  constructor () {
    super()

    this.state = {
      yesToBar: false
    }

    this.handleYes = this.handleYes.bind(this);
  }

  handleYes (e){
    e.preventDefault();
    this.setState({yesToBar: true});
  }

  render() {
    const newCard = this.props.newCard
    const bar = this.props.selectedBar
    // console.log("this are the coordinates", bar["coordinates"])


    if(bar.coordinates && !this.state.yesToBar){
      return (
        <div>
          <p>{bar.coordinates.longitude}</p>
          <p>{bar.name}</p>
          <img src={bar.image_url} />
          <button onClick={this.handleYes}> Yes </button>
          <button onClick={newCard}> No </button>
        </div>
      )
    } else if (this.state.yesToBar){
      return (
        <div>
          <p>{bar.coordinates.longitude}</p>
          <p>{bar.name}</p>
          <img src={bar.image_url} />
          <button onClick={this.handleYes}> Yes </button>
          <button onClick={newCard}> No </button>
          <GoogleMapContainer barLat={bar.coordinates.latitude} barLong={bar.coordinates.longitude} />
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

import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';
import GoogleMapContainer from './Map';

class BusinessCard extends Component {
  constructor () {
    super()

  }


  render() {
    const newCard = this.props.newCard
    const bar = this.props.selectedBar
    // console.log("this are the coordinates", bar["coordinates"])
    if(bar.coordinates){
      return (
        <div>
          <p>{bar.coordinates.longitude}</p>
          <p>{bar.name}</p>
          <img src={bar.image_url} />
          <button> X </button>
          <button onClick={newCard}> Yes </button>
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

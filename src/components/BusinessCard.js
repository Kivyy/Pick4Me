import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';

class BusinessCard extends Component {
  constructor () {
    super()
  }

  render() {
    const newCard = this.props.newCard
    const bar = this.props.selectedBar
    return (
      <div>
        <p>{bar.name}</p>
        <button> X </button>
        <button onClick={newCard}> Yes </button> 
      </div>
    )
  }
}

export default BusinessCard;

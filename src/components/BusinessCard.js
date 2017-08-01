import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';

class BusinessCard extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div>
        <p>This is the business card component</p>
      </div>
    )
  }
}

export default BusinessCard;

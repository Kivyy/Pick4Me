import React, { Component } from 'react';
import yelp from 'yelp-fusion';
import xhr from 'xhr';

class BusinessCard extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    fetch("http://localhost:3000/").then((response) => {
      response.json().then((json)=> {
        console.log(json);
      })
    })
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

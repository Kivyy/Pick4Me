import React, { Component } from 'react';
import DirectionsExample from './NewMap';
import { Redirect } from 'react-router'


class BusinessCard extends Component {
  constructor () {
    super()
    this.state = {
      map: false,
      userLocation: '',
      fireRedirect: false
    }
    this.clickYes = this.clickYes.bind(this);
  }

  clickYes = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }
  render() {
    const { fireRedirect } = this.state
    const newCard = this.props.newCard
    const bar = this.props.selectedBar

    if(bar.coordinates){
      return (
        <div>
          <h2>{bar.name}</h2>
          <h4>Phone Number: {bar.display_phone}</h4>
          <img src={bar.image_url} />
          <button onClick={this.clickYes}> Yes </button>
          {fireRedirect && (
            <Redirect to='/selectedbar'/>
          )}
          <button onClick={newCard}> No </button>
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

import React, { Component } from 'react';
import DirectionsExample from './NewMap';
import { Redirect } from 'react-router';
import { Card, CardImg, CardText, CardBlock,CardTitle, CardSubtitle, Button } from 'reactstrap';

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
          <Card>
            <CardImg top className="my-flex-card" width="100%" src={bar.image_url} alt="Card image cap" />
            <CardBlock>
              <CardTitle>Bar Name:</CardTitle>
              <CardSubtitle>{bar.name}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
              <button  className="btn" onClick={this.clickYes}> Yes </button>
              {fireRedirect && (
                <Redirect to='/selectedbar'/>
              )}
              <button className="btn" onClick={newCard}> No </button>
            </CardBlock>
          </Card>
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

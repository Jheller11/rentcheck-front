import React, { Component } from 'react'
import axios from 'axios'

class Estimate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/apartments/estimates/${this.state.id}`)
      .then(res => {
        let apartment = res.data[0]
        this.setState({
          data: apartment
        })
      })
  }
  render() {
    let display
    if (this.state.data) {
      display = (
        <div>
          <h3>ESTIMATED MONTHLY RENT:</h3>
          <h3>${parseInt(this.state.data.rent)}</h3>
          <p>Bedrooms: {this.state.data.bedrooms}</p>
          <p>Bathrooms: {this.state.data.baths}</p>
          <p>Square Feet: {this.state.data.size}</p>
          <p>Parking Spots: {this.state.data.parking}</p>
          <p>Neighborhood: {this.state.data.neighborhood}</p>
        </div>
      )
    } else {
      display = 'No Estimate Found.  Please go back and try again.'
    }
    return (
      <div>
        <div>
          <h4>Apartment Details:</h4>
          {display}
        </div>
      </div>
    )
  }
}

export default Estimate

import React, { Component } from 'react'
const BarChart = require('react-chartjs').Bar

class ApartmentData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: [
          'Studio',
          '1 Bedroom',
          '2 Bedroom',
          '3 Bedroom',
          'All',
          'Current Estimate'
        ],
        datasets: [
          {
            label: 'Price',
            fillColor: 'red',
            data: [1656, 2028, 2542, 2576, 2091, this.props.apartment.rent]
          },
          {
            label: 'Square Feet',
            fillColor: 'blue',
            data: [487, 706, 991, 1339, 742, this.props.apartment.size]
          }
        ]
      }
    }
  }
  render() {
    return (
      <div>
        <BarChart data={this.state.data} redraw height="300px" width="500px" />
      </div>
    )
  }
}

export default ApartmentData
